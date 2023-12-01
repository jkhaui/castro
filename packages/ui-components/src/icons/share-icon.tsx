import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    filled?: boolean;
}

export const ShareIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
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
                    id="arrow-share"
                    className="cls-1"
                    d="M21.182,10.066,15.254,3.8a1.74,1.74,0,0,0-3,1.195V7.758c-6.457.193-10,2.922-10,7.733a9.487,9.487,0,0,0,1.182,4.634,1.214,1.214,0,0,0,1.061.626,1.253,1.253,0,0,0,.33-.044,1.2,1.2,0,0,0,.9-1.188A3.586,3.586,0,0,1,6.5,16.737c.9-.916,2.838-1.415,5.753-1.487V18a1.74,1.74,0,0,0,3,1.2l5.928-6.27A2.08,2.08,0,0,0,21.182,10.066Zm-1.09,1.825L14.164,18.16A.24.24,0,0,1,13.75,18V14.491a.75.75,0,0,0-.75-.75c-3.857,0-6.263.617-7.57,1.942a4.246,4.246,0,0,0-1.169,2.682,8.263,8.263,0,0,1-.511-2.874c0-5.161,5.03-6.244,9.25-6.244a.75.75,0,0,0,.75-.75V4.99a.223.223,0,0,1,.15-.221A.266.266,0,0,1,14,4.75a.226.226,0,0,1,.167.077l5.928,6.27A.577.577,0,0,1,20.092,11.891Z"
                    fill="currentColor"
                />
            </svg>
        )
    })