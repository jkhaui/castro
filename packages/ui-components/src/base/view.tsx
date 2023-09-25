import React from "react";
import {KonstaProvider, Page} from "konsta/react";
import {AnimatePresence, motion} from "framer-motion";

export const View = ({children, ...rest}) => {
    return (
        <KonstaProvider theme={'ios'} dark>
            <AnimatePresence initial={false}>
                <Page
                    className={'flex flex-col flex-1 pt-20'}
                    style={{backgroundColor: 'transparent'}}
                    component={
                        React.forwardRef((props, ref) => (
                            <motion.div
                                ref={ref}
                                layout
                                initial={{x: 200, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 200, opacity: 0}}
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
            </AnimatePresence>
        </KonstaProvider>
    )
}
