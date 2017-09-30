import * as React from 'react';
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

interface State {
	isOpen: boolean;
}

interface Props {
	topicList: Topic[];
}

export interface Topic {
	id: number;
	category: string;
	title: string;
	content: string;
	createTime: string;
	isLock: boolean;
	isRecommand: boolean;
	isTop: boolean;
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
									<ListGroupItemHeading>{topic.title} 这里是一个标题</ListGroupItemHeading>
									<ListGroupItemText>{topic.content} 这里是文字的标识</ListGroupItemText>
								</Col>
							</ListGroupItem>
						</Col>
					)
				}
			</ListGroup>
		);
	}
}