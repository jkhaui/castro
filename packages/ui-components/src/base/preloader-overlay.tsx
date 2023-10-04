import {Preloader} from "konsta/react";

export const PreloaderOverlay = (props) => {
    return (
        <div {...props} className="z-50 absolute top-0 left-0 bg-transparent flex items-center justify-center h-screen w-full">
            <Preloader className="select-none flex"/>
        </div>
    )
}
