import * as React from "react";
import {useTheme} from "konsta/react";

// TODO: refactor to use common types currently located in `app` workspace
type Ios = 'ios';
type Material = 'material';
type Theme = Ios | Material

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    small?: boolean;
    theme: Theme;
    isDesktop: boolean;
}

const SmallVariant = React.forwardRef(({
                                           width = 24,
                                           height = 24,
                                           small = false,
                                           theme = 'material',
                                           isDesktop,
                                           ...rest
                                       }, ref
) => {
    if ((theme === "ios" || rest?.inheritedTheme === "ios") && !isDesktop) {
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
                    id="angle-left-small"
                    className="cls-1"
                    fill="currentColor"
                    d="M14,16.75a.744.744,0,0,1-.53-.22l-4-4a.749.749,0,0,1,0-1.06l4-4a.75.75,0,0,1,1.06,1.06L11.061,12l3.469,3.47A.75.75,0,0,1,14,16.75Z"
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
                id="arrow-left-small"
                className="cls-1"
                fill="currentColor"
                d="M20.75,12a.75.75,0,0,1-.75.75H5.811L8.53,15.47a.75.75,0,1,1-1.06,1.06l-4-4a.751.751,0,0,1,0-1.06l4-4A.75.75,0,0,1,8.53,8.53L5.811,11.25H20A.75.75,0,0,1,20.75,12Z"/>
        </svg>
    )
});

export const BackIcon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> =
    React.forwardRef(({
                          width = 24,
                          height = 24,
                          small = false,
                          theme = 'material',
                          isDesktop,
                          ...rest
                      }, ref
    ) => {
        const inheritedTheme = useTheme();

        if (small) {
            return (
                <SmallVariant
                    ref={ref}
                    width={width}
                    height={height}
                    small={small}
                    theme={theme}
                    inheritedTheme={inheritedTheme}
                    isDesktop={isDesktop}
                    {...rest}
                />
            );
        }

        if ((theme === "ios" || inheritedTheme === "ios") && !isDesktop) {
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
                        id="angle-left"
                        className="cls-1"
                        fill="currentColor"
                        d="M15,19.75a.744.744,0,0,1-.53-.22l-7-7a.749.749,0,0,1,0-1.06l7-7a.75.75,0,0,1,1.06,1.06L9.061,12l6.469,6.47A.75.75,0,0,1,15,19.75Z"
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
                    id="arrow-left"
                    className="cls-1"
                    fill="currentColor"
                    d="M21.75,12a.75.75,0,0,1-.75.75H4.811l5.719,5.72a.75.75,0,1,1-1.06,1.06l-7-7a.751.751,0,0,1,0-1.06l7-7a.75.75,0,0,1,1.06,1.06L4.811,11.25H21A.75.75,0,0,1,21.75,12Z"/>
            </svg>
        )
    })
