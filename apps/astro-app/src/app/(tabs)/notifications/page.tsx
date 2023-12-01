import {MenuListBlock} from "@castro/ui-components";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

export const isDefaultScreen = true;

const NotificationsScreen = ({route}) => {
    return (
        <MenuListBlock
            title=""
            items={[
                {
                    title: "Account",
                    href: QualifiedScreenNames.ACCOUNT,
                }, {
                    title: "Subscription",
                    href: QualifiedScreenNames.SUBSCRIPTION
                }
            ]}
        />
    )
}

export default NotificationsScreen;
