import "./Product.css"

const Product = (custom) => {
    return (
        <div className="bungkus">
            <div className="produk">
                <h4>{custom.id}</h4>
                <h4>Nama Produk: {custom.name}</h4>
                <h5>Ukuran : {custom.size}</h5>
            </div>
        </div>
    )
  }

  
  export default Product