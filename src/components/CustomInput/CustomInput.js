import React, { useRef } from "react"
import './CustomInput.css';


const CustomInput = ({input, label, type, required, meta})=>{

    const customInputRef = useRef();
 
    const handleClickToUpload = () => {
        customInputRef.current.click();
    };

    const handleOnChange = (event) => {
        event.preventDefault();
        let fileData = event.target.files[0];
        if (fileData) {
            // dispatch(change('file',fileData))
        }
      };
    
    return (
        <div className="custom-input">
            <div className="custom-input-element">
                <label className={`${required ? "input-required": "input-nonrequired"}`}>{label}</label>
                {   type!=="file" && 
                    <input 
                        {...input}
                        type={type}
                        />
                }
                {   type==="file" &&
                    <>
                        <input 
                            className={`${type==="file" ? "input-hidden": "input-visible"}`}
                            {...input}
                            type={type}
                            ref={customInputRef}
                            onChange={event => handleOnChange(event, input)}
                            />
                        <button className="custom-input-file-element" onClick={handleClickToUpload}>
                            Upload file
                        </button>
                    </>
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
