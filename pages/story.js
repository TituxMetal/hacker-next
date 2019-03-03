import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Story from '../components/Story'
import CommentList from '../components/CommentList'

const StoryPage = ({ story }) => (
  <Layout title={story && story.title} backButton>
    {!story ? (
      <Error statusCode={503} />
    ) : (
      <>
        <main>
          <Story story={story} />
          <CommentList comments={story.comments} />
        </main>
        <Footer />
      </>
    )}
    <style jsx>{`
      main {
        padding: 0 1rem;
      }
    `}</style>
  </Layout>
)

StoryPage.getInitialProps = async ({ req, res, query }) => {
  const storyId = query.id
  let story
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    story = await res.json()
  } catch (err) {
    console.error('StoryPage getInitialProps', err)
    story = null
  }

  return { story }
}

export default StoryPage
