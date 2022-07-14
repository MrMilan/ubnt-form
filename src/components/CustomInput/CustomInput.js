import React from "react"
import './CustomInput.css';


const CustomInput = ({input, label, type, required, meta})=>{

   return (
        <div className="custom-input">
            <div className="custom-input-element">
                <label htmlFor={input.name} className={`${required ? "input-required": "input-nonrequired"}`}>
                    {label}
                </label>
                <input 
                    className={`${type==="file" ? "input-hidden": "input-visible"}`}
                    {...input}
                    type={type}
                    id={input.name}
                />
                { type==="file" &&
                    <label htmlFor={input.name}  className="custom-input-file-element">
                        Upload file
                    </label>
                }

            </div>
            <div className="custom-input-info">
                {meta.touched && meta.error && <span className="error-message">{meta.error}</span>}
                {meta.touched && meta.warning && <span className="error-warning">{meta.warning}</span>}
            </div>
        </div>
    );
}

export default CustomInput;
