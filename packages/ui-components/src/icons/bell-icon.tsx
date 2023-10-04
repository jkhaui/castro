import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const BellIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                        id="bell"
                        className="cls-1"
                        d="M14.164,19.751a.5.5,0,0,1,0,.5,2.5,2.5,0,0,1-4.324,0,.5.5,0,0,1,.432-.752h3.46A.5.5,0,0,1,14.164,19.751Zm6.227-2.063A9.481,9.481,0,0,1,18.5,12.5V8.995a6.495,6.495,0,0,0-12.99,0V12.5a9.481,9.481,0,0,1-1.9,5.188A.5.5,0,0,0,4,18.5H20a.5.5,0,0,0,.391-.812Z"
                        fill="currentColor"
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
                    id="bell"
                    className="cls-1"
                    d="M12,21.75a2.731,2.731,0,0,1-2.378-1.372.75.75,0,0,1,1.3-.756,1.287,1.287,0,0,0,2.164,0,.75.75,0,1,1,1.3.756A2.731,2.731,0,0,1,12,21.75Zm8.675-3.425a.751.751,0,0,0-.089-.793A9.219,9.219,0,0,1,18.745,12.5V8.995a6.745,6.745,0,0,0-13.49,0V12.5a9.219,9.219,0,0,1-1.841,5.032A.751.751,0,0,0,4,18.75H20A.75.75,0,0,0,20.675,18.325ZM6.755,12.5V8.995a5.245,5.245,0,0,1,10.49,0V12.5a9.908,9.908,0,0,0,1.368,4.75H5.387A9.908,9.908,0,0,0,6.755,12.5Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
