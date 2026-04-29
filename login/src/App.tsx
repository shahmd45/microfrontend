import { useState } from 'react'
import { useAuthStore } from 'shared/store'

import './App.css'

function App() {
    const [name, setName] = useState('')
    const login = useAuthStore(state => state.login)
    const user = useAuthStore(state => state.user)

    return (
        <section className="login__main">
            <h2>Login Module</h2>
            {user ? <p>Signed in as <b>{user}</b></p> : (
                <div>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
                    <button onClick={() => login(name, 'fake-token')}>Sign in</button>
                </div>
            )}
        </section>
    )
}

export default App