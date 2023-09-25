import * as React from "react";
import {Icon, TabbarLink} from "konsta/react";
import {EllipsisHorizontalIcon, HomeIcon, ProfileIcon, SearchIcon} from "@castro/ui-components";

const tabIcons = [
    HomeIcon,
    SearchIcon,
    ProfileIcon,
    EllipsisHorizontalIcon
]

export const TabNavLink = ({
                               index,
                               tabRoute,
                               activeTab,
                               label
                           }) => {
    const ref = React.useRef(null);

    const isActive = tabRoute === activeTab;

    const IconIos = tabIcons[index]?.ios ?? tabIcons[index];
    const IconMaterial = tabIcons[index]?.material ?? tabIcons[index];

    return (
        <TabbarLink
            ref={ref}
            className={'fade focus:ring-0 focus:ring-offset-0 active:scale-110 outline-0'}
            href={tabRoute}
            active={isActive}
            linkProps={{
                rel: 'prefetch'
            }}
            icon={
                <Icon ios={<IconIos filled={isActive}/>} material={<IconMaterial filled={isActive}/>}/>
            }
            label={label}
        />
    )
}
