import React from 'react';

import AppHoc from '../hoc/app';
import moment from 'moment';

import {getClassName} from "./helpers";
import {TeamComponent} from './team';
import Clock from './clock';
import TimeButton from './timeButton';

const Page = ({data, updateLunch, lunchUpdated, notify}) => {

    let model = {
        lunchAt: '000',
        oneOFive: 'MAYBE',
        oneOThree: 'MAYBE'
    };

    if (!data.loading) {
        model = data.lunch;
    }

    if (!lunchUpdated.loading) {
        model = lunchUpdated.lunchUpdated
    }

    let containerName = 'container';
    if (model && model.oneOThree === 'YES' && model.oneOFive === 'YES') {
        containerName = "container positive";
    } else if (model && model.oneOThree === 'NO' && model.oneOFive === 'NO') {
        containerName = "container negative";
    }

    const isModifiedState = model.oneOFive !== 'MAYBE' || model.oneOThree !== 'MAYBE';

    return (
        <div id="page-wrapper" className={isModifiedState ? 'white' : ''}>
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
                            <div className="timeSmall"><Clock/></div>
                        </div>
                        <div className="notify dark">
                            <span
                                onClick={(): void => notify(model)}
                                onKeyPress={(): void => notify(model)}
                                role="button"
                                tabIndex="0"
                            >notify</span>
                        </div>
                        <div className="inc-dec">
                            <TimeButton model={model} type={'sub'} updateLunch={updateLunch} className={'bad'}/>
                            <TimeButton model={model} type={'add'} updateLunch={updateLunch} className={'good'}/>
                        </div>
                    </div>
                </div>
                <div className="inner-bottom">
                    <div>
                        <div><span className="darkgray">114</span></div>
                        <TeamComponent
                            updateLunch={updateLunch}
                            model={model}
                            team={'oneOThree'}
                        />
                    </div>
                    <div>
                        <div><span className="darkgray">111</span></div>
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

