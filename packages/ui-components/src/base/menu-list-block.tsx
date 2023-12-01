import {BlockTitle, List} from 'konsta/react';
import * as React from 'react';
import {ListItemLink} from "./list-item-link.js";

export interface MenuListBlockProps {
    title: string;
    items: { title: string; href: string; after?: string }[];
    listItemProps?: any;
}

export const MenuListBlock = ({
                                  title,
                                  items,
                                  listItemProps = {}
                              }: MenuListBlockProps
) => {
    return (
        <>
            {title && <BlockTitle>{title}</BlockTitle>}
            <List>
                {items.map(({title, href}) => (
                    <ListItemLink
                        key={href}
                        title={title}
                        href={href}
                        {...listItemProps}
                    />
                ))}
            </List>
        </>
    );
};
