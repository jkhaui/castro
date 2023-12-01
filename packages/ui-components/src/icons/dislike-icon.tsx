import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const DislikeIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="dislike"
                    className="cls-1"
                    d="M19.5,2.25H8.1c-2.5,0-3.108,1.213-3.558,2.564l-2,6a3.91,3.91,0,0,0,.285,3.578A3.744,3.744,0,0,0,6.1,15.75H9.253v2.487a3.745,3.745,0,0,0,1.669,3.12,2.327,2.327,0,0,0,1.293.393,2.337,2.337,0,0,0,2.2-1.545l2.128-6.455H19.5a2.253,2.253,0,0,0,2.25-2.25v-7A2.253,2.253,0,0,0,19.5,2.25ZM15.289,12.765,13,19.706a.837.837,0,0,1-1.248.4,2.246,2.246,0,0,1-1-1.872V15a.75.75,0,0,0-.75-.75H6.1a2.532,2.532,0,0,1-2.056-.735,2.524,2.524,0,0,1-.078-2.226l2-6C6.317,4.222,6.54,3.75,8.1,3.75H16v8.5A.75.75,0,0,0,15.289,12.765ZM20.25,11.5a.751.751,0,0,1-.75.75h-2V3.75h2a.751.751,0,0,1,.75.75Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
