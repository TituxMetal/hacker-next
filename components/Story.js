import Link from 'next/link'

const Story = ({ story }) => (
  <>
    <section className='story' key={story.id}>
      <h2 className='story-title'>
        <a href={story.url} title={story.title} target='_blank'>
          {story.title}
        </a>
      </h2>
      <article className='story-details'>
        <span>
          Posted {story.time_ago} by {story.user}
        </span>
        <span>
          {story.points || 0} point{story.points > 1 ? 's' : ''}
        </span>
        {story.comments ? (
          <span>
            {story.comments_count} comment
            {story.comments_count > 1 ? 's' : ''}
          </span>
        ) : (
          <Link href={`/story?id=${story.id}`}>
            <a>
              {story.comments_count} comment
              {story.comments_count > 1 ? 's' : ''}
            </a>
          </Link>
        )}
      </article>
    </section>
    <style jsx>{`
      .story {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
        margin-left: 0.5rem;
      }
      .story-details span {
        margin-right: 1rem;
      }
      .story-details a {
        color: #aaa;
        text-decoration: none;
      }
    `}</style>
  </>
)

export default Story
