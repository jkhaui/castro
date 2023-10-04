import {BackIcon, Link, View} from "@castro/ui-components";
import {BlockTitle, Button, Card, Navbar, NavbarBackLink} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {ActionSheet, ActionSheetButtonStyle} from "@capacitor/action-sheet";
import {StackActions} from "@react-navigation/native";
import {capitalize} from "@/utils/utils";

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
                    theme={'material'}
                    className="ml-0.5"
                    component={props => <BackIcon theme={'material'} {...props} />}
                    onClick={() => navigation.dispatch(StackActions.pop())}
                />}
                medium
                className={'absolute top-0'}
                title={capitalize(AppRoutes.ARTICLE)}
            />
            <Card
                footer={
                    <Button onClick={showActions} tonal rounded>Photo Options</Button>
                }
            >
                <Link to={{screen: AppRoutes.USER}}>View a user</Link>
            </Card>
        </View>
    )
}

export default ArticleScreen;
