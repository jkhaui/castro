import {Link} from "@castro/ui-components";
import {Button, Card} from "konsta/react";
import {QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";
import {Share} from "@capacitor/share";

const handleClick = async () => {
    await Share.share({
        title: 'Article XYZ',
        text: 'Some body text content',
        url: 'https://my-domain.blah',
        dialogTitle: 'Share'
    })
}

const AccountScreen = ({route, navigation}) => {
    return (
        <Card
            footer={
                <Button onClick={handleClick} rounded>Share</Button>
            }
        >
            <Link to={{screen: QualifiedScreenNames.NOTIFICATIONS}}>Go to notifications</Link>
        </Card>
    )
}

export default AccountScreen;
