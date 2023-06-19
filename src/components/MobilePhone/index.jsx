import React from 'react';
// import MuiPhoneNumber from 'material-ui-phone-number'

import PhoneInput from 'react-phone-input-2';
import './style.css';

const Input = (props) => {
  return (
    <>
      <PhoneInput
        specialLabel={''}
        country={'th'}
        inputStyle={{
          borderColor: (props.touched && props.error) && "red"
        }}
        {...props}
      />
      {(props.touched && props.error) && <p style={{ color: 'red' }}
                                            className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p>}
    </>
  );
};

const index = (props) => {
  return (
    <Input
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  )
}

export default index;
