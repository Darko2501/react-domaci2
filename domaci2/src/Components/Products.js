import React, {useState}from 'react';

function Products(props){
    let initialProducts={'iPhone 13':1000,'iPhone14':1500}
    let [products,setProducts]=useState(initialProducts)
    let[productName,setProduct]=useState('')
    let [productPrice,setPrice]=useState('')
    function addProduct(){
        if(productName===''){return};
        if(productPrice===''){return};
        setProducts(prevProducts=>({
            ...prevProducts,[productName]:parseFloat(productPrice)
        }))
    };

    return(
        <>
        <div>
            <h3>Products:</h3>
        </div>
        {Object.entries(products).map(([productName,productPrice])=>{let withTax=productPrice+(productPrice*props.tax/100);
            return(
                <div>
                    
                    <h5>Product: {productName}- Product price:{productPrice}- With tax: {withTax}</h5>
                </div>
            )
        })}
        <div>
            <h3>Enter new products:</h3>
            <input onInput={(e)=>setProduct(e.target.value)} placeholder='Enter product name'/><br/>
            <input onInput={(e)=>setPrice(e.target.value)} placeholder='Enter product price'/><br/>
            <button onClick={addProduct}>ADD</button>
        </div>
        
        </>
    )

}

export default Products;