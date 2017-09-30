import * as React from 'react';
import { Row, Col, Card, CardImg, CardBlock, CardTitle, CardText, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { TopicCard } from './TopicCard';
import { Topic, TopicList } from './TopicList';

export class TopicListPage extends React.Component<{}, {}> {
	public render() {
        let topic : Topic = {
            id: 1,
            category: "category",
            title: "title",
            content: "content",
            createTime: "2017-9-30",
            isLock: false,
            isRecommand: false,
            isTop: false,
        };

        let topic1 : Topic = {
            id: 1,
            category: "category",
            title: "title",
            content: "content",
            createTime: "2017-9-30",
            isLock: false,
            isRecommand: false,
            isTop: false,
        };

        let topics = new Array<Topic>();
        topics.push(topic);
        topics.push(topic1);

		return (
            <TopicList topicList={topics}/>
		);
	}
}