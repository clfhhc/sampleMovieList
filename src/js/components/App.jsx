// src/js/components/App.jsx

import React from 'react';
import List from './List.jsx';

const App = () => (
    <div>
        <nav>
            <h1>MovieList</h1>
        </nav>
        {/* <div>
            <Search />
        </div> */}
        <div>
            <List />
        </div>
    </div>
);

export default App;