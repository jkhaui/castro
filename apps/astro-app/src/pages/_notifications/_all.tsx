import {Link, View} from "@castro/ui-components";
import {Block, BlockTitle, List, ListItem, Navbar} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";

export const isDefaultScreen = true;

const AllScreen = ({navigation}) => {
    return (
        <View>
            <Navbar
                translucent
                transparent
                medium
                className={'absolute top-0'}
                title={AppRoutes.SETTINGS}
            />
            <List strong>
                <ListItem link title={AppRoutes.ACCOUNT}/>
                <ListItem link title={AppRoutes.SUBSCRIPTION}/>
            </List>
        </View>
    )
}

export default AllScreen;
