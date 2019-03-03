import Story from './Story'

const StoryList = ({ stories }) => (
  <div className='story-list'>
    {stories.map(story => (
      <Story
        key={story.id}
        id={story.id}
        title={story.title}
        url={story.url}
        commentsCount={story.comments_count}
        points={story.points}
        timeAgo={story.time_ago}
        user={story.user}
      />
    ))}
    <style jsx>{`
      .story-list {
        padding: 0 1rem;
      }
    `}</style>
  </div>
)

export default StoryList
