import * as React from "react";
import {Button} from "konsta/react";

export const ButtonGlobal = ({
                                   rounded = true,
                                   loading = false,
                                   disabled = false,
                                   ...rest
                               }) => {
    return (
        <Button rounded={rounded} {...rest} />
    )
}