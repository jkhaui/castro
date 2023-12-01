import * as React from "react";
import {Icon, TabbarLink} from "konsta/react";
import {BellIcon, HomeIcon, SearchIcon, SettingsIcon} from "../icons/index.mjs";
import {ICON_BADGE_OVERRIDE_CLASSNAME, PRESSABLE_DEFAULT_CLASSNAME} from "../utils/index.js";

const tabIcons = [
    HomeIcon,
    SearchIcon,
    BellIcon,
    SettingsIcon
]

export const TabNavLink = ({
                               appRootPath,
                               anchorElId,
                               index,
                               tabBasePathSegment,
                               initialTabPath,
                               initialActiveSegment,
                               label,
                               theme,
                               buildStaticHref
                           }) => {
    const isActive = tabBasePathSegment === initialTabPath;

    const IconIos = tabIcons[index]?.ios ?? tabIcons[index];
    const IconMaterial = tabIcons[index]?.material ?? tabIcons[index];

    const href = buildStaticHref({
        tabBasePathSegment,
        appRootPath,
        initialActiveSegment,
        initialTabPath,
        anchorElId
    })

    return (
        <TabbarLink
            // ref={ref}
            className={PRESSABLE_DEFAULT_CLASSNAME}
            href={href}
            active={isActive}
            linkProps={{
                draggable: "false"
            }}
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
