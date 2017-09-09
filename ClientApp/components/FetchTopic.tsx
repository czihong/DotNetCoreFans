import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as TopicState from '../store/Topic';

type TopicProps = 
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class FetchTopic extends React.Component<TopicProps, {}>{
    componentWillMount() {
        let page = parseInt(this.props.match.params.page) || 0;
        this.props.requestTopic(page);
    }

    componentWillReceiveProps(nextProps: TopicProps) {
        let page = parseInt(nextProps.match.params.page) || 0;
        this.props.requestTopic(page);
    }

    public render(){
        return <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
            {this.props.topicData.map(topic =>
                <tr key={ topic.createTime }>
                    <td>{ topic.id }</td>
                    <td>{ topic.category }</td>
                    <td>{ topic.title }</td>
                    <td>{ topic.content }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(FetchTopic) as typeof FetchTopic;