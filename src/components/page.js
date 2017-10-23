import React from 'react';

import AppHoc from '../hoc/app';
import moment from 'moment';

import {getClassName} from "./helpers";
import {TeamComponent} from './team';

const Page = ({data, updateLunch, lunchUpdated}) => {

    let model = {
        lunchAt: '0000',
        oneOFive: 'MAYBE',
        oneOThree: 'MAYBE'
    };

    if (!data.loading) {
        console.log('lunch came');
        model = data.lunch;
    }

    if(!lunchUpdated.loading){
        model = lunchUpdated.lunchUpdated
    }

    let containerName = 'container';
    if (model && model.oneOThree === 'YES' && model.oneOFive === 'YES') {
        containerName = "container positive";
    } else if (model && model.oneOThree === 'NO' && model.oneOFive === 'NO') {
        containerName = "container negative";
    }

    return (
        <div id="page-wrapper">
            <div className={containerName}>
                <div className={`sto-trzy ${getClassName(model ? model.oneOThree : '')}`}/>
                <div className={`sto-piec ${getClassName(model ? model.oneOFive : '')}`}/>
            </div>
            {data.loading && <div className="loading">...loading</div>}
            {!data.loading &&
            <div className="inner-container">
                <div className="inner-top">
                    <div className="clock-container">
                        <div className="darkgray">
                            <div className="timeBig">{moment(model.lunchAt).format("HH:mm")}</div>
                            <div className="timeSmall">15:46:57</div>
                        </div>
                        <div className="inc-dec">
                            <span className="bad">-</span>
                            <span className="good">+</span>
                        </div>
                    </div>
                </div>
                <div className="inner-bottom">
                    <div>
                        <div><span className="darkgray"> 103</span></div>
                        <TeamComponent
                            updateLunch={updateLunch}
                            model={model}
                            team={'oneOThree'}
                        />
                    </div>
                    <div>
                        <div><span className="darkgray">105</span></div>
                        <TeamComponent
                            updateLunch={updateLunch}
                            model={model}
                            team={'oneOFive'}
                        />
                    </div>
                </div>
            </div>}
        </div>
    );
};

const connectedPage = AppHoc(Page);

export {
    connectedPage as default
}
//     props.updateLunch({variables: {lunchAt: 'dlkjsdf', oneOFive: 'bbb', oneOThree: 'zz'}})

// const model: AppType = props.data.allLunches ? props.data.allLunches[props.data.allLunches.length - 1] : undefined;
// let containerName = 'container';
// if (model && model.oneOThree === 'YES' && model.oneOFive === 'YES') {
//     containerName = "container positive";
// } else if (model && model.oneOThree === 'NO' && model.oneOFive === 'NO') {
//     containerName = "container negative";
// }
// return <div id="page-wrapper">
//     <div className={containerName}>
//         <div className={`sto-trzy ${getClassName(model ? model.oneOThree : '')}`}/>
//         <div className={`sto-piec ${getClassName(model ? model.oneOFive : '')}`}/>
//     </div>
//     {props.data.loading || !props.data.allLunches
//         ? <div className="loading">...loading</div>
//         : <Component
//             {...props}
//             createLunch={(data) => {
//                 return props.createLunch(
//                     {
//                         variables: Object.assign({}, {...model}, {...data}),
//                         optimisticResponse: {
//                             createLunch: {
//                                 ...data,
//                                 id: Math.round(Math.random() * -1000000),
//                                 __typename: 'Lunch',
//                             },
//                         },
//                         update: (store, {data: {createLunch}}) => {
//                             // Read the data from our cache for this query.
//                             const data = store.readQuery({query: GetLunches});
//                             // Add our comment from the mutation to the end.
//                             data.allLunches.push(createLunch);
//                             // Write our data back to the cache.
//                             store.writeQuery({query: GetLunches, data});
//                         },
//                     });
//             }}
//         />}
// </div>;;
