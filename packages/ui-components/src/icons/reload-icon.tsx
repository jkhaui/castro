import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}

export const ReloadIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
    React.forwardRef(({
                          width = 24,
                          height = 24,
                          ...rest
                      },
                      ref
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
                    id="rotate-right"
                    className="cls-1"
                    d="M21.75,4V9a.75.75,0,0,1-.75.75H16a.75.75,0,0,1,0-1.5h3.33a8.234,8.234,0,1,0,.058,7.417.75.75,0,1,1,1.343.666,9.753,9.753,0,1,1-.481-9.519V4a.75.75,0,0,1,1.5,0Z"
                />
            </svg>
        )
    })
