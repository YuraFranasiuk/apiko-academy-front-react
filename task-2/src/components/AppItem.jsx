import React from 'react';

import './AppItem.css'

const AppItem = ({ name, description, Image, ...rest }) => (
    <article className={'app-item'}>
        <h1 className={'app-item__name'}>{name}</h1>
        {Image}
        <p className={'app-item__description'}>{description}</p>
    </article>
);

export default AppItem;
