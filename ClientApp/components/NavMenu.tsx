import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { ApplicationState } from '../store';
// import * as NavMenuStore from '../store/NavMenu';
import { Nav, Navbar, NavLink, NavItem, NavbarBrand, NavbarToggler, Collapse, Button, Container } from 'reactstrap';

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
            <Navbar className="navbar-default navbar-dotnet" fixed="top" light toggleable>
                <Container>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">.Net Core 中文社区</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={'/'}> 首页 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/fetchTopic'} > 社区 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/topic'} > 话题 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/newtopic'} > 发表新话题 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/signup'} > 注册 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/signin'} > 登陆 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/user'} > 用户中心 </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}