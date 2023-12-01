import {Link} from "@castro/ui-components";
import {Block} from "konsta/react";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

export const isDefaultScreen = true;

const SettingsScreen = ({route}) => {
    return (
        <>
            <Block>
                <Link to={{screen: QualifiedScreenNames.EDIT}}>Edit Settings</Link>
            </Block>
        </>
    )
}

export default SettingsScreen;
