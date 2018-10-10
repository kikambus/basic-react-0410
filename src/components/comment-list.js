import React, { Component } from 'react';
import Comment from './comment';
import toggleDecorator from '../decorators/toggle'

class CommentList extends Component {
  state = {
    isOpen: false
  };

  render() {
     const text = this.state.isOpen ? 'Close comments' : 'Open comments';
     const commentBody = this.state.isOpen ? <ul>{this.commentItem}</ul> : '';

     return (
       <div>
           <h3>Comments: <button onClick={this.commentToggle}>{text}</button></h3>

           {commentBody}
       </div>
     )
  }

  commentToggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  get commentItem() {
    const { comments, isOpen, toggleOpen} = this.props;

    return comments.map((comment) => (
      <li key={comment.id}>

        <Comment
          comment={comment.text}
          //isOpen={openItemId === comment.id}
          // toggleOpen={toggleOpenItem}
        />

      </li>
    ));
  }
}

export default toggleDecorator(CommentList)