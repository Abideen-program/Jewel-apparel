import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import Button from '../button/button.component'

import './product-card.styles.scss'
// products: {}
const ProductCard = ({ product }) => {
    const {name, imageUrl, price} = product

    const { addItemToCart } = useContext(CartContext)

    const addToCart = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />

            <div className="product-card-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={addToCart}>Add To Cart</Button>
        </div>
    );
}

export default ProductCard