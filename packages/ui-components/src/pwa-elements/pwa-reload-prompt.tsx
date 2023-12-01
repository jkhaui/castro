import * as React from "react";
import {Button, KonstaProvider, Toast} from "konsta/react";
import {motion} from "framer-motion";

import {DefaultCopy} from "../utils/default-copy.js";

const InlineButton = (props) => {
    return (
        <Button rounded clear inline className="capitalize" {...props}/>
    )
}
const DefaultPrimaryActionSlot = ({handleClose}) => (
    <InlineButton onClick={handleClose}>{DefaultCopy.PWA_RELOAD_PROMPT_CTA}</InlineButton>
)
const DefaultSecondaryActionSlot = ({handleClose}) => (
    <InlineButton onClick={handleClose}>X</InlineButton>
)

const MESSAGE_DELETE_ANIMATION = {opacity: 0}
const MESSAGE_DELETE_TRANSITION = {
    opacity: {
        transition: {
            duration: 0
        }
    }
}

const AnimatedComponent = React.forwardRef(({handleClose, ...rest}, ref) => (
    <motion.div
        ref={ref}
        drag="x"
        dragDirectionLock
        whileDrag={{
            opacity: 0.8
        }}
        dragConstraints={{
            left: 0,
            right: 0
        }}
        onDragEnd={(event, info) => {
            const offset = info.offset.x
            const velocity = info.velocity.x
            console.log(event, info)

            if (offset < -100 || velocity < -500) {
                handleClose();
            }
        }}
        exit={MESSAGE_DELETE_ANIMATION}
        transition={{type: "spring", stiffness: 600, damping: 30}}
        // transition={MESSAGE_DELETE_TRANSITION}
        {...rest}
    />
))

export const PwaReloadPrompt = ({
                                    message = DefaultCopy.PWA_RELOAD_PROMPT_MESSAGE,
                                    PrimaryActionSlot = null,
                                    SecondaryCtaSlot = null,
                                    theme = "ios",
                                    dark = true,
                                    isOpened = true,
                                    position = "center",
                                    translucent = true,
                                    // TODO: fix desktop positioning
                                    className = "standalone:bottom-24 bottom-16 material:bottom-24 lg:bottom-20 w-5/6 rounded-lg",
                                    colors = {
                                        bgIos: "bg-gradient-to-r from-indigo-900 to-cyan-300"
                                    },
                                    ...rest
                                }) => {
    const [opened, setOpened] = React.useState(isOpened);
    const handleClose = () => {
        setOpened(false)
    }

    return (
        <KonstaProvider theme={theme} dark={dark}>
            {/*<AnimatePresence initial={true}>*/}
            {/*    {opened && (*/}
            <Toast
                component={AnimatedComponent}
                handleClose={handleClose}
                role="alert"
                aria-labelledby="toast-message"
                position={position}
                opened={opened}
                // colors={colors}
                button={
                    PrimaryActionSlot
                        ? <PrimaryActionSlot/>
                        : <DefaultPrimaryActionSlot handleClose={handleClose}/>
                }
                translucent={translucent}
                className={className}
                {...rest}
            >
                <p id="toast-message" className="shrink select-none">
                    {message}
                </p>
            </Toast>
            {/*</AnimatePresence>*/}
        </KonstaProvider>
    )
}
