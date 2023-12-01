import {Block, Navbar, Page, Popup} from 'konsta/react';
import {motion} from 'framer-motion';
import {CloseIcon} from "../icons/index.mjs";

export const ModalSheet = ({children, opened, setOpened, navbarProps = {}}) => {
    return (
        <Popup
            component={React.forwardRef((props, ref) => (
                <motion.div
                    ref={ref}
                    className={'z-50'}
                    initial={{x: 200, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: 200, opacity: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                    {...props}
                />
            ))}
            opened={opened}
            onBackdropClick={() => {
            }}
        >
            <Page>
                <Navbar
                    {...navbarProps}
                    right={
                        <div
                            role="button"
                            onClick={() => {
                                setOpened(false)
                            }}
                        >
                            <CloseIcon/>
                        </div>
                    }
                />
                <Block>{children}</Block>
            </Page>
        </Popup>
    );
};
