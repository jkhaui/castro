import {BackIcon, Link, View} from "@castro/ui-components";
import {BlockTitle, Button, Card, Navbar, NavbarBackLink} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {Toast} from "@capacitor/toast";
import {StackActions} from "@react-navigation/native";

const UserScreen = ({navigation}) => {
    const showToast = async () => {
        await Toast.show({
            text: 'Hello!',
            duration: 'long'
        });
    };

    return (
        <View>
            <Navbar
                translucent
                transparent
                left={<NavbarBackLink
                    theme={'ios'}
                    className="ml-0.5"
                    component={BackIcon}
                    onClick={() => navigation.dispatch(StackActions.pop())}
                />}
                medium
                className={'absolute top-0'}
                title={document?.title}
            />
            <BlockTitle withBlock={false}>User</BlockTitle>
            <Card
                footer={
                    <Button onClick={showToast} tonal rounded>Photo Options</Button>
                }
            >
                <Link to={{screen: AppRoutes.FEED}}>Go to Feed</Link>
            </Card>
        </View>
    )
}

export default UserScreen;
