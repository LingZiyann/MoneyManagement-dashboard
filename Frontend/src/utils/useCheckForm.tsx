// import { useState } from 'react';

// const useCheckForm = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (e) => {
//     const newValue = e.target.value;
//     setValue(newValue);
//     setIsValid(validator ? validator(newValue) : true);
//   };

//   return {
//     value,
//     onChange: handleChange,
//     isValid
//   };
// };

// export default useCheckForm;