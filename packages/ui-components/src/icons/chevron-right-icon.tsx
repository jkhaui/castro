import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    small?: boolean;
}

const SmallVariant =
    React.forwardRef<SVGSVGElement, IconProps>(({
                                                    width = 24,
                                                    height = 24,
                                                    small = false,
                                                    ...rest
                                                }, ref
    ) => {
        return (
            <svg
                ref={ref}
                {...rest}
                id="Layer"
                xmlns="http://www.w3.org/2000/svg"
                height={height}
                width={width}
                viewBox={`0 0 ${width} ${height}`}
            >
                <path
                    id="angle-right-small"
                    fill="currentColor"
                    className="cls-1"
                    d="M10,16.75a.75.75,0,0,1-.53-1.28L12.939,12,9.47,8.53a.75.75,0,0,1,1.06-1.06l4,4a.749.749,0,0,1,0,1.06l-4,4A.744.744,0,0,1,10,16.75Z"
                />
            </svg>
        )
    });

export const ChevronRightIcon =
    React.forwardRef<SVGSVGElement, IconProps>(({
                                                    width = 24,
                                                    height = 24,
                                                    small = false,
                                                    ...rest
                                                }, ref
    ) => {
        if (small) {
            return (
                <SmallVariant
                    ref={ref}
                    width={width}
                    height={height}
                    small={small}
                    {...rest}
                />
            );
        }

        return (
            <svg
                ref={ref}
                {...rest}
                id="Layer"
                xmlns="http://www.w3.org/2000/svg"
                height={height}
                width={width}
                viewBox={`0 0 ${width} ${height}`}
            >
                <path
                    id="angle-right"
                    fill="currentColor"
                    className="cls-1"
                    d="M9,19.75a.75.75,0,0,1-.53-1.28L14.939,12,8.47,5.53A.75.75,0,0,1,9.53,4.47l7,7a.749.749,0,0,1,0,1.06l-7,7A.744.744,0,0,1,9,19.75Z"
                />
            </svg>
        )
    })
