import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../components/Context'

export default function ProductDetails() {
    const userData = useContext(Context)
    const params = useParams()
    let productData = null

    //database lookup using id
    //if (params.id === '123'){
        //productData = {
            //name: 'necklaces',
            //price: 50.00,
            //image: require('../assets/images/image7.jpg'),
        //}
    //}

    switch (params.id) {
        case "123":
            productData = {
                name: 'Necklaces',
                price: 50.00,
                image: require('../assets/images/image6.jpeg')
            }
            break
        
        case "456":
            productData = {
                name: 'Bracelets',
                price: 25.00,
                image: require('../assets/images/image3.jpeg')
            }
            break
        
        default:
            break
    }

    return (
        <>
            <h1>Product Details</h1>
            <p>The product ID is {params.id}</p>
            <p>Cart Items: {userData.cartItems}</p>
            {
                productData != null ?
                <>
                    <img src={productData.image} alt={productData.name} width="400" />
                    <h2>{productData.name} - ${productData.price}</h2>
                </>
                : ''
            }
        </>
    )
}