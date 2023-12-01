import * as React from "react";
import {Icon} from "konsta/react";
import {motion} from "framer-motion";
import {ICON_BASE_COLOR_CLASSNAME} from "../utils/index.js";

export const IconButton =
    React.forwardRef(({
                          children,
                          className = "",
                          icon,
                          large = false,
                          onClick,
                          onLongPressStart,
                          onLongPress,
                          onLongPressEnd,
                          ios = null,
                          material = null,
                          iconProps = {},
                          bgNone = true,
                          colors = {
                              bg: "bg-icon-button"
                          },
                          disableParentGesturePropagation = true,
                          ...restProps
                      },
                      ref
    ) => {
        return (
            <motion.button
                ref={ref}
                className={`${className} ${bgNone ? "bg-transparent" : colors.bg} ${ICON_BASE_COLOR_CLASSNAME} rounded-full p-0.25 lg:p-0.75 shadow-none active:bg-focus transition-colors ease-material-in flex items-center justify-center h-7 w-7 lg:w-9 lg:h-9`}
                whileTap={{
                    scale: 0.98
                }}
                onPointerDownCapture={(e) => {
                    if (disableParentGesturePropagation) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
                onClick={(e) => {
                    if (disableParentGesturePropagation) {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    onClick(e);
                }}
                {...restProps}
            >
                {children ?? <Icon ios={ios ?? icon} material={material ?? icon} {...iconProps} />}
            </motion.button>
        )
    });
