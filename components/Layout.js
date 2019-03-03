import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children, title, description }) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link href='//fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
    </Head>
    <div className='container'>
      <nav>
        <Link href='/'>
          <a>
            <span className='main-title'>Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #505050;
      }
      nav {
        background: #f60;
        padding: 1rem;
      }
      nav > * {
        display: inline-block;
        color: #333;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #202020;
        color: lightgrey;
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 0;
      }
      a {
        color: #f60;
      }
    `}</style>
  </main>
)

export default Layout
