import * as React from "react";
import {motion} from "framer-motion";
import {useAccessibleLink} from "../../../router/src/index.mjs";

export interface PressableProps {
    onLongPressStart?: (e) => void;
    onLongPress?: (e) => void;
    onLongPressEnd?: (e) => void;
    className?: string;
}

export const Pressable =
    React.forwardRef<HTMLButtonElement, PressableProps>(({
                                                             onLongPressStart,
                                                             onLongPress,
                                                             onLongPressEnd,
                                                             className = "",
                                                             to,
                                                             ...rest
                                                         },
                                                         ref
    ) => {
        const {isPending, handlePress} = useAccessibleLink({to})

        return (
            <motion.a
                ref={ref}
                className={className}
                href={to.screen}
                draggable="false"
                whileTap={{
                    scale: 0.98
                }}
                onClick={(e) => {
                    e.stopPropagation()

                    handlePress(e)
                }}
                {...rest}
            />
        )
    });
