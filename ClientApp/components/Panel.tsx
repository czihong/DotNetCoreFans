import * as React from 'react';
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { PanelItem } from '../store/TopicListPage';

interface State {
	isOpen: boolean;
}

interface Props {
	panelItemList: PanelItem[];
	panelTitle: string;
}

export class Panel extends React.Component<Props, State> {
	public render() {
		const { panelItemList, panelTitle } = this.props;
		return (
			<ListGroup>
				<ListGroupItem disabled>{ panelTitle }</ListGroupItem>
				{
					panelItemList.map(item =>
						<ListGroupItem disabled tag="a" href={item.link}>
							{item.itemTitle}
						</ListGroupItem>
					)
				}
			</ListGroup>
		);
	}
} 