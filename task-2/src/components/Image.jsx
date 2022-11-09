import React from 'react';

import './Image.css'

const Image = ({ imgUrl, ...rest }) => (
    <img className={'image'}
         src={imgUrl}
         width={'400'}
         height={'500'} />
);

export default Image;
