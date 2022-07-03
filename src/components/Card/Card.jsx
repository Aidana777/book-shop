import './card.css'

function Card() {
    return (
        <article className="card">
            <small className="card__status">in stock</small>
            <img src="/img/The Dead Romantics.jpg" alt="" className="card__img" />
            <div className="review"></div>
            <h1 className="card__title">The Dead Romantics</h1>
            <p className="card__price card__price--old">700c</p>
            <p className="card__price">500c</p>
        </article>)
}

export default Card