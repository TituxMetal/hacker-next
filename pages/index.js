import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import StoryList from '../components/StoryList'

const Home = ({ stories }) => (
  <Layout
    title='Hacker Next'
    description='A Hacker News clone made with Next.js'
  >
    {stories.length === 0 ? (
      <Error statusCode={503} />
    ) : (
      <div>
        <StoryList stories={stories} />
      </div>
    )}
  </Layout>
)

Home.getInitialProps = async () => {
  let stories
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
    stories = await res.json()
  } catch (err) {
    console.error('Home getInitialProps', err)
    stories = []
  }

  return { stories }
}

export default Home
