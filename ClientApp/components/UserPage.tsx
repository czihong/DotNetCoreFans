import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';

type UserPageProps =
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class UserPage extends React.Component<UserPageProps, {}>{

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
                    <h3 className="panel-title">作者信息</h3>
                </div>
                <div className="meida">
                    <div className="media-left">
                        <a><img className="media-object profile-image-sm" src="https://l.ruby-china.org/user/avatar/1107.jpg" /></a>
                    </div>
                    <div className="media-body">
                        <div className="meida-heading">见字如面</div>
                        <div className="meida-heading">这里是作者的签名</div>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">作者的其他话题</h3>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">作者的参与话题</h3>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">作者的参与话题</a>
                    <a href="#" className="list-group-item">作者的参与话题</a>
                    <a href="#" className="list-group-item">作者的参与话题</a>
                    <a href="#" className="list-group-item">作者的参与话题</a>
                    <a href="#" className="list-group-item">作者的参与话题</a>
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
                        <a><img className="media-object profile-image-sm" src="https://l.ruby-china.org/user/avatar/1107.jpg" /></a>
                    </div>
                    <div className="media-body">
                        <div className="meida-heading">见字如面</div>
                        <div className="meida-heading">这里是作者的签名</div>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">作者其他话题</h3>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
                    <a href="#" className="list-group-item">作者的其他话题</a>
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
)(UserPage) as typeof UserPage;