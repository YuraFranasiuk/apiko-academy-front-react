import React from 'react';

import Info from './Info';
import Greet from './Greet';
import DataList from './DataList';

import formatUserName from '../utils/format';

export default function App() {
    return (
        <div className={'app'}>
            <Info text={'This test text for homework page'} />
            <Greet firstName={'Sara'} lastName={'Connor'}/>
            <h3>{formatUserName({
                firstName: 'John', lastName: 'Doe'
            })}</h3>
            <DataList
                link={'https://uk.reactjs.org/docs/'}
                picture={{
                    link: 'https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/' +
                          'non-bird-species-illustrations/fox_1200x675.jpg',
                    description: 'fox'
                }}
            />
        </div>
    );
}
