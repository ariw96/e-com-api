import React,{useEffect,useState} from 'react'

const Products = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let compoundMounted =true; 
    useEffect(()=>{
    const getProducts = async () => {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (compoundMounted) {
           setData(await res.clone().json());
           setFilter(await res.json());
           setLoading(false);
           console.log("res");
           console.log(res);
           console.log("filter");
           console.table(filter);
           console.log("data");
           console.table(data);

        }
      return () => {
        compoundMounted = false;
        };
    }
    getProducts();
        },[]);
    
  return (
    <div>Products</div>
  )
}

export default Products