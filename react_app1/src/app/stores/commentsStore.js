import {
    ADD_COMMENT,
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_END
} from '../constants/commentsConstants';

import dispatcher from '../dispatcher';
import axios from 'axios';

import { EventEmitter } from 'events';

class CommentsStore extends EventEmitter {
    constructor()
    {
        super(...arguments);

        this.comments = [];

        this.fetchCommentsStart = this.fetchCommentsStart.bind(this);
        this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
        this.change = this.change.bind(this);
        this.getComments = this.getComments.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchCommentsStart(){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
            let { data } = response;

            dispatcher.dispatch(
                {
                    type: FETCH_COMMENTS_END,
                    payload: data
                }
            );
            });
    }

    fetchCommentsEnd(comments)
    {
        this.comments = comments;
        this.change();
    }

    change()
    {
        this.emit('change', this.comments);
    }

    getComments()
    {
        return this.comments;
    }

    addComment(comment)
    {
        this.comments.push(comment);
        this.change();
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_COMMENT:
            {
                this.addComment(action.payload);
                break;
            }
            case FETCH_COMMENTS_START:
            {
                this.fetchCommentsStart();
                break;
            }
            case FETCH_COMMENTS_END:
            {
                this.fetchCommentsEnd(action.payload);
                break;
            }
        }
    }
}

const commentsStore = new CommentsStore;

dispatcher.register(commentsStore.handleActions);

export default commentsStore;