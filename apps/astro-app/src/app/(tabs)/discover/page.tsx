import {MenuListBlock} from "@castro/ui-components";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

export const isDefaultScreen = true;

const DiscoverScreen = ({route}) => {
    return (
        <MenuListBlock
            // title={"Menu"}
            items={[
                {
                    title: "Categories",
                    href: QualifiedScreenNames.CATEGORIES,
                }, {
                    title: "Recommendations",
                    href: QualifiedScreenNames.RECOMMENDATIONS
                }, {
                    title: "Trending",
                    href: QualifiedScreenNames.TRENDING
                }
            ]}
        />
    )
}

export default DiscoverScreen;
