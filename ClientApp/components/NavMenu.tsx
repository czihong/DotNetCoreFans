import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { ApplicationState } from '../store';
// import * as NavMenuStore from '../store/NavMenu';
import { Nav, Navbar, Link, NavItem, NavbarBrand, NavbarToggler, Collapse, Button, Container } from 'reactstrap';

// type NavMenuProps =
//     NavMenuStore.NavMenuState
//     & typeof NavMenuStore.actionCreators
//     & RouteComponentProps<{}>;

interface State {
    isOpen: boolean;
}

interface Props {

}

export class NavMenu extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <Navbar className="navbar-dotnet" fixed="top" light toggleable>
                <Container>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">.Net Core 中文社区</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={'/'}> 首页 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/fetchTopic'} > 社区 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/topic'} > 话题 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/newtopic'} > 发表新话题 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/signup'} > 注册 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/signin'} > 登陆 </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={'/user'} > 用户中心 </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}