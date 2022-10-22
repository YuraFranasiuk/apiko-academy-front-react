import React from "react";

export default function DataList({ link, picture }) {
    return (
        <>
            <p className={'list-title'}>Here we have the list:</p>
            <ul>
                <li tabIndex='_1'>Just text here</li>
                <li>
                    <span>Here we have text and link!</span>
                    <a className={'link'}
                       href={link}
                       target="_blank"
                    >
                        It is link to our docs
                    </a>
                </li>
                <li>
                    <span>And the picture!!!</span>
                    <img className={'picture'}
                         src={picture.link}
                         alt={picture.description}
                         width="300"
                    ></img>
                </li>
            </ul>
        </>
    );
}
