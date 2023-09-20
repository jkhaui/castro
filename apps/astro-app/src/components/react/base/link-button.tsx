import {useLinkProps, useNavigation} from "@react-navigation/native";
import {Button} from "konsta/react";

export const LinkButton = ({ to, action, className = '', children, ...restButtonProps }) => {
    const { onPress, ...props } = useLinkProps({ to, action })

    const navigation = useNavigation();

    return (
        <Button {...props} {...restButtonProps} className={`underline ${className}`} inline onClick={() => navigation.push(to.screen)} clear
               colors={{activeBgIos:'',activeBgMaterial:''}} touchRipple={false} rounded>
            {children}
        </Button>
    )
}
