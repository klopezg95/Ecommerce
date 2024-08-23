import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useContext } from 'react'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'


function Home() {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        const itemsToRender = context.searchByTitle?.length > 0
            ? context.filteredItems
            : context.items;

        return (itemsToRender?.length > 0)
            ? itemsToRender.map(item => (
                <Card key={item.id} data={item} />
            ))
            : <p>No Results Found</p>;
    }


    return (
        <Layout>
            <div className='flex items-center justify-center w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder="Search product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={e => context.setSearchByTitle(e.target.value)}
            />
            <div className='grid grid-cols-4 gap-10 w-full max-w-screen-lg'>
                {
                    renderView()
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home