import * as React from "react";
import {TabView} from "react-native-tab-view";
import {Navbar, Segmented, SegmentedButton} from "konsta/react";

const SegmentedTabBar = ({
                             navigationState,
                             title,
                             activeSegmentFromParams,
                             jumpTo,
                             segmentedProps,
                             segmentedButtonProps,
                             navbarProps,
                             handleClick: _handleClick,
                             // ...restProps
                         }) => {
    const [isPending, startTransition] = React.useTransition()

    const handleClick = (segment) => {
        _handleClick(segment);

        startTransition(() => {
            jumpTo(segment);
        })
    }
    return (
        <Navbar
            {...navbarProps}
            title={title}
            component="nav"
            subnavbar={
                <Segmented {...segmentedProps}>
                    {navigationState.routes.map(({key, title}) => {
                            const active = key === activeSegmentFromParams;

                            return (
                                <SegmentedButton
                                    key={key}
                                    active={active}
                                    strong={active}
                                    colors={{
                                        borderIos: "border-transparent",
                                        divideIos: "divide-transparent",
                                        strongBgIos: "bg-transparent",
                                        strongBgMaterialIos: "bg-transparent",
                                    }}
                                    className={`${segmentedButtonProps?.className ?? "transition-transform capitalize scale-100"}
                                    ${active ? "scale-125" : "scale-80"}
                                    ${(isPending && active) ? "scale-80" : ""}`}
                                    onClick={() => handleClick(key)}
                                    {...segmentedButtonProps}
                                >
                                    {title}
                                </SegmentedButton>
                            )
                        }
                    )}
                </Segmented>
            }
        />
    )
}

export const SegmentedTabsView = ({
                                      navigationState,
                                      activeSegmentFromParams,
                                      title,
                                      index,
                                      onIndexChange,
                                      segmentedProps,
                                      segmentedButtonProps,
                                      navbarProps,
                                      handleClick,
                                      ...tabViewProps
                                  }) => {
    return (
        <TabView
            {...tabViewProps}
            navigationState={navigationState}
            onIndexChange={onIndexChange}
            animationEnabled={false}
            renderTabBar={(props) => (
                <SegmentedTabBar
                    activeSegmentFromParams={activeSegmentFromParams}
                    title={title}
                    navigationState={navigationState}
                    segmentedProps={segmentedProps}
                    segmentedButtonProps={segmentedButtonProps}
                    navbarProps={navbarProps}
                    handleClick={handleClick}
                    {...props}
                />
            )}
        />
    )
}
