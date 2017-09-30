import * as React from 'react';
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Topic } from '../store/TopicListPage';

interface State {
	isOpen: boolean;
}

interface Props {
	topicList: Topic[];
}

export class TopicList extends React.Component<Props, State> {
	public render() {
		const { topicList } = this.props;
		return (
			<ListGroup>
				{
					topicList.map(topic =>
						<Col sm="9">
							<ListGroupItem>
								<img className="list-group-item-image" src="https://l.ruby-china.org/user/avatar/14698/036fd5.jpg" />
								<Col>
									<ListGroupItemHeading>{topic.title}</ListGroupItemHeading>
									<ListGroupItemText>{topic.content}</ListGroupItemText>
								</Col>
							</ListGroupItem>
						</Col>
					)
				}
			</ListGroup>
		);
	}
}