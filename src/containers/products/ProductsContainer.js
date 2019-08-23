import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productActions from '../../actions/productActions';
import ProductListComponent from '../../components/products/ProductListComponent';
import AddProductButton from '../../components/products/AddProductButton';

class ProductsContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <AddProductButton/>
                <ProductListComponent products={this.props.products} onDelete={this.deleteProduct.bind(this)}/>
            </React.Fragment>
        );
    }

    deleteProduct(p, e){
        e.preventDefault();
        this.props.deleteProduct(p);
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.productReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => dispatch(productActions.loadProducts()),
        deleteProduct: (p) => dispatch(productActions.deleteProduct(p))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);