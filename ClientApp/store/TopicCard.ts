import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface TopicCardState {
	topicCard: TopicCard[]; 
}

export interface TopicCard {
	id: number;
	category: string;
	title: string;
	content?: string;
	createTime: string;
	isLock?: boolean;
	isRecommand?: boolean;
	isTop?: boolean;
}