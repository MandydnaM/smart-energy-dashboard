import './product.scss'
import Singel from "../../components/single/Singel"
import { singleProduct } from '../../data'

function Product() {
    return (
        <div className='product'>
            <Singel {...singleProduct} />
        </div>
    )
}

export default Product