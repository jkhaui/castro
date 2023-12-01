import * as React from "react";
import {motion} from "framer-motion";

export const SegmentSingleView = ({className = "", devModeOptions = {}, ...restProps}) => {
    return (
        <motion.div
            className={`${className} w-full min-h-screen`}
            drag={(import.meta.env.NODE_ENV !== "production" && devModeOptions?.enableDragOnDesktop)}
            whileDrag={{scale: 1.2}}
            initial={{x: 200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: 200, opacity: 0}}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 30,
            }}
            {...restProps}
        />
    )
};
