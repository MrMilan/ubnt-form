import React from "react"
import './CustomInput.css';


const CustomInput = ({input, label, type, required, meta})=>(
    <div className="custom-input">
        <label className={`${required ? "input-required": "input-nonrequired"}`}>{label}</label>
        <input {...input} type={type}/>
        {meta.touched && meta.error && <span className="error-message">{meta.error}</span>}
    </div>
)

export default CustomInput;
