import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends React.Component<{}, {}> {
	public render() {
		return (
			<div>
				<Container>
					<NavMenu />
				</Container>
				<Container className="container-body-dotnet">
					{this.props.children}
				</Container>
				<Container className="container-footer-dotnet">
					<Footer />
				</Container>
			</div>
		);
	}
}
