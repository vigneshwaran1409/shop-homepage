import React,{useState} from 'react'
import Card from './Components/Card'
import TopBar from './Components/TopBar'
import Header from './Components/Header'

function App() {
  let [cart,setCart] = useState(0)
  let data = [
  {
    name: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00-$80.00",
    sale: "",
    originalprice:"",
    toggle:true,
    origin: "true", 
  },
  {
    name: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    sale: "sale",
    originalprice: "$20.00",
    toggle:true,
    origin: "false",
    reviews:"true",
  },
  {
    name: "Sale Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    sale: "sale",
    originalprice:"",
    toggle:true,
    origin: "false",
  },
  {
    name: "Popular Iteam",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    sale: "",
    originalprice:"",
    toggle:true,
    origin: "false",
    reviews:"true",
  },
  {
    name: "Sale Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    sale: "sale",
    originalprice:"",
    toggle:true,
    origin: "false",
  },
  {
    name: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$120.00-$280.00",
    sale: "",
    originalprice:"",
    toggle:true,
    origin: "false",
  },
  {
    name: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    sale: "sale",
    originalprice:"",
    toggle:true,
    origin: "false",
    reviews:"true",
  },
  {
    name: "Popular Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    sale: "",
    originalprice:"",
    toggle:true,
    origin: "false",
    reviews:"true",
  }
 ]
  return <>
  <TopBar cart={cart} setCart={setCart}/>
  <Header/>
  
  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        
        {
          data.map((product)=>{
            return <Card product={product} cart={cart} setCart={setCart}/>
          })
        }       
       </div>
        </div>
        </section>
        </>
}

export default App
