import React from 'react';
import {gql, graphql} from 'react-apollo';
import {compose} from 'react-apollo';

const getLunch = gql`
    query {
        lunch {
            lunchAt
            oneOFive
            oneOThree
        }
    }
`;

const updateLunch = gql`
    mutation updateLunch ($oneOFive: String, $oneOThree: String, $lunchAt: String) {
        updateLunch(lunchAt: $lunchAt, oneOFive: $oneOFive, oneOThree: $oneOThree) {
            lunchAt
            oneOFive
            oneOThree
        }
    }
`;

const lunchUpdated = gql`
    subscription lunchUpdated{
        lunchUpdated {
            lunchAt
            oneOFive
            oneOThree
        }
    }
`;

const AppHoc = (Component) => compose(
    graphql(getLunch, {name: 'data'}),
    graphql(updateLunch, {name: 'updateLunch'}),
    graphql(lunchUpdated, {name: 'lunchUpdated'})
)(({...props}) => {
    return <Component {...props}/>;
});

export {
    AppHoc as default
};