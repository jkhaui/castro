import {BackIcon, Link, View} from "@castro/ui-components";
import {BlockTitle, Button, Card, Navbar, NavbarBackLink} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {Share} from "@capacitor/share";
import {StackActions} from "@react-navigation/native";

const AccountScreen = ({navigation}) => {
    const handleClick = async () => {
        await Share.share({
            title: 'Article XYZ',
            text: 'Some body text content',
            url: 'https://my-domain.blah',
            dialogTitle: 'Share'
        })
    }

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
                title={AppRoutes.ACCOUNT}
            />
            <Card
                footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: AppRoutes.TIMELINE}}>Go to profile timeline</Link>
            </Card>
        </View>
    )
}

export default AccountScreen;
