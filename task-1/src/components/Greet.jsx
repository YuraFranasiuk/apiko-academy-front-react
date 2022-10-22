import React from 'react';

import formatUserName from '../utils/format';

export default function Greet({ firstName, lastName }) {
    return (<><h2>{formatUserName({ firstName, lastName })}</h2><br /></>);
}
