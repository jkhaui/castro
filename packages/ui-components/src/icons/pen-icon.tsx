import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled: boolean;
}

export const PenIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="edit"
                    className="cls-1"
                    d="M19.75,15v3A3.383,3.383,0,0,1,16,21.75H6A3.383,3.383,0,0,1,2.25,18V8A3.383,3.383,0,0,1,6,4.25H9a.75.75,0,0,1,0,1.5H6c-1.577,0-2.25.673-2.25,2.25V18c0,1.577.673,2.25,2.25,2.25H16c1.577,0,2.25-.673,2.25-2.25V15a.75.75,0,0,1,1.5,0Zm2-8.944A2.182,2.182,0,0,1,21.1,7.609l-8.963,8.922a.752.752,0,0,1-.53.219H8A.75.75,0,0,1,7.25,16V12.389a.745.745,0,0,1,.219-.529L16.392,2.9a2.175,2.175,0,0,1,1.551-.646h0a2.18,2.18,0,0,1,1.552.643L21.107,4.5h0A2.179,2.179,0,0,1,21.75,6.056ZM17.617,8.963l-2.58-2.58L8.75,12.7V15.25H11.3ZM20.25,6.054a.693.693,0,0,0-.2-.492l-1.61-1.609a.687.687,0,0,0-.491-.2h0a.692.692,0,0,0-.491.2L16.1,5.32,18.68,7.905l1.365-1.359A.693.693,0,0,0,20.25,6.054Z"
                    fill="currentColor"
                />
            </svg>
        )
    })
