import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

const API_URL = process.env.REACT_APP_API_HOST === undefined ? 'http://localhost:3001' : process.env.REACT_APP_API_HOST;

function App() {

    const [status, setStatus] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/api/status`).then(async (res) => {
            setStatus((await res.json()));
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Status from API: {status.message}
                </p>
                <p>
                    API is located under http://localhost:3001/api
                </p>
            </header>
        </div>
    );
}

export default App;
