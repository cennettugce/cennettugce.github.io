import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#fff');

    const handleClick = () => {
        setBackgroundColor('#C8A2C8'); // Lilac color
        setShowConfetti(true);
        alert('Stay sane');
    };

    return (
        <div className="App" style={{ backgroundColor: backgroundColor }}>
            <header className="App-header">
                <h1>Welcome to Stay Sane Webpage</h1>
                <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Click me
                </button>
                {showConfetti && <Confetti />}
            </header>
        </div>
    );
}

export default App;