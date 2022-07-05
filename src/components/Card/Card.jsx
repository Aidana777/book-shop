import clsx from 'clsx'
import { ReactComponent as CheckoutIcon } from '../../icons/checkout.svg'
import { ReactComponent as InstockIcon } from '../../icons/instock.svg'
import css from './card.module.css'
function InStockStatus() {
    return (
        <small className={clsx(css.status , css.instock)}>
            <InstockIcon />
            <span>in stock</span>
        </small>
    )
}

function CheackAvStatus() {
    return (
        <small className={css.status}>
            <CheckoutIcon />
            <span>Check availability</span>
        </small>
    )
}

function Card({ isInStock, title,priceOld,price, image }) {
    <span>in stock</span>

    return (
        <article className={css.card}>
            {isInStock ? <InStockStatus /> : <CheackAvStatus />}

            <img src={image} alt="" className={css.image} />
            <div className="review"></div>
            <h1 className={css.title}>{title}</h1>
            <p className={css.priceOld}>{priceOld}c</p>
            <p className={css.price}>{price}c</p>
        </article>)
}

export default Card