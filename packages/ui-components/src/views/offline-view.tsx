import * as React from "react";
import {DefaultView} from "./default-view/default-view.js";
import {Card, Preloader} from "konsta/react";
import {DefaultCopy} from "../utils/default-copy.js";
import {ICON_BASE_COLOR_CLASSNAME} from "../utils/classnames.js";

export const OfflineView = ({
                                title = DefaultCopy.OFFLINE_TITLE,
                                message = DefaultCopy.OFFLINE_MESSAGE
                            }) => {
    return (
        <DefaultView standaloneView>
            <div className="-mt-12 flex flex-1 flex-col justify-center items-center">
                <Card
                    header={title}
                    footer={message}
                    className="flex flex-col pt-8 w-full items-center justify-center"
                >
                    <Preloader size="h-8 w-8" className={ICON_BASE_COLOR_CLASSNAME}/>
                </Card>
            </div>
        </DefaultView>
    )
}
