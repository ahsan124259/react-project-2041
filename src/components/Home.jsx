import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = () => {
    const [products ,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(result=>setProducts(result ))
    },[])
    return (
        <div>
            <h1>Home:{products.length } </h1>
            {
                products.map(product=><Product
                key={product.id }
                product={product }
                
                ></Product>)
            }
        </div>
    );
};

export default Home;