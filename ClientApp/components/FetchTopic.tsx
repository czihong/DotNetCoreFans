import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
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

    public render() {
        return <div className="row">
            {this.renderTopicList()}
            {this.renderSidebar()}
        </div>;
    }

    private renderTopicList() {
        var row = [];
        for (var i = 0; i < 10; i++) {
            row.push(
                <div className="topic-list">
                    <div className="media">
                        <div className="media-left">
                            <a href="#"><img className="media-object profile-image-sm" src="https://l.ruby-china.org/user/avatar/1107.jpg" /></a>
                        </div>
                        <div className="media-body">
                            <div className="meida-heading" href="#">
                                <a href="#">
                                    <h4>
                                        <span>文章分享 -- </span>
                                        <span>如何使用DotNet Core快速开发SPA应用程序</span>
                                    </h4>
                                </a>
                            </div>
                            <div className="meida-heading" href="#">
                                <h4>
                                    <a href="#">[czihong]</a>
                                    <span>最后由</span>
                                    <a href="#">[hedy]</a>
                                    <span>回复于</span>
                                    <span>[43分钟] 前</span>
                                </h4>
                            </div>
                        </div>
                        <div className="media-right"><h2>32</h2></div>
                    </div>
                </div>);
        }
        return <div className="col-md-9">{row}</div>
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
)(FetchTopic) as typeof FetchTopic;