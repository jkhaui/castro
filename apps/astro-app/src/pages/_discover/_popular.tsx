import {Link, View} from "@castro/ui-components";
import {Block, Navbar} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {capitalize} from "@/utils/utils";

export const isDefaultScreen = true;

const PopularScreen = ({navigation}) => {
    return (
        <View>
            <Navbar
                translucent
                transparent
                medium
                className={'absolute top-0'}
                title={capitalize(AppRoutes.POPULAR)}
            />
            <Block>
                <Link to={{screen: AppRoutes.CATEGORIES}}>Go to Categories</Link>
            </Block>
        </View>
    )
}

export default PopularScreen;
