import {Link} from "@castro/ui-components";
import {Button, Card} from "konsta/react";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";
import {Share} from "@capacitor/share";

const SubscriptionScreen = ({route, navigation}) => {
    const handleClick = async () => {
        await Share.share({
            title: 'Article XYZ',
            text: 'Some body text content',
            url: 'https://my-domain.blah',
            dialogTitle: 'Share'
        })
    }

    return (
        <Card
            footer={
                <Button onClick={handleClick} rounded>Share</Button>
            }
        >
            <Link to={{screen: QualifiedScreenNames.ACCOUNT}}>Go to account notifications</Link>
        </Card>
    )
}

export default SubscriptionScreen;
