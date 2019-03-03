import Link from 'next/link'

const Footer = ({ page }) => (
  <footer>
    <section>
      <Link href={`/?page=${page + 1}`}>
        <a>Next Page ({page + 1})</a>
      </Link>
    </section>
    <div>
      <p>Hacker Next is made with love by TuxiMetal!</p>
      <a href='https://github.com' title='Fork Me'>
        Fork Me
      </a>
      <a href='https://portfolio.lang-guillaume.com' title='Hire Me'>
        Hire Me
      </a>
    </div>
    <style jsx>{`
      footer {
        color: #aaa;
      }
      footer section {
        border-bottom: 2px solid orange;
        padding: 1rem;
      }
      footer section a {
        font-weight: bold;
        color: #ccc;
        text-decoration: none;
      }
      footer section a:hover {
        text-decoration: underline;
      }
      footer div {
        padding: 1rem;
        text-align: center;
      }
      footer div a {
        color: #aaa;
        padding: 0.5rem;
        text-decoration: none;
      }
      footer div a:hover {
        text-decoration: underline;
      }
    `}</style>
  </footer>
)

export default Footer
