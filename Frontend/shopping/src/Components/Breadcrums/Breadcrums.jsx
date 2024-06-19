/* eslint-disable react/prop-types */
import '../Breadcrums/Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {

    const { product } = props;

    return (
        <div>
            <div className="bread-crums">
                HOME <img src={arrow_icon} alt="Arrow Icon" />
                SHOP <img src={arrow_icon} alt="Arrow Icon" />
                {product.category} <img src={arrow_icon} alt="Arrow Icon" />
                {product.name} <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
    )
}

export default Breadcrums
