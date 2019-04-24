import dispatcher from '../dispatcher';
import {ADD_COMMENT, FETCH_COMMENTS_START} from '../constants/commentsConstants';

export function addComment({title, userId, body}) {
    const comment = {title, userId, body};

    dispatcher.dispatch({
        type: ADD_COMMENT,
        payload: comment
    });
}

export function fetchComments() {
    dispatcher.dispatch({
        type: FETCH_COMMENTS_START
    });
}