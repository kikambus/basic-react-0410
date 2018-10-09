import React, { PureComponent } from 'react'
import CommentList from './comment-list';

class Article extends PureComponent {
  render() {
    //console.log('---', 'rendering article')
    const { article, isOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {this.body}
      </div>
    )
  }

  setTitleRef = (ref) => {
    //console.log('---', 'article title', ref)
  }

  onButtonClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    
    console.log('---1', article.comments);
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments}/>
      </section>
    )
  }
}

export default Article
