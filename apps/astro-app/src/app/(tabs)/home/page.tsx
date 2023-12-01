import {
    BookmarkIcon,
    CardGlobal,
    DislikeIcon,
    IconButton,
    LikeIcon,
    Link,
    Pressable,
    ShareIcon
} from "@castro/ui-components";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";
import {Icon} from "konsta/react";
import {Share} from "@capacitor/share";

const HomeScreen = ({navigation, route}) => {
    const handlePress = async () => {
        await Share.share({
            title: 'Article XYZ',
            text: 'Some body text content',
            url: 'https://my-domain.blah',
            dialogTitle: 'Share'
        })
    }

    return (
        <>
            <CardGlobal
                raised component={Pressable}
                to={{screen: QualifiedScreenNames.ARTICLE}}
                footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton>
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton
                                onClick={handlePress}
                            >
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.USER}}
                        footer={
                            <div className="flex-1 flex">
                                <div className="flex flex-1 justify-start text-white">
                                    <IconButton
                                        ios={<LikeIcon/>}
                                        material={<LikeIcon/>}
                                    />
                                    <IconButton
                                    >
                                        <Icon
                                            ios={<DislikeIcon/>}
                                            material={<DislikeIcon/>}
                                        />
                                    </IconButton>
                                </div>
                                <div className="flex flex-1 justify-end text-white">
                                    <IconButton
                                        ios={<BookmarkIcon/>}
                                        material={<BookmarkIcon/>}
                                    />
                                    <IconButton

                                        onClick={handlePress}
                                    >
                                        <Icon
                                            ios={<ShareIcon/>}
                                            material={<ShareIcon/>}
                                        />
                                    </IconButton>
                                </div>
                            </div>
                        }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.ARTICLE}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton>
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton
                                onClick={handlePress}
                            >
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.USER}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton
                            >
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton
                                onClick={handlePress}
                            >
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.ARTICLE}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton>
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton
                                onClick={handlePress}
                            >
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.USER}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                onClick={handlePress}
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton>
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton onClick={handlePress}>
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.ARTICLE}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                               ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton>
                                <Icon
                                    ios={<DislikeIcon/>}
                                    material={<DislikeIcon/>}
                                />
                            </IconButton>
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton onClick={handlePress}>
                                <Icon
                                    ios={<ShareIcon/>}
                                    material={<ShareIcon/>}
                                />
                            </IconButton>
                        </div>
                    </div>
                }
            >
            </CardGlobal>
            <CardGlobal raised component={Pressable} to={{screen: QualifiedScreenNames.USER}}
                                        footer={
                    <div className="flex-1 flex">
                        <div className="flex flex-1 justify-start text-white">
                            <IconButton
                                ios={<LikeIcon/>}
                                material={<LikeIcon/>}
                            />
                            <IconButton
                                ios={<DislikeIcon/>}
                                material={<DislikeIcon/>}
                            />
                        </div>
                        <div className="flex flex-1 justify-end text-white">
                            <IconButton
                                ios={<BookmarkIcon/>}
                                material={<BookmarkIcon/>}
                            />
                            <IconButton
                                ios={<ShareIcon/>}
                                material={<ShareIcon/>}
                                onClick={handlePress}
                            />
                        </div>
                    </div>
                }
            >
            </CardGlobal>
        </>
    )
}

export default HomeScreen;
