import * as actionTypes from './actionTypes';
import productsAPIClient from '../services/product.service';

function loadProductsSuccess(products) {
    return {
        type: actionTypes.LOAD_PRODUCTS_SUCCESS,
        payload: products
    };
}

function insertProductSuccess(product) {
    return {
        type: actionTypes.INSERT_PRODUCT_SUCCESS,
        payload: product
    };
}

function updateProductSuccess(product) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: product
    };
}

function deleteProductSuccess(product) {
    return {
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        payload: product
    };
}

export function loadProducts() {
    return function (dispatch) {
        productsAPIClient.getAllProducts().then((products) => {
            dispatch(loadProductsSuccess(products));
        }, (eMsg) => {
            console.error(eMsg);
        })
    }
}

export function insertProduct(product) {
    return function (dispatch) {
        productsAPIClient.insertProduct(product).then((insertedProduct) => {
            dispatch(insertProductSuccess(insertedProduct));
        }, (eMsg) => {
            console.error(eMsg);
        })
    }
}

export function updateProduct(product) {
    return function (dispatch) {
        productsAPIClient.updateProduct(product).then((updatedProduct) => {
            dispatch(updateProductSuccess(updatedProduct));
        }, (eMsg) => {
            console.error(eMsg);
        })
    }
}

export function deleteProduct(product) {
    return function (dispatch) {
        productsAPIClient.deleteProduct(product).then(() => {
            dispatch(deleteProductSuccess(product));
        }, (eMsg) => {
            console.error(eMsg);
        })
    }
}