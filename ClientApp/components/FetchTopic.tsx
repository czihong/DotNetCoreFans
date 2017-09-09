import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as TopicState from '../store/Topic';

type TopicProps = 
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class Topic extends React.Component<TopicProps, {}>{
    componentWillMount() {
        let page = parseInt(this.props.match.params.page) || 0;
        this.props.requestTopic(page);
    }

    componentWillReceiveProps(nextProps: TopicProps) {
        let page = parseInt(nextProps.match.params.page) || 0;
        this.props.requestTopic(page);
    }

    public render(){
        return <div>
            {
                this.props.topicData
            }
        </div>
    }
}

export default connect(
    (state: ApplicationState) => state.topicData, // Selects which state properties are merged into the component's props
    TopicState.actionCreators
)(Topic) as typeof Topic;