import React from 'react';
import {ApolloClient, ApolloProvider, createNetworkInterface} from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import './index.css';

import Page from './components/page';

const wsClient = new SubscriptionClient(`ws://145.239.91.188:4000/subscriptions`, {
    reconnect: true
});

const networkInterface = createNetworkInterface({
    uri: 'http://145.239.91.188:4000/graphql'
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient
);

const client = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions
});

const App = () => {
    return <ApolloProvider client={client}>
        <Page/>
    </ApolloProvider>;
};
export {
    App as default
};
