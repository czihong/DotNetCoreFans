import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface SignupFormState {
    isLoading: boolean;
    userId: number;
}

export interface User {
    id: number;
    nickName: string;
    email: string;
    location: string;
    signature: string;
}

interface RequestCreateUserAction {
    type: 'REQUEST_CREATE_USER';
    userId: number;
}

interface ReceiveCreateUserAction {
    type: 'RECEIVE_CREATE_USER';
    user: User;
}

type KnowAction = RequestCreateUserAction | ReceiveCreateUserAction;

export const actionCreators = {
    createUser: (userId: number): AppThunkAction<KnowAction> => (dispatch, getState) => {
        let fetchTask = fetch(`api/User/id=${userId}`)
            .then(response => response.json as Promise<User>)
            .then(data => {
                dispatch({ type: 'RECEIVE_CREATE_USER', user: data })
            });

        addTask(fetchTask);
        dispatch({ type: 'REQUEST_CREATE_USER', userId: userId });
    }
};

const unloadedState: SignupFormState = { userId: 1, isLoading: false };

export const reducer: Reducer<SignupFormState> = (state: SignupFormState, incomingAction: Action) => {
    const action = incomingAction as KnowAction;
    switch (action.type) {
        case 'REQUEST_CREATE_USER':
            return {
                userId: state.userId,
                isLoading: true
            };
        case 'RECEIVE_CREATE_USER':
            return {
                user: action.user,
                isLoading: true
            };
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};