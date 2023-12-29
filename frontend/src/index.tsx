import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
// import {
//     QueryClient,
//     QueryClientProvider,
// } from '@tanstack/react-query'
//
// // Create a client
// const queryClient = new QueryClient()

const graphqlClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={graphqlClient}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
