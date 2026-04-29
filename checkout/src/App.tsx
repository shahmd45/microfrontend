import { useState } from 'react';
import { BMToken } from './hooks/Token';
import Page from './components/Page'
import './App.css'

function App() {

    const [bmToken, setBMToken] = useState(false);
    return (
        <>
            <BMToken setBMToken={setBMToken} />
            {bmToken && <Page />}
        </>
    )
}

export default App