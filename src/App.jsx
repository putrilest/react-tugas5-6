import { useState } from "react"
import Product from "./components/Product"
import './App.css'
import {FaPlus} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiEdit3} from 'react-icons/fi'
import {BsZoomIn, BsZoomOut} from 'react-icons/bs'

const App = () => {
  const [products, setProducts]= useState([
    {
      id: 1,
      name: 'Converse',
      size: 38,
    },
    {
      id: 2,
      name: 'Nike',
      size: 37,
    },
    {
      id: 3,
      name: 'Aero Street',
      size: 39,
    },
  ]);

  //USESTATE
  const [id, setId]  = useState();
  const [nama, setNama] = useState('');
  const [size, setSize] = useState();

  //HANDLER TAMBAH DEPAN
  function handleClickAddFront(){
    setProducts([{id:id, name:nama, size:size}, ...products])
  }
  
  //HANDLER TAMBAH BELAKANG
  function handleClickAddBack(){
    setProducts([...products, {id:id, name:nama, size:size}])
  }

  //HANDLER EDIT NAMA
  function handleClickEdit(){
    const list = products.map((x)=> {
      if(x.id === id){
        return {
          ...x,
          name:nama
        }
      }else{
        return x
      }
    })
    setProducts(list)
  }

  //HANDLE INCREMENT
  function handleClickIncrement(){
    products.map((x) => {
      if(x.id === id){
          x.size = x.size + 1
        setProducts([
          ...products
        ])
      }
    })
  }

  //HANDLER DECREMENT
  function handleClickDecrement(){
    products.map((x) => {
      if(x.id === id){
          x.size = x.size - 1
        setProducts([
          ...products
        ])
      }
    })
  }

  //HANDLER HAPUS BY ID
  function handleClickHapusById(){
    setProducts(products.filter(x => x.id !== id))
  }

  //HANDLER HAPUS DEPAN
  function handleClickHapusDepan(){
    setProducts({
      ...products,
      id: id-1
    })
    const tampProduct = products.slice(1)
    setProducts(tampProduct)
  }

  //HANDLER HAPUS BELAKANG
  function handleClickHapusBelakang(){
    const tampProduct = products.slice(0,products.length-1)
    setProducts(tampProduct)
  }

  //HANDLER HAPUS SEMUA
  function handleClickHapusSemua(){
    setProducts([])
  }

return (
  <div className="form">
    <div className="list-product">
      {
        products.map((prop)=>{
            return (
                <Product key={prop.id} id={prop.id} name={prop.name} size={prop.size} />
            )
        })
      }
    </div>

      
    <div className="form-tambah">
        <h2>TAMBAH</h2>
        <h4>Id</h4> 
        <input type="number" name='id' onChange={(e)=>setId(parseInt(e.target.value))}/>
        <h4>Nama Produk</h4> 
        <input type="text" name='name' onChange={(e)=>setNama(e.target.value)}/>
        <h4>Size</h4> 
        <input type="text" name='size'  onChange={(e)=>setSize(parseInt(e.target.value))}/>
        <br /> <br />

        <button onClick={handleClickAddFront}> <FaPlus/> Depan</button>
        <button onClick={handleClickAddBack}> <FaPlus/> Belakang</button>
    </div>

    <div className="form-by-id">
        <h2>EDIT/HAPUS BY ID</h2>
        <h4>Id</h4> 
        <input type="number" name='id'  onChange={(e)=>setId(parseInt(e.target.value))}/>
        <h4>Nama Produk</h4> 
        <input type="text" name='name' onChange={(e)=>setNama(e.target.value)}/>
        <br /> <br />

        <button onClick={handleClickEdit}><FiEdit3/> Edit Nama</button> <br />
        <button onClick={handleClickHapusById}><RiDeleteBin6Line/> Hapus By Id</button> <br />
        <button onClick={handleClickIncrement}><BsZoomIn/> Perbesar</button>
        <button onClick={handleClickDecrement}><BsZoomOut/> Perkecil</button>
    </div>

    <div className="form-hapus">
        <h2>HAPUS</h2>
        <button onClick={handleClickHapusDepan}><RiDeleteBin6Line/> Depan</button> <br />
        <button onClick={handleClickHapusBelakang}><RiDeleteBin6Line/> Belakang</button><br />
        <button onClick={handleClickHapusSemua}><RiDeleteBin6Line/> Semua</button>
    </div>

  </div>
)
  }
export default App