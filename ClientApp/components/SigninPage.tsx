import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';

type SigninProps =
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class SigninPage extends React.Component<SigninProps, {}>{

    public render() {
        return <div className="row">
            <div className="col-sm-offset-4 col-sm-4">
                <h3 className="text-center">登陆</h3>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="用户名" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="密码" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                        <button type="submit" className="btn btn-default">登陆</button>
                    </div>
                </div>
            </form>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(SigninPage) as typeof SigninPage;