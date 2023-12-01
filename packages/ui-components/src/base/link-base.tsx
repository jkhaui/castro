import * as React from "react";
import {useAccessibleLink} from "../../../router/src/index.mjs";
import type {Screen} from "../../../router/src/index.mjs";
import type {NavigationAction} from "@react-navigation/native";

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    underline?: boolean;
    to: Screen;
    action?: NavigationAction;
    params?: any;
}

export const LinkBase = React.forwardRef<HTMLAnchorElement, LinkProps>(({
                                                                        children,
                                                                        className = '',
                                                                        underline = true,
                                                                        to,
                                                                        action,
                                                                        params,
                                                                        ...restLinkProps
                                                                    }, ref) => {
    const {isPending, handleClick} = useAccessibleLink({to, action, params})

    return (
        <a
            ref={ref}
            {...restLinkProps}
            className={`${className} ${isPending ? 'opacity-50 scale-105' : 'opacity-100'} ${underline ? 'underline' : ''}`}
            href={to.screen}
            onClick={handleClick}
        >
            {children}
        </a>
    )
})
