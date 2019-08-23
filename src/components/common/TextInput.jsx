import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, readOnly }) => (
    <div className="form-group">
        <label htmlFor={name} className="control-label">{label}</label>
        <input type="text"
            name={name} id={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly} />
    </div>
);

export default TextInput;