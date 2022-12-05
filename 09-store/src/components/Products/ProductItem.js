import React from 'react';

import './ProductItem.css';

const ProductItem = props => {
    return (
        <div className="col-3">
            <div className="card h-100">
                <a href="#">
                    <img
                        src={props.productImg}
                        className="card-img-top"
                        alt="Product"
                    />
                </a>
                <div className="card-body px-2 pb-2 pt-1">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="h4 text-primary">{props.productPrice}</p>
                        </div>
                    </div>
                    <p className="mb-0">
                        <strong>
                            <a href="#" className="text-secondary">
                                {props.productTitle}
                            </a>
                        </strong>
                    </p>
                    <p className="mb-1">
                        <small>
                            {props.productDetails}
                        </small>
                    </p>
                  
                    <div className="d-flex justify-content-between">
                        <div className="col px-0">
                            <button className="btn btn-outline-primary btn-block">
                                Add To Cart
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
