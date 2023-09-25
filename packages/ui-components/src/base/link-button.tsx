// @ts-nocheck

import {useLinkProps, useNavigation} from "@react-navigation/native";
import {Button} from "konsta/react";

export const LinkButton = ({to, action, className = '', children, ...restButtonProps}: any) => {
    const {onPress, ...props} = useLinkProps({to, action})

    const navigation = useNavigation();

    return (
        <Button
            {...props}
            {...restButtonProps}
            className={`underline capitalize ${className}`}
            inline
            onClick={() => navigation.push(to.screen)}
            clear
            colors={{
                activeBgIos: '',
                activeBgMaterial: '',
                textIos: 'k-color-link',
                textMaterial: 'k-color-link'
            }}
            touchRipple={false}
            rounded
        >
            {children}
        </Button>
    )
}
