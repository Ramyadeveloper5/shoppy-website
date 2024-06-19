/* eslint-disable react/prop-types */
import '../Item/Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

  console.log(props.image,"Item Data")
  
  return (
    <div>
      <div>
      </div>
      <div className="items">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.productImage} alt="Popular Image" /></Link>
        <p>{props.productName}</p>
      </div> 
      {/* Item Prices */}
      <div className="item-prices">
        {/* Prices New */}
        <div className="item-new_price">
            ${props.new_price}
        </div>
        {/* Prices Old */}
        <div className="item-old_price">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
};

export default Item;
