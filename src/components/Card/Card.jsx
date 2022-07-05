import './card.css'
import { ReactComponent as CheckoutIcon } from '../../icons/checkout.svg'
import { ReactComponent as InstockIcon } from '../../icons/instock.svg'
function Card({ isInStock }) {

    return (
        <article className="card">

            <small className="card__status--instock">
             {isInStock ? <InstockIcon/> : <CheckoutIcon/>}
                <span>in stock</span>
            </small>
            <img src="./img/The Dead Romantics.jpg" alt="" className="card__img" />
            <div className="review"></div>
            <h1 className="card__title">The Dead Romantics</h1>
            <p className="card__price card__price--old">900c</p>
            <p className="card__price">1200c</p>
        </article>)
}

export default Card