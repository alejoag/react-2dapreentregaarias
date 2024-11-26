export default function ItemDetail({id, name, img, description, category, price, stock}) {
  
  return (
    <div className="container">
        <h2>{name}</h2>
          <div className="card">
            <img 
                  src={img}
                  style={{width: 300}}
                  className="card-img-top"
                  alt={name}
              />
            
              <div className="card-body">
                <p>Detalles: {description}</p>
                <p>Categoría: {category}</p>
                <p>Precio: $ {price}</p>
                <p>Stock: {stock}</p>
              </div>
          </div>
    </div>
  )
}
