console.log('Hello World');

import preact from 'preact';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World2');
    preact.render(
        <Counter />,
        document.getElementById('mount')
    );
});

