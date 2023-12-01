import * as React from "react";
import {ErrorBoundaryView} from "@castro/ui-components";
import {ErrorBoundary} from "react-error-boundary";
import {CastroRouter} from "@/app/__internals/router/castro-router.js";
import {enableRuntimeDeps} from "@/app/__internals/enable-runtime-deps.js";
import {App} from "konsta/react";

enableRuntimeDeps();

export interface CastroRootProps {
    asChild?: boolean;
    RootErrorBoundaryComponent: React.ReactElement;
    enableClientProfiling?: boolean;
    theme: string;
    isDarkMode: boolean;
    appShellClassName?: string;
    appShellComponent?: string;
    appShellSafeAreas?: boolean;
}

export const CastroRoot = ({
                               RootErrorBoundaryComponent = <ErrorBoundaryView/>,
                               enableClientProfiling = false,
                               theme,
                               isDarkMode,
                               appShellClassName,
                               appShellComponent,
                               appShellSafeAreas = false,
                               ...routerProps
                           }: CastroRootProps
) => {
    return (
        <React.Profiler
            id="__CASTRO_ROOT__"
            onRender={(id, phase, actualDuration, baseDuration) => {
                if (!enableClientProfiling) {
                    return;
                }

                console.info(`
                Profiling from ${id} 
                During **${phase}** phase
                
                Actual/Optimised duration: ${actualDuration}
                Base/Non-optimised est. duration: ${baseDuration}
            `)
            }}
        >
            <App
                component={appShellComponent}
                theme={theme}
                dark={isDarkMode}
                safeAreas={appShellSafeAreas}
                className={appShellClassName}
            >
                <ErrorBoundary fallback={RootErrorBoundaryComponent}>
                    <CastroRouter theme={theme} dark={isDarkMode} {...routerProps} />
                </ErrorBoundary>
            </App>
        </React.Profiler>
    )
}
