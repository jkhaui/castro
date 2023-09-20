import React from 'react'
import {ServerContainer} from "@react-navigation/native";
// import AppRegistry from "react-native";
// import ReactDOMServer from 'react-dom/server';
import {AppClient} from "@/components/react/app-client";

// AppRegistry.registerComponent('AppClient', () => AppClient);
// //
// const { element } = AppRegistry.getApplication('AppClient');

// const html = ReactDOMServer.renderToString(
//     <ServerContainer location={{pathname: '/', search: ''}}>
//         {element}
//     </ServerContainer>
// );
//
// console.log(html);

const AppRoot = ({...appProps}) => {
    return (
        <AppClient {...appProps} />
    );

    return (
        <ServerContainer
            location={{
                pathname: '/',
                search: ''
            }}
        >
            <AppClient {...appProps} />
        </ServerContainer>
    )
}

export default AppRoot;
