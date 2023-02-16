import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {name: '', review: '', reviewsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeReview = event => {
    this.setState({review: event.target.value})
  }

  onAddComment = () => {
    const {name, review} = this.state
    const newReview = {
      id: uuidv4(),
      name,
      review,
      isLiked: false,
    }

    this.setState(prevState => ({
      reviewsList: [...prevState.reviewsList, newReview],
      name: '',
      review: '',
    }))
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      reviewsList: prevState.reviewsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteReview = id => {
    const {reviewsList} = this.state
    const filteredReviews = reviewsList.filter(each => each.id !== id)
    this.setState({reviewsList: filteredReviews})
  }

  render() {
    const {name, review, reviewsList} = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form className="form">
              <input
                className="input-search"
                value={name}
                onChange={this.onChangeName}
                type="search"
                placeholder=" Your Name"
              />
              <textarea
                className="input-textarea"
                value={review}
                onChange={this.onChangeReview}
                rows="5"
                cols="20"
                placeholder="Your Comment"
              />
              <button
                onClick={this.onAddComment}
                type="button"
                className="button"
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="comments-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <hr className="hr-line" />

        <div className="count-container">
          <p className="count">{reviewsList.length}</p>
          <p>Comments</p>
        </div>

        <ul className="ul">
          {reviewsList.map(each => (
            <CommentItem
              commentItemDetails={each}
              key={each.id}
              toggleIsLike={this.toggleIsLike}
              deleteReview={this.deleteReview}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
