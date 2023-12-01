import * as React from 'react';

export enum SkeletonTypes {
    ROW = 'row',
    RING = 'ring'
}

export interface SkeletonRowsProps extends React.HTMLAttributes<HTMLDivElement> {
    spacingY?: string;
    outerWrapperClassName?: string;
    rowWidth?: string;
    rowHeight?: string;
    rowClassName?: string;
    rowBgClassName?: string;
    rowBorderRadiusClassName?: string;
    animation?: string;
    rowCount?: number;
    innerWrapperClassName?: string;
    TopAreaSlot?: React.ReactNode;
    BottomAreaSlot?: React.ReactNode;
    skeletonType?: SkeletonTypes;
}

export const SkeletonRows = ({
                                 spacingY = "space-y-3",
                                 outerWrapperClassName = 'flex flex-col flex-1 h-full w-full',
                                 rowClassName = '',
                                 rowBgClassName = 'bg-gray-200 dark:bg-gray-700',
                                 rowWidth = "w-full",
                                 rowHeight = "h-4",
                                 rowBorderRadiusClassName = 'rounded-md',
                                 TopAreaSlot = null,
                                 BottomAreaSlot = null,
                                 skeletonType = SkeletonTypes.ROW,
                                 rowCount = 4,
                                 innerWrapperClassName = "mt-5",
                                 animation = "animate-pulse"
                             }: SkeletonRowsProps) => {
    if (skeletonType === SkeletonTypes.RING) {
        return (
            <div
                className='w-6 h-6 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-700 dark:ring-gray-800 animate-pulse'
            />
        );
    }

    return (
        <div className={`${outerWrapperClassName} ${animation}`}>
            {TopAreaSlot}
            <ul className={`${innerWrapperClassName} ${spacingY}`}>
                {Array.from({length: rowCount}, (_, i) => (
                    <li
                        key={i}
                        className={`${rowWidth} ${rowHeight} ${rowBorderRadiusClassName} ${rowBgClassName} ${rowClassName}`}
                    />
                ))}
            </ul>
            {BottomAreaSlot}
        </div>
    );
};
