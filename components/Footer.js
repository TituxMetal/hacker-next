const Footer = () => (
  <footer>
    <section>
      <p>Hacker Next is made with love by TuxiMetal!</p>
      <a target='_blank' href='https://github.com/TituxMetal' title='Fork Me'>
        Fork Me
      </a>
      |
      <a
        target='_blank'
        href='https://portfolio.lang-guillaume.com'
        title='Hire Me'
      >
        Hire Me
      </a>
    </section>
    <style jsx>{`
      footer {
        border-top: 1px solid #f60;
        color: #aaa;
      }
      footer section {
        padding: 1rem 0;
        text-align: center;
      }
      footer section p {
        margin: 0;
        padding-bottom: 1rem;
      }
      footer section a {
        color: #aaa;
        padding: 0 0.5rem;
        text-decoration: none;
      }
      footer section a:hover {
        text-decoration: underline;
      }
    `}</style>
  </footer>
)

export default Footer
