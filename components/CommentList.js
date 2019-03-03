import Comment from './Comment'

const CommentList = ({ comments }) => (
  <section>
    {comments.length > 0 ? (
      <>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    ) : (
      <p>No comments for this story!</p>
    )}
    <style jsx>{`
      section {
        padding: 1rem 0;
      }
    `}</style>
  </section>
)

export default CommentList
