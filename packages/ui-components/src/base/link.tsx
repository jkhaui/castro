import * as React from "react";
import {useLinkProps, useNavigation} from "@react-navigation/native";

export const Link = ({children, className = '', to, action, ...restLinkProps}: any) => {
    const {onPress, ...props} = useLinkProps({to, action})

    const navigation = useNavigation();

    const handleClick = React.useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()

        navigation.push(to.screen);
    }, [])

    return (
        <a
            {...restLinkProps}
            {...props}
            className={className}
            href={to.screen}
            onClick={handleClick}
        >
            {children}
        </a>
    )
}
