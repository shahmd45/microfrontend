import { useEffect, useState } from 'react'
import { useAuthStore } from 'shared/store'

import './App.css'

interface Product {
    id: number
    title: string
    price: number
}

function App() {
    const [products, setProducts] = useState<Product[]>([])
    const user = useAuthStore(state => state.user)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(setProducts)
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="product__main">
            <h2>Product Module</h2>
            {user ? <p>Signed in: {user}</p> : <p><i>Not signed in</i></p>}
            <ul>
                {products.slice(0, 8).map(p => <li key={p.id}>{p.title} - ${p.price}</li>)}
            </ul>
        </section>
    )
}

export default App