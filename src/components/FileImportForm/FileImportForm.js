import React from "react"
import { Field, reduxForm } from "redux-form"
import CustomInput from "../CustomInput/CustomInput.js"
import { 
    required,
    number,
    minValue,
    maxValue,
    minLength,
    maxLength,
    isSelectedOneFile,
    maxFileSize,
 } from "./inputValidatorsService.js"


import './FileImportForm.css';


const FileImportForm = () => {
    const handleSubmit = (values)=>{
        alert(`Values ${JSON.stringify(values)}`)
    }
      
    return (
        <div className="form-body">
            <div className="form-body-card">
                <h2>Import file form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* Name, min 1 char, max 100 char, required, text */}
                        <Field name="name" type="text" component={CustomInput} label="Name" validate={[required, minLength(1), maxLength(100)]} required />
                    </div>
                    <div>
                        {/* Height, min 0 num, max 500 num, required, int  */}
                        <Field name="height" type="number" component={CustomInput} label="Height" validate={[required, number, minValue(0), maxValue(500)]} required />
                    </div>
                    <div>
                        {/* File, max 10MB*/}
                        <Field name="file" type="file" component={CustomInput} label="File" validate={[isSelectedOneFile, maxFileSize(10)]} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({ form: "file-import"})(FileImportForm);
