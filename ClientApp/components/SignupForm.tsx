import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as TopicState from '../store/Topic';
import { Button, Form, Label, Input, FormGroup, Col, Row } from 'reactstrap';

type SignupFromProps =
    TopicState.TopicState                       // ... state we've requested from the Redux store
    & typeof TopicState.actionCreators          // ... plus action creators we've requested
    & RouteComponentProps<{ page: string }>;    // ... plus incoming routing parameters

class SignupForm extends React.Component<SignupFromProps, {}>{
    public render() {
        return (
            <Form>
                <Label className="text-center-dotnet">注册</Label>
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
                <FormGroup row>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="password" name="password" id="confirmPassword" placeholder="确认密码" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="text" name="email" id="nickName" placeholder="用户昵称" />
                    </Col>
                </FormGroup>
                <Row>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Button>Submit</Button>
                        <Link className='btn btn-default pull-left' to={ `/fetchdata/1` }>Previous</Link>
                    </Col>
                </Row>
            </Form >
        );
    }
}

export default connect(
    (state: ApplicationState) => state.topic,   // Selects which state properties are merged into the component's props
    TopicState.actionCreators                       // Selects which action creators are merged into the component's props
)(SignupForm) as typeof SignupForm;