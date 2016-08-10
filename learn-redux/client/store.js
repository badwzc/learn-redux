import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer

import rootReducer from './reducers/index';

// import on object for the default data
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
    posts,
    comments
}

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)