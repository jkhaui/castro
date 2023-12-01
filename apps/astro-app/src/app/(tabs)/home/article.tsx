import {CardGlobal, Link} from "@castro/ui-components";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

const ArticleScreen = ({navigation}) => {
    return (
        <CardGlobal>
            <Link to={{screen: QualifiedScreenNames.USER}}>View a user</Link>
        </CardGlobal>
    )
}

export default ArticleScreen;
