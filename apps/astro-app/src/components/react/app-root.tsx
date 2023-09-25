import React from 'react'
import {ServerContainer} from "@react-navigation/native";
// import AppRegistry from "react-native";
// import ReactDOMServer from 'react-dom/server';
// import {AppClient} from "./app-client";

// TODO: investigate how to get `ServerContainer` working.
// Probably needs to use a custom ReactDOM renderer as an Astro
// integration

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

const AppRoot = ({children}) => {
    return (
        <ServerContainer
            location={{
                pathname: '/',
                search: ''
            }}
        >
            {children}
        </ServerContainer>
    )
}

export default AppRoot;
