import React from 'react';

import { CustomButtonContainer } from './custom-button.styles'


const CustomButton = ({children, ...props}) => {
  console.log("props: ", props);
    return (
      <CustomButtonContainer {...props} >
        {children}
      </CustomButtonContainer> 
    );
};

export default CustomButton;