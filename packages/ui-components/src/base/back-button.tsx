import * as React from "react";
import {BackIcon} from "@castro/ui-components/src/index.mjs";
import {StackActions} from "@react-navigation/native";
import {NavbarBackLink} from "konsta/react";

export const BackButton = () => {
    return (
        <NavbarBackLink
            theme={'ios'}
            className="ml-0.5"
            component={BackIcon}
            onClick={() => navigation.dispatch(StackActions.pop())}
        />
    );
}
