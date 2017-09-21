import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';

type NewTopicPageProps =
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class NewTopicPage extends React.Component<NewTopicPageProps, {}>{

    public render() {
        return <div className="row">
            {this.renderUserContainer()}
            {this.renderSidebar()}
        </div>;
    }

    private renderUserContainer() {
        return <div className="sidebar col-md-9">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">发布话题</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body-title">
                        <span className="label label-dotnet">分类</span>
                        <span className="btn-group" role="group">
                            <button type="button" className="btn btn-default button-dotnet">分享</button>
                            <button type="button" className="btn btn-default button-dotnet">.Net</button>
                            <button type="button" className="btn btn-default button-dotnet">.Net Core</button>
                            <button type="button" className="btn btn-default button-dotnet">Asp.Net Core</button>
                        </span>
                    </div>
                    <div className="">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="标题字数10以上" />
                    </div>
                </div>
            </div>
        </div>
    }

    private renderSidebar() {
        return <div className="sidebar col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">作者信息</h3>
                </div>
                <div className="meida">
                    <div className="media-left">
                        <a href="#"><img className="media-object profile-image-sm" src="https://l.ruby-china.org/user/avatar/1107.jpg" /></a>
                    </div>
                    <div className="media-body">
                        <div className="meida-heading" href="#">见字如面</div>
                        <div className="meida-heading" href="#">这里是作者的签名</div>
                    </div>
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
        </div>
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(NewTopicPage) as typeof NewTopicPage;