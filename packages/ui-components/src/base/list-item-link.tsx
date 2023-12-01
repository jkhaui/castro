import * as React from "React";
import {useAccessibleLink} from "../../../router/src/index.mjs";
import {ListItem, Preloader} from "konsta/react";
import {ChevronRightIcon} from "../icons/index.mjs";

import {ICON_BASE_COLOR_CLASSNAME, OPACITY_HALF_CLASSNAME} from "../utils/classnames.js";

const DefaultChevronIcon = (
    <ChevronRightIcon small className={`${ICON_BASE_COLOR_CLASSNAME} ${OPACITY_HALF_CLASSNAME}`}/>
)

export interface ListItemLinkProps {
    href: string;
    title: string;
    chevronIcon?: React.ReactNode;
    listItemProps?: any;
}

export const ListItemLink = ({
                                 href,
                                 title,
                                 chevronIcon = DefaultChevronIcon,
                                 listItemProps = {}
                             }: ListItemLinkProps) => {
    const {isPending, handlePress, path} = useAccessibleLink({to: {screen: href}})

    return (
        <ListItem
            title={title}
            href={path}
            className={`${isPending ? OPACITY_HALF_CLASSNAME : 'opacity-100'}`}
            onClick={handlePress}
            chevronIcon={isPending ? <Preloader className={ICON_BASE_COLOR_CLASSNAME} size="!w-4 !h-4"/> : chevronIcon}
            linkProps={{
                draggable: "false"
            }}
            {...listItemProps}
        />
    )
}
