import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const CloseIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="times-circle"
                    className="cls-1"
                    d="M12,1.25A10.75,10.75,0,1,0,22.75,12,10.762,10.762,0,0,0,12,1.25Zm0,20A9.25,9.25,0,1,1,21.25,12,9.26,9.26,0,0,1,12,21.25ZM15.53,9.53,13.061,12l2.469,2.47a.75.75,0,1,1-1.06,1.06L12,13.061,9.53,15.53a.75.75,0,0,1-1.06-1.06L10.939,12,8.47,9.53A.75.75,0,0,1,9.53,8.47L12,10.939,14.47,8.47a.75.75,0,0,1,1.06,1.06Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
