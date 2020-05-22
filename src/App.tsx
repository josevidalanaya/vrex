import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Title } from './components'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title level='h3'>Edit <code>src/App.tsx</code> and save to reload.</Title>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
        </div>
    );
}

export default App
