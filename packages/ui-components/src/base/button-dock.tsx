import * as React from 'react';

interface ButtonDockProps extends React.HTMLAttributes<HTMLDivElement> {
    actionWrapperClassName?: string;
    paddingClassName?: string;
    primaryAction: React.ReactNode;
    secondaryActions?: React.ReactNode[];
    dismissiveAction?: React.ReactNode;
}

export const ButtonDock = ({
                               className = '',
                               actionWrapperClassName = '',
                               paddingClassName = 'py-1',
                               primaryAction,
                               secondaryActions,
                               dismissiveAction,
                           }: ButtonDockProps) => {
    return (
        <div className={`flex flex-col justify-self-stretch justify-items-stretch items-center w-full ${className}`}>
            {secondaryActions?.map((action, i) => (
                <div key={i}
                     className={`flex flex-1 items-center justify-center w-full ${paddingClassName} ${actionWrapperClassName}`}>
                    {action}
                </div>
            ))}
            <div
                className={`flex flex-1 items-center justify-center w-full ${paddingClassName} ${actionWrapperClassName}`}>
                {primaryAction}
            </div>
            {dismissiveAction && (
                <div
                    className={`flex flex-1 items-center justify-center w-full ${paddingClassName} ${actionWrapperClassName}`}>
                    {dismissiveAction}
                </div>
            )}
        </div>
    );
};
