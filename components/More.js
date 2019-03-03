import Link from 'next/link'

const More = ({ page }) => (
  <section>
    <Link href={`/?page=${page + 1}`}>
      <a>Next Page ({page + 1})</a>
    </Link>
    <style jsx>{`
      section {
        padding: 1rem;
      }
      section a {
        font-weight: bold;
        color: #ccc;
        text-decoration: none;
      }
      section a:hover {
        text-decoration: underline;
      }
    `}</style>
  </section>
)

export default More
