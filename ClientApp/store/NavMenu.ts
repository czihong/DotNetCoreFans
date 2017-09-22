import { Action, Reducer } from 'redux';

export interface NavMenuState {
    isOpen: boolean;
}

interface ToggleAction { type: 'TOGGLE' }

type KnowAction = ToggleAction;

export const actionCreators = {
    toggle: () => <ToggleAction>{type: 'TOGGLE'}
}

export const reducer: Reducer<NavMenuState> = (state: NavMenuState, action: KnowAction) => {
    switch(action.type){
        case 'TOGGLE':
            return { isOpen: !state.isOpen};
    }

    return state || { isOpen: false}
};