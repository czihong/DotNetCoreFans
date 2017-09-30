import * as WeatherForecasts from './WeatherForecasts';
import * as Topic from './Topic';
import * as TopicListPage from './TopicListPage';
import * as navMenu from './NavMenu';
import * as SignupForm from './SignupForm';

// The top-level state object
export interface ApplicationState {
    weatherForecasts: WeatherForecasts.WeatherForecastsState;
    topic: Topic.TopicState;
    topicListPage: TopicListPage.TopicListPageState;
    navMenu: navMenu.NavMenuState;
    signupForm: SignupForm.SignupFormState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    weatherForecasts: WeatherForecasts.reducer,
    topic: Topic.reducer,
    topicListPage: TopicListPage.reducer,
    navMenu: navMenu.reducer,
    signup: SignupForm.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
