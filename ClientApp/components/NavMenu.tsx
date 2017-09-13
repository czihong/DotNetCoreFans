import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='row'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>.Net  Core 中文社区</Link>
                </div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> 首页
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchTopic' } activeClassName='active'>
                                <span className='glyphicon glyphicon-comment'></span> 社区
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/topic' } activeClassName='active'>
                                <span className='glyphicon glyphicon-comment'></span> 话题
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/topic' } activeClassName='active'>
                                <span className='glyphicon glyphicon-comment'></span> 发表新话题
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/signup' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> 注册
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> 登陆
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </div>;
    }
}
