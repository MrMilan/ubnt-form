const required = (value) => {
    if(value==null || value==="")
    {
        return "Field is required";
    }
    return undefined;
};

const number = (value) => value && isNaN(Number(value)) ? 'Field must take only number' : undefined;

const minValue = min => value =>  value && value < min ? `Number must be at least ${min}` : undefined;

const maxValue = max => value =>  value && value > max ? `Number must be less then ${max}` : undefined;

const minLength = min => value =>  value && value.length < min ? `Text must have min ${min} characters` : undefined;

const maxLength = max => value =>  value && value.length >= max ? `Text must have max ${max} characters or less` : undefined;

const isSelectedOneFile = (event) => event && event.target && event.target.files.length < 2 ? `Select only one file` : undefined;

const maxFileSize = max => event => {
    // value is in bytes in browser (1MB = 1048576 bytes)
    const maxBytes = max && isNaN(Number(max)) ? 10 * 1048576 : Number(max) * 1048576 ;
    if (event && event.target && event.target.files[0].size <= maxBytes)
    {
        return `File max size is ${maxBytes}MB`;
    }
    return undefined;
  };

export { required, number, minValue, maxValue, minLength, maxLength, isSelectedOneFile, maxFileSize };