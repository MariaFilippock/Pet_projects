import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Store from './redux/redux-store';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)

// rerenderEntireTree(Store.getState());

// Store.subscribe(() => {
//   let state = Store.getState();
//   rerenderEntireTree(state);
// })

// let wasInitiallyRender = false;
// let callSubscriber = () => {
//   const rootNode = document.getElementById('root');


//   if (wasInitiallyRender) {
//     console.log(ReactDOM.hydrateRoot);
//     ReactDOM.hydrateRoot(rootNode, <App store={Store} />)
//   } else {

//     wasInitiallyRender = true;
//   }

// }
// const root = ReactDOM.createRoot(rootNode);
//     root.render(<App store={Store} />);

// callSubscriber();

// Store.subscribe(callSubscriber);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
