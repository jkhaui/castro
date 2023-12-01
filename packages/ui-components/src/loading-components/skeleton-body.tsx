import * as React from "react";
import {SkeletonRows, SkeletonRowsProps} from "./skeleton-rows.js";

export interface SkeletonBodyProps extends SkeletonRowsProps {

}

export const SkeletonBody = (props: SkeletonBodyProps) => {
    return (
        <SkeletonRows {...props} />
    );
}
