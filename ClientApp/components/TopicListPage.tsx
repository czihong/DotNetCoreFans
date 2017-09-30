import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { TopicList } from './TopicList';
import * as TopicListPageStore from '../store/TopicListPage';

type TopicListPageProp =
    TopicListPageStore.TopicListPageState           // ... state we've requested from the Redux store
    & typeof TopicListPageStore.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;        // ... plus incoming routing parameters

export class TopicListPage extends React.Component<TopicListPageProp, {}> {
    componentWillMount() {
        let page = parseInt(this.props.match.params.page) || 0;
        this.props.requestTopic(page);
    }

    componentWillReceiveProps(nextProps: TopicListPageProp) {
        let page = parseInt(nextProps.match.params.page) || 0;
        this.props.requestTopic(page);
    }

	public render() {
        let topics = this.props.topicList;
		return (
            <TopicList topicList={topics}/>
		);
	}
}

export default connect(
    (state: ApplicationState) => state.topicListPage,   // Selects which state properties are merged into the component's props
    TopicListPageStore.actionCreators                   // Selects which action creators are merged into the component's props
)(TopicListPage) as typeof TopicListPage;