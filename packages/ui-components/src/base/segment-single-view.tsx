import * as React from "react";
import {motion} from "framer-motion";

export const SegmentSingleView = React.forwardRef(({className = "", ...restProps}, ref = null) => {
    return (
        <motion.div
            ref={ref}
            className={`${className} w-full min-h-screen`}
            drag="x"
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
});
