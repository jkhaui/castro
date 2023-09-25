import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const EllipsisHorizontalIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
    React.forwardRef(({
                          width = 24,
                          height = 24,
                          filled = false,
                          ...rest
                      },
                      ref
    ) => {
        if (filled) {
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
                        id="more-horizontal"
                        className="cls-1"
                        fill="currentColor"
                        d="M4.02,14a2,2,0,0,1-.01-4h.01a2,2,0,0,1,0,4Zm10-2a2,2,0,0,0-2-2h-.01a2,2,0,1,0,2.01,2Zm8,0a2,2,0,0,0-2-2h-.01a2,2,0,1,0,2.01,2Z"
                    />
                </svg>
            )
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
                    id="more-horizontal"
                    className="cls-1"
                    fill="currentColor"
                    d="M4.02,13.5a1.5,1.5,0,0,1-.01-3h.01a1.5,1.5,0,0,1,0,3Zm8,0a1.5,1.5,0,0,1-.01-3h.01a1.5,1.5,0,0,1,0,3Zm8,0a1.5,1.5,0,0,1-.01-3h.01a1.5,1.5,0,0,1,0,3Z"
                />
            </svg>
        )
    })
