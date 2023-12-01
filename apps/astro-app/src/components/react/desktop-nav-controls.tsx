import {Icon, MenuList, MenuListItem, TabbarLink} from 'konsta/react';
import * as React from 'react';
import {BellIcon, HomeIcon, SearchIcon, SettingsIcon} from "@castro/ui-components";
import {ICON_BADGE_OVERRIDE_CLASSNAME, TEXT_CONTROL_COLOR_CLASSNAME} from "@/utils/index.mjs";

const tabIcons = [
    HomeIcon,
    SearchIcon,
    BellIcon,
    SettingsIcon
]

export const DesktopNavControls = ({
                                       tabLabels,
                                       buildStaticHref,
                                       anchorElId,
                                       location,
                                       showSidebarIcons = true,
                                       appRootPath,
                                       miniVariant
                                   }) => {
    if (!location || !tabLabels) {
        return <React.Fragment/>;
    }

    const {
        initialTabPath,
        initialActiveSegment,
        tabBasePathSegments
    } = location;

    return (
        <MenuList className="justify-end">
            {tabBasePathSegments.map((route, index) => {
                const label = tabLabels[index];

                const IconIos = tabIcons[index]?.ios ?? tabIcons[index];
                const IconMaterial = tabIcons[index]?.material ?? tabIcons[index];

                const isActive = route === initialTabPath;

                const color = isActive ? 'text-primary' : TEXT_CONTROL_COLOR_CLASSNAME;

                const href = buildStaticHref({
                    tabBasePathSegment: route,
                    appRootPath,
                    initialActiveSegment,
                    initialTabPath,
                    anchorElId
                })

                const IconComponent =
                    showSidebarIcons && (
                        <Icon
                            badge={(index === 2) ? "" : undefined}
                            badgeColors={{
                                bg: ICON_BADGE_OVERRIDE_CLASSNAME
                            }}
                            ios={<IconIos filled={isActive}/>}
                            material={<IconMaterial filled={isActive}/>}
                            className={`h-6 w-6 ${color}`}
                        />
                    )

                if (miniVariant) {
                    return (
                        <TabbarLink
                            // ref={ref}
                            key={route}
                            className="fade focus:ring-0 active:scale-110 scale-100 ease-in-out"
                            href={href}
                            active={isActive}
                            icon={
                                <Icon
                                    badge={(index === 2) ? "" : undefined}
                                    badgeColors={{
                                        bg: ICON_BADGE_OVERRIDE_CLASSNAME
                                    }}
                                    ios={<IconIos filled={isActive}/>}
                                    material={<IconMaterial filled={isActive}/>}
                                />
                            }
                            label={label}
                        />
                    )
                }

                return (
                    <MenuListItem
                        key={route}
                        title={
                            <span className={`text-xl ${isActive ? "font-bold" : "font-semibold"}`}>
                                {label}
                            </span>
                        }
                        linkProps={{
                            className:
                                'flex items-center rounded-full min-h-[3.5rem] ml-2-safe mr-2-safe ps-4 duration-300 active:duration-0 cursor-pointer select-none relative overflow-hidden touch-ripple-black dark:touch-ripple-white bg-transparent',
                            // navbar: true,
                        }}
                        href={href}
                        active={isActive}
                        titleWrapClassName={color}
                        media={IconComponent}
                        colors={{
                            menuListItemActiveBgIos: 'bg-transparent',
                            menuListItemBgIos: 'bg-transparent',
                            menuListItemActiveBgMaterial: 'bg-transparent',
                            menuListItemBgMaterial: 'bg-transparent',
                            menuListItemTextMaterial: 'text-white',
                        }}
                    />
                );
            })}
        </MenuList>
    );
};
