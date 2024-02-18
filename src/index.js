import React from 'react';
import ReactDOM from 'react-dom/client';

// import {Provider} from 'react-redux';
// import store from "./Ecommerce-Site/Store";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'font-awesome'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/arya-blue/theme.css";


// import Main from "./ExpenseTracker/Main";
// import Login from "./Session/Login";
// import {UserDetails} from "./UserDetails";
// import DialogTest from "./Session/DialogTest";
import PaySlipViewer from "./PaySlipViewer";
import LoaderLanding from "./LoaderLanding";




// store.subscribe(() => console.log("subscribed" , store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

{/*<PrimeReactProvider>*/}

        {/*<UserDetails/>*/}
        <LoaderLanding/>
        {/*<DialogTest/>*/}
{/*</PrimeReactProvider>*/}
            </React.StrictMode>
);