export default function PageHero({ tag, title, highlight, description }) {
  return (
    <section className="phero">
      <div className="container phero__inner">
        <p className="phero__tag">{tag}</p>
        <h1 className="phero__title">{title} <em>{highlight}</em></h1>
        <p className="phero__desc">{description}</p>
      </div>
    </section>
  )
}
