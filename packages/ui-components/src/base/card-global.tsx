import * as React from "react";
import {Card} from "konsta/react";
import {Pressable} from "./pressable.js";

export const CardGlobal = ({
                               component = "article",
                               isPressable = true,
                               pressableProps = {},
                               ...rest
                           }) => {
    const Wrapper = isPressable ? Pressable : React.Fragment

    return (
            <Card component={component} {...rest}/>
    )
}
