import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import {PressableProps} from "./pressable.js";
import Sheet from 'react-modal-sheet';
import {Block} from "konsta/react";
import {IconButton} from "./icon-button.js";

export interface AvatarGlobalProps extends PressableProps {
    src: string;
    avatarRootProps?: any;
    avatarImageProps?: any;
    avatarFallbackProps?: any;
}

export const AvatarGlobal = ({
                                 src,
                                 avatarRootProps = {},
                                 avatarImageProps = {},
                                 avatarFallbackProps = {},
                                 onClick = (e) => {
                                 }
                             }: AvatarGlobalProps) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <IconButton onClick={() => setOpen(true)} className="ml-2" bgNone={false}>
                <Avatar.Root className={avatarRootProps?.className ?? "w-6 h-6 lg:w-8 lg:h-8"} {...avatarRootProps}>
                    <Avatar.Image src={src} {...avatarImageProps} />
                    {/*<Avatar.Fallback {...avatarFallbackProps}>??</Avatar.Fallback>*/}
                </Avatar.Root>
            </IconButton>
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
                        <Block>
                            Log in or sign up super-fast & secure with a magic link sent to your email
                        </Block>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop className="!backdrop-blur-md"/>
            </Sheet>
        </>
    )
}
