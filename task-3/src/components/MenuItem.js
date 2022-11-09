import React from 'react';

import './MenuItem.css'

const MenuItem = ({ title, link=null }) => {
    return link === null ? (
        <div className={'MenuItem'} onClick={
            () => alert('This page is under construction yet')
        }> {title} </div>
    ) : (
        <a className={'MenuItem'} href={link} target={'_blank'} onClick={
            () => console.log(title)
        }> {title} </a>
    );
};

export default MenuItem;
