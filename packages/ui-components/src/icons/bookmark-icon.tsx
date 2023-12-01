import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const BookmarkIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="bookmark"
                    className="cls-1"
                    d="M16,2.25H8A3.383,3.383,0,0,0,4.25,6V21a.75.75,0,0,0,1.122.651L12,17.864l6.628,3.787A.751.751,0,0,0,19.75,21V6A3.383,3.383,0,0,0,16,2.25Zm2.25,17.457-5.878-3.358a.748.748,0,0,0-.744,0L5.75,19.708V6c0-1.577.673-2.25,2.25-2.25h8c1.577,0,2.25.673,2.25,2.25ZM15.75,8a.75.75,0,0,1-.75.75H9a.75.75,0,0,1,0-1.5h6A.75.75,0,0,1,15.75,8Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
