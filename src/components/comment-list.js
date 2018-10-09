import React, { Component } from 'react';
import Comment from './comment';
import toggleDecorator from '../decorators/toggle'

class CommentList extends Component {

  render() {
     return (
       <div>
         <button onClick={this.commentToggle}>Open Comments</button>

         <h3>Comments:</h3>
         <ul>
           {this.commentItem}
         </ul>
       </div>
     )
  }

  commentToggle() {
    console.log('---click!');
  }

  get commentItem() {
    const { comments, isOpen, toggleOpen} = this.props;

    return comments.map((comment) => (
      <li key={comment.id}>

        <Comment
          comment={comment.text}
          // isOpen={openItemId === comment.id}
          // toggleOpen={toggleOpenItem}
        />

      </li>
    ));
  }
}

export default toggleDecorator(CommentList)