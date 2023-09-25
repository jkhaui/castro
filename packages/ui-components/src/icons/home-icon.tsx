import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const HomeIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                        id="home"
                        className="cls-1"
                        fill="currentColor"
                        d="M18,21H14.8a.3.3,0,0,1-.3-.3V16.5A2.5,2.5,0,0,0,12,14h0a2.5,2.5,0,0,0-2.5,2.5v4.2a.3.3,0,0,1-.3.3H6a2.652,2.652,0,0,1-3-3V11.651c0-2,.523-2.3,1.43-3.065l5.964-5a2.5,2.5,0,0,1,3.212,0l5.964,5c.907.76,1.43,1.066,1.43,3.065V18A2.652,2.652,0,0,1,18,21Z"/>
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
                    id="home"
                    fill="currentColor"
                    d="M18,21.75H13.75V16.5a1.75,1.75,0,0,0-3.5,0v5.25H6A3.383,3.383,0,0,1,2.25,18V11.65c0-2.122.586-2.716,1.542-3.509L9.912,3.01a3.244,3.244,0,0,1,4.176,0l6.12,5.131c.956.793,1.542,1.387,1.542,3.509V18A3.383,3.383,0,0,1,18,21.75Zm-2.75-1.5H18c1.577,0,2.25-.673,2.25-2.25V11.65c0-1.525-.252-1.734-1-2.355L13.125,4.159a1.75,1.75,0,0,0-2.25,0L4.749,9.3c-.747.621-1,.83-1,2.355V18c0,1.577.673,2.25,2.25,2.25H8.75V16.5a3.25,3.25,0,0,1,6.5,0Z"
                />
            </svg>
        )
    })
