import { useEffect, useState } from "react"
import ProductTile from "../components/ProductTile";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts(){
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();

        if(data){
            setLoading(false);
            setProducts(data);
        }
    }

    useEffect(()=> {
     fetchListOfProducts()
    }, [])
  return (
    <div>
        {
            loading ? <h1>Loading...</h1> : <div className="items-center m-auto min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl max-auto
             p-3">
                {
                    products && products.length > 0 ? products.map((productItem)=> (
                        <ProductTile product={productItem}/>
                    )) : ''
                }
             </div>
        }
    </div>
  )
}

export default Home