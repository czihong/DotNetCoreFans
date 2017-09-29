import * as React from 'react';
import { Row, Col, Card, CardImg, CardBlock, CardTitle, CardText, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export class TopicCard extends React.Component<{}, {}> {
	public render() {
		return (
			<Col sm="9">
				<ListGroupItem>
					<img src="https://l.ruby-china.org/user/avatar/14698/036fd5.jpg" />
					<ListGroupItemHeading>这里是一个标题</ListGroupItemHeading>
					<ListGroupItemText>这里是文字的标识</ListGroupItemText>
				</ListGroupItem>
			</Col>
		);
	}
}