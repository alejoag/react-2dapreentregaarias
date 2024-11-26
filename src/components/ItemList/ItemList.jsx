import Item from "../Item/Item"

export default function ItemList({products}) {
  return (
    <div className="row d-flex flex-wrap">
        <div className="row">
          {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    </div>
    
  )
}
