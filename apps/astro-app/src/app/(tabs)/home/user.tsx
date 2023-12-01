import {CardGlobal, Link} from "@castro/ui-components";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

const UserScreen = ({navigation}) => {
    return (
        <CardGlobal>
            <Link to={{screen: QualifiedScreenNames.HOME}}>Go to Home</Link>
        </CardGlobal>
    )
}

export default UserScreen;
