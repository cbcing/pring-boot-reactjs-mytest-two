/**
 * Created by David on 4/15/17.
 */
import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'


if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
    window.renderClient = (products, sortBy) => {
        render (
            <App products={products} sortBy={sortBy}/>,
            document.getElementById ('root')
        );
    }
}
else {
    global.renderServer = (products, sortBy) => {
        const jsProducts = Java.from (products);
        return renderToString (
            <App products={jsProducts} sortBy={sortBy}/>
        )
    };
}