import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const SearchIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                        id="search"
                        className="cls-1"
                        fill="currentColor"
                        d="M21.53,20.47,17.161,16.1a7.991,7.991,0,1,0-1.059,1.06L20.47,21.53a.748.748,0,0,0,1.06,0A.754.754,0,0,0,21.53,20.47Z"
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
                    id="search"
                    className="cls-1"
                    fill="currentColor"
                    d="M21.53,20.47l-3.841-3.841a8.769,8.769,0,1,0-1.06,1.06L20.47,21.53a.75.75,0,0,0,1.06-1.06ZM3.75,11A7.25,7.25,0,1,1,11,18.25,7.258,7.258,0,0,1,3.75,11Z"
                />
            </svg>
        )
    })
