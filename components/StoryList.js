import Story from './Story'

const StoryList = ({ stories }) => (
  <div className='story-list'>
    {stories.map(story => (
      <Story key={story.id} story={story} />
    ))}
    <style jsx>{`
      .story-list {
        padding: 0 1rem;
      }
    `}</style>
  </div>
)

export default StoryList
