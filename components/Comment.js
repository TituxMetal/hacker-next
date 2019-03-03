const Comment = ({ comment }) => (
  <div className='comment'>
    <div className='comment-user'>
      {comment.user}{' '}
      {comment.comments.length > 0 && (
        <small>
          + {comment.comments.length} more comment
          {comment.comments.length > 1 && 's'}
        </small>
      )}
    </div>
    <div
      className='comment-content'
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {comment.comments && (
      <div className='nested-comments'>
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    )}
    <style jsx>{`
      .comment {
        margin-bottom: 1.5rem;
      }
      .comment-user {
        color: #aaa;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .comment-user small {
        font-weight: 300;
      }
      .comment-content {
        font-size: 1rem;
      }
      .comment-content :global(p) {
        margin: 0;
        margin-bottom: 0.5rem;
        word-wrap: break-word;
      }
      .comment-content a {
        color: #f60;
        text-decoration: underline;
      }
      .comment-content :global(pre) {
        max-width: 100%;
        overflow: scroll;
      }
      .nested-comments {
        margin-top: 1rem;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        padding-left: 1rem;
      }
    `}</style>
  </div>
)

export default Comment
