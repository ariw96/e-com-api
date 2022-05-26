import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const ProductContext = createContext()


export const ProductProvider = props=>{
    const api = "https://fakestoreapi.com/products";
	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

	let compoundMounted = true;
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				if (compoundMounted) {
				const response = await axios.get(api);
					setData(response.data);
					compoundMounted = false;
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		getProducts();
	}, []);
    return(
        <ProductContext.Provider value={[data,setData]}>
            {props.children}
        </ProductContext.Provider>
    )
}

