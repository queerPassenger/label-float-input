# label-float-input 


![Screenshot](/images/img1.png)

![Screenshot](/images/img2.png)

![Screenshot](/images/img3.png)
``` jsx

import React from 'react';

export default class Custom extends React.Component{
    render(){
        return(
            <div className="parent-wrapper">
                <LabelFloatInput  
                    initialValue=""
                    label="Enter your name here"
                    fontSize="16px"
                    fontFamily="monospace"
                />
            </div>
        )
    }
}


