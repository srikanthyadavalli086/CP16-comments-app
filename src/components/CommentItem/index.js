import './index.css'

const CommentItem = props => {
  const {commentItemDetails, toggleIsLike, deleteReview} = props
  const {id, name, review, isLiked} = commentItemDetails

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeIcon = () => {
    toggleIsLike(id)
  }

  const onClickDelete = () => {
    deleteReview(id)
  }

  return (
    <li className="li">
      <div className="bottom-review-container">
        <p className="profile">{name[0]}</p>
        <div className="review-container">
          <p className="name">{name}</p>
          <p>2 Minutes Ago</p>
          <p className="review">{review}</p>
        </div>
      </div>

      <div className="icons-container">
        <button
          className="icons"
          onClick={onClickLikeIcon}
          type="button"
          data-testid="delete"
        >
          <img src={likeImageUrl} alt="like" />
        </button>
        <button className="icons" onClick={onClickDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
