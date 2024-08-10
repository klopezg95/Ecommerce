import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useState, useEffect } from 'react'
import ProductDetail from '../../Components/ProductDetail'


function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        //fetch('https://fakestoreapi.com/products')
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setItems(data))


    }, [])



    return (
        <Layout>
            Home
            <div className='grid grid-cols-4 gap-10 w-full max-w-screen-lg'>
                {
                    items?.map((item) => {
                        return <Card key={item.id} data={item} />
                    })
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home