import * as React from "react";

interface ProgressBarIndeterminateProps extends React.HTMLAttributes<HTMLDivElement> {
    fullScreenWidth?: boolean;
    rounded?: boolean;
    fixedTop?: boolean;
    colors?: {
        bgIos?: string;
        bgMaterial?: string;
    };
}

export const ProgressBarIndeterminate = ({
                                             fullScreenWidth = true,
                                             rounded = false,
                                             fixedTop = true,
                                             colors,
                                             className = '',
                                         }: ProgressBarIndeterminateProps) => {
    return (
        <div
            className={
                `${className} fixed lg:top-0 standalone:top-safe left-0 select-none ${
                    fullScreenWidth ? 'w-screen' : 'w-full'
                } z-50`}>
            <div className={'block h-1.5 bg-opacity-30 dark:bg-opacity-30 overflow-hidden rtl:rotate-180 bg-black'}>
                <div className={`progress w-full h-full bg-primary left-right`}/>
            </div>
        </div>
    );
};
