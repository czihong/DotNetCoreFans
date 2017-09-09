import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='container'>
                <nav className='navbar navbar-default navbar-fixed-top'>
                    <div className='container'> <NavMenu /></div>
                </nav>
            </div>
            <div className='container'>
                {this.props.children}
            </div>
        </div>;
    }
}
