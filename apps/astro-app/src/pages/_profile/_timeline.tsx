import {Link, View} from "@castro/ui-components";
import {Block, Navbar} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";

export const isDefaultScreen = true;

const TimelineScreen = ({navigation}) => {
    return (
        <View>
            <Navbar
                translucent
                transparent
                medium
                className={'absolute top-0'}
                title={AppRoutes.TIMELINE}
            />
            <Block>
                <Link to={{screen: AppRoutes.EDIT}}>Edit profile</Link>
            </Block>
        </View>
    )
}

export default TimelineScreen;
