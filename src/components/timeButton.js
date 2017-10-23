import React, {Component} from 'react';
import moment from 'moment';

const TimeButton = ({type, model, updateLunch}) => {
    const newModel = Object.assign({}, model, {lunchAt: moment(model.lunchAt).add(type === 'add' ? 5 : -5, 'minutes')});
    return (
        <span
            className={type === 'add' ? 'good' : 'bad'}
            onClick={() => {
                updateLunch({variables: newModel});
            }}
            onKeyPress={() => {
                updateLunch({variables: newModel});
            }}
            role="button"
            tabIndex="0"
        >{type === 'add' ? '+' : '-'}</span>
    )
}

export default TimeButton;
