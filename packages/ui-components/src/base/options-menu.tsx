import * as React from "react";
import {PressableProps} from "./pressable.js";
import Sheet from 'react-modal-sheet';
import {Navbar} from "konsta/react";
import {EllipsisHorizontalIcon, EllipsisVerticalIcon} from "../icons/index.mjs";
import {IconButton} from "./icon-button.js";

export interface OptionsMenuProps extends PressableProps {
}

export const OptionsMenu = ({
                                onClick = (e) => {
                                }
                            }: OptionsMenuProps) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <IconButton
                onClick={() => setOpen(true)}
                className="mr-2"
                ios={<EllipsisHorizontalIcon/>}
                material={<EllipsisVerticalIcon/>}
            />
            <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={[400, 0]}
                initialSnap={0}
                // rootId="app-root"
            >
                <Sheet.Container className="!bg-gray-900 !rounded-t-3xl">
                    <Sheet.Header/>
                    <Sheet.Content>
                        <Navbar translucent transparent title="Options"/>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop className="!backdrop-blur-md"/>
            </Sheet>
        </>
    )
}
