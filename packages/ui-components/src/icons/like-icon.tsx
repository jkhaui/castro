import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const LikeIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="like"
                    className="cls-1"
                    d="M21.176,9.608A3.744,3.744,0,0,0,17.9,8.25H14.747V5.763a3.745,3.745,0,0,0-1.669-3.12A2.336,2.336,0,0,0,9.584,3.8L7.456,10.25H4.5A2.253,2.253,0,0,0,2.25,12.5v7A2.253,2.253,0,0,0,4.5,21.75H15.9c2.5,0,3.108-1.213,3.558-2.564l2-6A3.91,3.91,0,0,0,21.176,9.608ZM3.75,19.5v-7a.751.751,0,0,1,.75-.75h2v8.5h-2A.751.751,0,0,1,3.75,19.5Zm16.287-6.789-2,6c-.355,1.067-.578,1.539-2.134,1.539H8v-8.5a.75.75,0,0,0,.711-.515L11,4.294a.837.837,0,0,1,1.248-.4,2.246,2.246,0,0,1,1,1.872V9a.75.75,0,0,0,.75.75H17.9a2.532,2.532,0,0,1,2.056.735A2.524,2.524,0,0,1,20.037,12.711Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
