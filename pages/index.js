import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import StoryList from '../components/StoryList'
import Footer from '../components/Footer'
import More from '../components/More'

const Home = ({ stories, page }) => (
  <Layout
    title='Hacker Next'
    description='A Hacker News clone made with Next.js'
  >
    {stories.length === 0 ? (
      <Error statusCode={503} />
    ) : (
      <>
        <StoryList stories={stories} />
        <More page={page} />
        <Footer />
      </>
    )}
  </Layout>
)

Home.getInitialProps = async ({ req, res, query }) => {
  let stories
  let page
  try {
    page = Number(query.page) || 1
    const res = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    )
    stories = await res.json()
  } catch (err) {
    console.error('Home getInitialProps', err)
    stories = []
  }

  return { stories, page }
}

export default Home
