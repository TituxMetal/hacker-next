import Link from 'next/link'

const Story = ({ id, title, url, points, commentsCount, timeAgo, user }) => (
  <section className='story' key={id}>
    <h2 className='story-title'>
      <a href={url} title={title} target='_blank'>
        {title}
      </a>
    </h2>
    <article className='story-details'>
      <span>
        Posted {timeAgo} by {user}
      </span>
      <span>
        {points || 0} point{points > 1 ? 's' : ''}
      </span>
      <Link href={`/story?id=${id}`}>
        <a>
          {commentsCount} comment
          {commentsCount > 1 ? 's' : ''}
        </a>
      </Link>
    </article>
    <style jsx>{`
      .story {
        padding: 1rem 0;
      }
      .story-title {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5rem;
      }
      .story-title a {
        color: #ccc;
        text-decoration: none;
      }
      .story-title a:hover,
      .story-details a:hover {
        text-decoration: underline;
      }
      .story-details {
        color: #aaa;
        font-size: 0.8rem;
        font-weight: bold;
      }
      .story-details span {
        margin-right: 1rem;
      }
      .story-details a {
        color: #aaa;
        text-decoration: none;
      }
    `}</style>
  </section>
)

export default Story
