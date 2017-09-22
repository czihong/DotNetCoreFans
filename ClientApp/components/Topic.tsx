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

    private renderSingleTopic() {
        return <div className="col-md-9">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="header panel-title">文章的标题</div>
                    <div>
                        <span>发布于3天前</span>
                        <span>| 作者：见字如面</span>
                        <span>| 3987 浏览</span>
                    </div>
                </div>
                <div className="panel-body">
                    <p>翻译了Ruby User’s Guide。基于Mark Slagell的英文版本翻译而来。
                        当前翻译版本是初版，请不要吐槽我的翻译水平，fork并完善它才是更为有意义的事情。
                        Ruby用户指南地址：https://github.com/BadTudou/RubyUsersGuide-zh
                        
                        (尽管是GNU Free Documentation License，但我还是给英文版的作者发去授权申请，作者回复</p>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="panel-title">共收到23条回复</span>
                </div>
                <div className="media">
                    <div className="media-left">
                        <a><img className="media-object profile-image-sm" src="https://l.ruby-china.org/user/avatar/1107.jpg" /></a>
                    </div>
                    <div className="media-body">
                        <div className="meida-heading">
                            <h6>
                                <a>[czihong]</a>
                                <span> 1楼 </span>
                                <span>[43分钟] 前</span>
                            </h6>
                        </div>
                        <div className="meida-heading">
                            <h5>感谢作者，这篇文章写得很好</h5>
                        </div>
                    </div>
                    <div className="media-right"><h5>回复</h5></div>
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
)(SingleTopic) as typeof SingleTopic;