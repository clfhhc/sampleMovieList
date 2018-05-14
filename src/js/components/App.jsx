// src/js/components/App.jsx

import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';


const App = () => (
    <div>
        <nav>
            <h1>MovieList</h1>
        </nav>
        <div>
            <Search className="filter-form" purpose="filter" buttonText="Go"/>
        </div>
        <div>
            <List />
        </div>
    </div>
);

export default App;