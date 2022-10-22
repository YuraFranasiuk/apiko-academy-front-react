import React from 'react';

export default function Info({ text }) {
    return (<>
        <h1 style={{
            fontSize: '50px',
            textTransform: 'uppercase',
            textAlign: 'center'
        }}>{text}</h1>
        <br />
    </>);
}
