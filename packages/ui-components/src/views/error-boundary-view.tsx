import * as React from "react";
import {Block, BlockTitle, KonstaProvider} from "konsta/react";
import {ButtonDock, ButtonGlobal} from "../base/index.mjs";
import {DefaultView} from "./default-view/default-view.js";
import {DefaultCopy} from "../utils/default-copy.js";

export const ErrorBoundaryView = ({
                                      title = DefaultCopy.ERROR_TITLE,
                                      primaryAction = "page/reload"
                                  }) => {
    const handlePrimaryAction = () => {
        if (typeof window === "undefined") {
            return;
        }

        switch (primaryAction) {
            case "page/reload":
                window.location.reload();
                break;
            case "location/reset":
            default:
                window.location.href = "/";
                break;
        }
    }

    return (
        <KonstaProvider theme={'ios'} dark={true}>
            <DefaultView standaloneView>
                <div className={'-mt-12 flex flex-1 flex-col justify-center items-center'}>
                    <BlockTitle
                        className={'flex justify-center items-center'}
                        large
                        colors={{
                            textIos: "",
                            textMaterial: ""
                        }}
                    >
                        <h1>
                            {title}
                        </h1>
                    </BlockTitle>
                    <Block className={'flex pt-8 w-full items-center justify-center'}>
                        <ButtonDock
                            primaryAction={<ButtonGlobal
                                onClick={handlePrimaryAction}>{DefaultCopy.ERROR_TRY_AGAIN}</ButtonGlobal>}/>
                    </Block>
                </div>
            </DefaultView>
        </KonstaProvider>
    )
}
