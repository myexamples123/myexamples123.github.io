import React from 'react';
import CommentList from './CommentList';
import CommentStore from '../../stores/commentsStore';
import {addComment, fetchComments} from '../../actions/commentsActions';


export default class Comments extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            comments: []
        };

        this.newComment = this.newComment.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }

    newComment()
    {
        let body = 'Новый комментарий';
        let userId = 1;
        let title = 'Заголовок нового комментария';

        addComment({title, userId, body});
    }

    onCommentChange(comments)
    {
        this.setState({
            comments
        });
    }

    componentDidMount()
    {
        fetchComments();
    }

    componentWillMount(){
        CommentStore.on('change', this.onCommentChange);
    }

    componentWillUnmount()
    {
        CommentStore.removeListener('change', this.onCommentChange);

    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={this.newComment}>Добавить комментарий</button>
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}