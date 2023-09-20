import React from "react";
import {Page} from "konsta/react";
import {motion} from "framer-motion";

export const View = ({ children, ...rest }) => {
    return (
        <Page
            className={'flex flex-col flex-1 justify-center items-center'}
            style={{backgroundColor:'transparent'}}
            component={
                React.forwardRef((props, ref) => (
                    <motion.div
                        ref={ref}
                            layout
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 30,
                        }}
                        {...props}
                    />
                ))
            }
            {...rest}
        >
            {children}
        </Page>
    )
}
