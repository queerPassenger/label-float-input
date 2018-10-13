# label-float-input 


![Screenshot](/images/img1.png)

![Screenshot](/images/img2.png)

![Screenshot](/images/img3.png)


## install
    npm -i --save label-float-input


## Code
``` jsx

import React from 'react';
import LabelFloatInput from 'label-float-input';
export default class Custom extends React.Component{
    render(){
        return(
            <div className="parent-wrapper">
                <LabelFloatInput  
                    value=""
                    label="Enter your name here"
                    fontSize="16px"
                    fontFamily="monospace"
                />
            </div>
        )
    }
}


