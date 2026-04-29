
import { useAuthStore } from 'shared/store'
import './App.css';

function App() {
    const user = useAuthStore(state => state.user)

    return (
        <section className="cart__container">
            <h2>Cart Module</h2>
            {user ? <p>User: {user}</p> : <p>Please sign in to see your cart.</p>}
        </section>
    )
}

export default App