import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const EllipsisVerticalIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
    React.forwardRef(({
                          width = 24,
                          height = 24,
                          filled = false,
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
                    id="more-vertical"
                    className="cls-1"
                    fill="currentColor"
                    d="M12.02,5.5a1.5,1.5,0,0,1-.01-3h.01a1.5,1.5,0,0,1,0,3Zm1.5,6.5a1.5,1.5,0,0,0-1.5-1.5h-.01A1.5,1.5,0,1,0,13.52,12Zm0,8a1.5,1.5,0,0,0-1.5-1.5h-.01A1.5,1.5,0,1,0,13.52,20Z"
                />
            </svg>
        )
    })
