import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const ProfileIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
    React.forwardRef(({
                          width = 24,
                          height = 24,
                          filled = false,
                          ...rest
                      }, ref
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
                        id="user"
                        className="cls-1"
                        fill="currentColor"
                        d="M8.009,6.5a4,4,0,1,1,4,4A4,4,0,0,1,8.009,6.5ZM14,12.5H10c-4.06,0-5.5,2.973-5.5,5.519C4.5,20.3,5.711,21.5,8,21.5H16c2.292,0,3.5-1.2,3.5-3.481C19.5,15.473,18.06,12.5,14,12.5Z"
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
                    id="user"
                    className="cls-1"
                    fill="currentColor"
                    d="M12.009,10.75a4.25,4.25,0,1,1,4.25-4.25A4.255,4.255,0,0,1,12.009,10.75Zm0-7a2.75,2.75,0,1,0,2.75,2.75A2.752,2.752,0,0,0,12.009,3.75ZM16,21.75H8c-2.42,0-3.753-1.325-3.753-3.731,0-2.662,1.506-5.769,5.75-5.769h4c4.244,0,5.75,3.107,5.75,5.769C19.75,20.425,18.417,21.75,16,21.75Zm-6-8a3.958,3.958,0,0,0-4.25,4.269c0,1.564.674,2.231,2.253,2.231H16c1.579,0,2.253-.667,2.253-2.231A3.958,3.958,0,0,0,14,13.75Z"
                />
            </svg>
        )
    })
