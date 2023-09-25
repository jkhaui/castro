import {Link, View} from "@castro/ui-components";
import {Block, Navbar} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Navbar
                translucent
                transparent
                medium
                className={'absolute top-0'}
                title={document?.title}
            />
            {/*<BlockTitle large>Home</BlockTitle>*/}
            <Block>
                <Link to={{screen: AppRoutes.ARTICLE}}>Go to Article</Link>
            </Block>
        </View>
    )
}

export default HomeScreen;
