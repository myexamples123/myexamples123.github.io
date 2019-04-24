import React from 'react';
import Comment from './Comment';


export default class CommentList extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        if(!this.props.comments.length){
            return null;
        }

        let comments = this.props.comments.map((comment, index) => {
            return <Comment
                key={index}
                {...comment}
            />
        });

        return (
            <div className="panel panel-default">
                {comments}
            </div>
        );
    }
}