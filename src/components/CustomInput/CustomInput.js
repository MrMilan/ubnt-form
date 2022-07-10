import React, {useRef} from "react"
import './CustomInput.css';


const CustomInput = ({input, label, type, required, meta})=>{

    const customInputRef = useRef();

    const hancleClickToUpload = () => {
        customInputRef.current.click();
    };
    
    return (
        <div className="custom-input">
            <div className="custom-input-element">
                <label className={`${required ? "input-required": "input-nonrequired"}`}>{label}</label>
                <input 
                    className={`${type==="file" ? "input-hidden": "input-visible"}`}
                    {...input}
                    type={type}
                    ref={customInputRef}
                    />
                {   type==="file" &&
                    <button className="custom-input-file-element" onClick={hancleClickToUpload}>
                        Upload file
                    </button>
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
