import React from 'react';

import {changeTeamState} from './helpers';

const TeamComponent = ({updateLunch, model, team}) => {
        return (
            <div>
                <div className="bad">
                <span
                    onClick={(): void => {
                        return updateLunch(changeTeamState(model, 'NO', team))
                    }}
                    onKeyPress={(): void => {
                        return updateLunch(changeTeamState(model, 'NO', team))
                    }}
                    role="button"
                    tabIndex="0"
                >Nie czekajcie</span>
                </div>
                <div className="good">
                <span
                    onClick={(): void => {
                        return updateLunch(changeTeamState(model, 'YES', team))
                    }}
                    onKeyPress={(): void => {
                        return updateLunch(changeTeamState(model, 'YES', team))
                    }}
                    role="button"
                    tabIndex="0"
                >Jestesmy glodni</span>
                </div>
            </div>
        )
    }
;

export {
    TeamComponent
}