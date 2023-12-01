import {ButtonGlobal, CardGlobal, Link} from "@castro/ui-components";
import {hapticsVibrate, QualifiedScreenNames} from "@/utils/index.mjs";
import * as React from "react";

const Recommendations = ({navigation}) => {
    return (
        <>
            <CardGlobal>
                <Link to={{screen: QualifiedScreenNames.CATEGORIES}}>Go to categories</Link>
                <div className="pt-8">
                    <ButtonGlobal tonal outline onClick={hapticsVibrate}>Press & hold for haptics</ButtonGlobal>
                </div>
            </CardGlobal>
        </>
    )
}

export default Recommendations;
