import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface TopicListPageState {
    isLoading: boolean;
    page?: number;
    topicList: Topic[];
}

export interface Topic {
    id: number;
    category: string;
    title: string;
    content: string;
    createTime: string;
    isLock: boolean;
    isRecommand: boolean;
    isTop: boolean;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestTopicAction {
    type: 'REQUEST_TOPIC';
    page: number;
}

interface ReceiveTopicAction {
    type: 'RECEIVE_TOPIC';
    page: number;
    topicList: Topic[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestTopicAction | ReceiveTopicAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestTopic: (page: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (page !== getState().topic.page) {
            let fetchTask = fetch(`api/Topic/Topic?page=${ page }`)
                .then(response => response.json() as Promise<Topic[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_TOPIC', page: page, topicList: data});
            });
        
            addTask(fetchTask);
            dispatch({ type: 'REQUEST_TOPIC', page: page });
        }
    }
}

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: TopicListPageState = { topicList: [], isLoading: false };

export const reducer: Reducer<TopicListPageState> = (state: TopicListPageState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_TOPIC':
            return {
                page: action.page,
                topicList: state.topicList,
                isLoading: true
            };
        case 'RECEIVE_TOPIC':
            if (action.page === state.page) {
                return {
                    page: action.page,
                    topicList: action.topicList,
                    isLoading: false
                };
            }
            break;
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};