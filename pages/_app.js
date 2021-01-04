import App from "next/app";
import React from "react";
import {Provider} from  'react-redux'
import  {createWrapper} from  'next-redux-wrapper'
import store from "../store/store";
import '../scss/main.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCheckSquare, faCoffee
} from
        '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)


class MyApp extends App{
    render() {
        const  {Component , pageProps}  = this.props
        return (
            <Provider store={store}>

                <Component {...pageProps}/>

            </Provider>
        )
    }
}
const makeStore  = ()=> store;
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
