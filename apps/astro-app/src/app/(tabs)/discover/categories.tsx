import {CardGlobal, Link} from "@castro/ui-components";
import {Button, Card} from "konsta/react";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";
import {Share} from "@capacitor/share";

const CategoriesScreen = ({navigation, scrollProps: {isAtViewportTop, scrollContainerRef}}) => {
    const handleClick = async () => {
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
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
            <CardGlobal
                outline footer={
                    <Button onClick={handleClick} rounded>Share</Button>
                }
            >
                <Link to={{screen: QualifiedScreenNames.RECOMMENDATIONS}}>Recommendations</Link>
            </CardGlobal>
        </>
    )
}

export default CategoriesScreen;
