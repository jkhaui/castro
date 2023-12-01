import * as React from "react";
import {SkeletonRows, SkeletonRowsProps} from "./skeleton-rows.js";
import {Slot} from "@radix-ui/react-slot";

export interface SkeletonTitleProps extends SkeletonRowsProps {
    wrapperClassName?: string;
    bottomMargin?: string;
    asChild?: boolean;
}

export const SkeletonTitle = ({
                                  wrapperClassName = "flex flex-col flex-1 items-stretch",
                                  bottomMargin = "mb-10",
                                  rowHeight = "h-8",
                                  asChild,
                                  ...rest
                              }: SkeletonTitleProps) => {
    const Component = asChild ? Slot : "div";

    return (
        <Component className={`${wrapperClassName} ${bottomMargin}`}>
            <SkeletonRows rowCount={1} rowHeight={rowHeight} {...rest}/>
        </Component>
    );
}
