import React from 'react';
import './App.css';

function App() {
    const handleClick = () => {
        alert('Stay sane');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Psikiatrist Webpage</h1>
                <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Click me
                </button>
            </header>
        </div>
    );
}

export default App;