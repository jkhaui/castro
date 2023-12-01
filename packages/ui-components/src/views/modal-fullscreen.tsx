import * as React from "react";
import {Block, Navbar, Page, Popup} from 'konsta/react';
import {motion} from 'framer-motion';
import {CloseIcon} from "../icons/index.mjs";
import {IconButton} from "../base/index.mjs";

const AnimatedComponent = React.forwardRef((props, ref) => (
        <motion.div
            ref={ref}
            className={'z-50'}
            initial={{y: 200, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 200, opacity: 0}}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            {...props}
        />
    )
)

export const ModalFullscreen = ({children, opened, setOpened, navbarProps = {}}) => {
    return (
        <Popup
            // component={AnimatedComponent}
            opened={opened}
            onBackdropClick={() => {
                setOpened(false);
            }}
        >
            <Page>
                <Navbar
                    {...navbarProps}
                    left={
                        <IconButton
                            onClick={() => {
                                setOpened(false)
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                    }
                />
                <Block>{children}</Block>
            </Page>
        </Popup>
    );
};
