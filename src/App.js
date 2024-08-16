import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [headerText, setHeaderText] = useState(['Welcome to Stay Sane Webpage']);
    const [showKitten, setShowKitten] = useState(false);
    const [pleaseCount, setPleaseCount] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setBackgroundColor('#C8A2C8'); // Lilac color
        setShowConfetti(true);
        setShowKitten(true);
        setPleaseCount(prevCount => prevCount + 1);
        const newText = 'Please '.repeat(pleaseCount) + 'Stay Sane';
        setHeaderText(newText);
        setButtonClicked(true);
    };

    return (
        <div className="App" style={{ backgroundColor: backgroundColor }}>
            <header className="App-header">
                <h1>{headerText}</h1>
                {showConfetti && <Confetti />}
                {showKitten && (
                    <img
                        src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                        alt="Begging Kitten"
                        style={{ marginTop: '20px', width: '300px', height: 'auto' }}
                    />
                )}
                <div style={{ marginTop: '20px' }}>
                {buttonClicked && (
                    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Click me
                    </button>
                )}
                {!buttonClicked && (
                    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Click me
                    </button>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
