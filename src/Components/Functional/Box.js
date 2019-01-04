import React from 'react';

const Box = (props) => {
    return <div onClick={props.onclick} color={props.color} style={{ background: props.color, border: '2px solid black', textAlign: 'center' }} className='col-sm-1 col-md-1 col-lg-1 col-xl-1'>{props.text}</div>
};

export default Box;