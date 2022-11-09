import React from 'react';

import AppWrapper from './components/AppWrapper';
import AppItem from './components/AppItem';

import Image from './components/Image';

import { turtles } from './constants';
import { getItemDescription } from './utils';

const App = () => {
    const turtlesList = turtles.map(turtle => {
        const props = {
            name: turtle.name,
            Image: <Image imgUrl={turtle.imgUrl}/>,
            description: getItemDescription({
                nickName: turtle.name,
                weapon: turtle.weapon
            })
        }

        return <AppItem key={turtle.name} {...props} />;
    });

    return (
        <AppWrapper title={'React Turtles'}>
            <>{turtlesList}</>
        </AppWrapper>
    );
};

export default App;
