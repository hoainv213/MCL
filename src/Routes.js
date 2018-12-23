import React from 'react';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './NotFound';


const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/about',
        exact: true,
        main: () => <About/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
];

export default Routes;