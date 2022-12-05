import React from 'react';
import ProductItem from './ProductItem';

import './ProductList.css';

const ProductList = props => {
    return (
        <div class="container">
            <div class="row">
                {props.productInfo.map(info => (
                    <ProductItem
                        productImg={info.thumbImg}
                        productTitle={info.title}
                        productPrice={info.price}
                        productDetails={info.detail}
                    />
                ))}
            </div>
        </div>
    );
};

// const CourseGoalList = props => {
//     return (
//       <ul className="goal-list">
//         {props.items.map(goal => (
//           <CourseGoalItem
//             key={goal.id}
//             id={goal.id}
//             onDelete={props.onDeleteItem}
//           >
//             {goal.text}
//           </CourseGoalItem>
//         ))}
//       </ul>
//     );
//   };

export default ProductList;
