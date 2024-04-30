import React from 'react';
import EightBall from '../renderball/src/Eightball';

function App(){
    const answers = [
        {msg: 'Its is certain.', color: 'green'},
        {msg: 'its is decidedly so.', color: 'green'},
    ];

    return (
        <div className='App'>
            <EightBall answers={answers}/>
            </div>
    );
}

export default App;