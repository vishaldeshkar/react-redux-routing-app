import React from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../common/TextInput';

const ProductFormComponent = ({ pageText, product, onSave, onChange }) => {
    return (
        <form onSubmit={onSave}>
            <h1 className="text-info">{pageText}</h1>
            <Link to="/products" className="pull-right">Back to List</Link>
            <TextInput name="id" label="Id" value={product.id} readOnly={true} />
            <TextInput name="name" label="Name" value={product.name} onChange={onChange} />
            <TextInput name="description" label="Description" value={product.description} onChange={onChange} />
            <TextInput name="status" label="Status" value={product.status} onChange={onChange} />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Save</button>
            </div>
        </form>
    );
};

export default ProductFormComponent;