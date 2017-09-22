import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';
import { Button, Form, Label, Input, FormGroup, FormText, Col } from 'reactstrap';

type SignupProps =
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class SignupPage extends React.Component<SignupProps, {}>{

    // public render() {
    //     return <div className="row">
    //         <Button color="danger">Danger!</Button>
    //         <div className="col-sm-offset-4 col-sm-4">
    //             <h3 className="text-center">注册</h3>
    //         </div>
    //         <form className="form-horizontal">
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <input type="text" className="form-control" id="inputEmail3" placeholder="用户名" />
    //                 </div>
    //             </div>
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <input type="text" className="form-control" id="inputPassword3" placeholder="名字" />
    //                 </div>
    //             </div>
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <input type="email" className="form-control" id="inputPassword3" placeholder="邮件" />
    //                 </div>
    //             </div>
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <input type="password" className="form-control" id="inputPassword3" placeholder="密码" />
    //                 </div>
    //             </div>
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <input type="password" className="form-control" id="inputPassword3" placeholder="确认密码" />
    //                 </div>
    //             </div>
    //             <div className="form-group">
    //                 <div className="col-sm-offset-4 col-sm-4">
    //                     <button type="submit" className="btn btn-default">注册新用户</button>
    //                 </div>
    //             </div>
    //         </form>
    //     </div>;
    // }

    public render() {
        return (
            <Form>
                <FormGroup row>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="email" name="email" placeholder="登录邮件" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="password" name="password" id="password" placeholder="密码必须6个字符" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Password</Label>
                    <Input type="password" name="password" id="confirmPassword" placeholder="确认密码" />
                </FormGroup>
                <FormGroup>
                    <Label for="nickName">Email</Label>
                    <Input type="text" name="email" id="nickName" placeholder="用户昵称" />
                </FormGroup>
                <Button>Submit</Button>
            </Form >
        );
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(SignupPage) as typeof SignupPage;