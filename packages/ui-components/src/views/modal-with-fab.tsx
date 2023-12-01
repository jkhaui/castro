import * as React from "react";
import {Fab, KonstaProvider} from "konsta/react";
import {PenIcon} from "../icons/pen-icon.js";
import {ModalFullscreen} from "./modal-fullscreen.js";

export const ModalWithFab = ({
                                 fabProps = {
                                     text: "Create",
                                     textPosition: "after"
                                 },
                                 ModalInnerComponent = null
                             }) => {
    const [opened, setOpened] = React.useState(false);

    return (
        <KonstaProvider theme="ios" dark={true}>
            <Fab
                onClick={() => setOpened(true)}
                className="fixed right-4-safe bottom-4-safe z-40"
                icon={<PenIcon/>}
                {...fabProps}
            />

            <ModalFullscreen opened={opened} setOpened={setOpened}>
                {ModalInnerComponent}
            </ModalFullscreen>
        </KonstaProvider>
    )
}
