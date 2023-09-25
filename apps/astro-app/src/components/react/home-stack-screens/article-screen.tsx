import {BackIcon, Link, View} from "@castro/ui-components";
import {BlockTitle, Button, Card, Navbar, NavbarBackLink} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {ActionSheet, ActionSheetButtonStyle} from "@capacitor/action-sheet";
import {StackActions} from "@react-navigation/native";

const ArticleScreen = ({navigation}) => {
    const showActions = async () => {
        const result = await ActionSheet.showActions({
            title: 'Photo Options',
            message: 'Select an option to perform',
            options: [
                {
                    title: 'Upload',
                },
                {
                    title: 'Share',
                },
                {
                    title: 'Remove',
                    style: ActionSheetButtonStyle.Destructive,
                },
            ],
        });

        console.log('Action Sheet result:', result);
    };

    return (
        <View>
            <Navbar
                translucent
                transparent
                left={<NavbarBackLink
                    className="ml-2"
                    component={BackIcon}
                    onClick={() => navigation.dispatch(StackActions.pop())}
                />}
                medium
                className={'absolute top-0'}
                title={document?.title}
            />
            <BlockTitle withBlock={false}>Card</BlockTitle>
            <Card
                footer={
                    <Button onClick={showActions} tonal rounded>Photo Options</Button>
                }
            >
                <Link to={{screen: AppRoutes.USER}}>Go to User</Link>
            </Card>
        </View>
    )
}

export default ArticleScreen;
