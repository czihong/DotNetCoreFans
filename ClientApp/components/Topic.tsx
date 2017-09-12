import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';

type SingleTopicProps =
TopicState.TopicState                       // ... state we've requested from the Redux store
& typeof TopicState.actionCreators          // ... plus action creators we've requested
& RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class SingleTopic extends React.Component<SingleTopicProps, {}>{

    public render() {
        return <div className="row">
            {this.renderSingleTopic()}
            {this.renderSidebar()}
        </div>;
    }

    private renderSingleTopic(){
        return <div className="sidebar col-md-9">
            <h4>test</h4>
            </div>
    }

    private renderSidebar() {
        return <div className="sidebar col-md-3">
            <div className="panel panel-default">
                <div className="panel-body">
                    <a type="button" className="btn btn-primary">发表新话题</a>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">无回复话题</h3>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">请教各位技术大神一个问题？</a>
                    <a href="#" className="list-group-item">请教各位技术大神一个问题？</a>
                    <a href="#" className="list-group-item">请教各位技术大神一个问题？</a>
                    <a href="#" className="list-group-item">请教各位技术大神一个问题？</a>
                    <a href="#" className="list-group-item">请教各位技术大神一个问题？</a>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">推荐 DotNet Core 资源</h3>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item"><span className='glyphicon glyphicon-star'></span> 推荐 DotNet Core 资源</a>
                    <a href="#" className="list-group-item"><span className='glyphicon glyphicon-star'></span> Dotnet Core 官网</a>
                    <a href="#" className="list-group-item"><span className='glyphicon glyphicon-star'></span> Dotnet Core 中文教程</a>
                    <a href="#" className="list-group-item"><span className='glyphicon glyphicon-star'></span> Azure School</a>
                    <a href="#" className="list-group-item"><span className='glyphicon glyphicon-star'></span> Azure Docs</a>
                </div>
            </div>
        </div>
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(SingleTopic) as typeof SingleTopic;