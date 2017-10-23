import type {AppType, Hungry, Team} from '../types';

const decideRoom = (currentState: Hungry, newState: Hungry): Hungry => {
    if (newState === 'YES' && (currentState === 'MAYBE' || currentState === 'NO')) {
        return 'YES'
    } else if (newState === 'NO' && (currentState === 'MAYBE' || currentState === 'YES')) {
        return 'NO'
    }
    return 'MAYBE'
};

const changeTeamState = (data: AppType, selected: Hungry, team: Team): AppType => {
    return {
        variables: Object.assign({}, {...data}, {[team]: decideRoom(data[team], selected)})
    }
};

const getClassName = (state: Hungry): string => {
    switch (state) {
        case 'YES':
            return 'good';
        case 'NO':
            return 'bad';
        default:
            return '';
    }
};

export {
    changeTeamState, getClassName
}