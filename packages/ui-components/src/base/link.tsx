import * as React from "react";
import type {Screen} from "../../../router/src/index.mjs";
// https://github.com/vitejs/vite/issues/5370
import {useAccessibleLink} from "../../../router/src/index.mjs";
import type {NavigationAction} from "@react-navigation/native";
import {useOnline} from "../hooks/index.mjs";

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    underline?: boolean;
    to: Screen;
    action?: NavigationAction;
    params?: any;
    concurrent?: boolean;
    prefetch?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
                                                                        children,
                                                                        className = "text-link",
                                                                        underline = false,
                                                                        to,
                                                                        action,
                                                                        params,
                                                                        concurrent = true,
                                                                        prefetch = true,
                                                                        ...restLinkProps
                                                                    }, ref) => {
    const {isPending, handlePress} = useAccessibleLink({to, action, params, concurrent})

    const isOnline = useOnline();

    return (
        <a
            ref={ref}
            {...restLinkProps}
            className={`${className} ${isPending ? 'opacity-50' : 'opacity-100'} ${underline ? 'underline' : ''}`}
            draggable="false"
            onClick={handlePress}
            // className={`${className} ${isPending ? 'opacity-50' : 'opacity-100'} ${isPressed ? 'scale-105' : 'scale-100'} ${underline ? 'underline' : ''}`}
            href={isOnline ? to.screen : "offline"}
            data-astro-prefetch={prefetch || undefined}
        >
            {children}
        </a>
    )
})
