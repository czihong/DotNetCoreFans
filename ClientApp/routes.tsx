import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import FetchTopic from './components/FetchTopic';
import Topic from './components/Topic';
import SignupForm from './components/SignupForm';
import SigninPage from './components/SigninPage';
import UserPage from './components/UserPage';
import NewTopicPage from './components/NewTopicPage';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/fetchtopic/:page?' component={ FetchTopic } />
    <Route path='/topic/:topicId?' component={ Topic } />
    <Route path='/newtopic' component={ NewTopicPage } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
    <Route path='/signup' component={ SignupForm } />
    <Route path='/signin' component={ SigninPage } />
    <Route path='/user' component={ UserPage } />
    <Route path='*' component={ Home } />
</Layout>;
