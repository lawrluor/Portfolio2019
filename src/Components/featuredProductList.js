import React from 'react';
import { Row } from 'reactstrap';

import FeaturedProduct from './featuredProduct';

const FeaturedProductList = ({productData}) => {
  const renderedList = productData.map((product) => {
    return(
      <FeaturedProduct
        key={product.desc}
        product={product}
      />
    );
  });

  return(
    <div>
      {renderedList}
    </div>
  );

}

export default FeaturedProductList;
