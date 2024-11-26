import { useParams } from "react-router-dom";
import { getProductByID } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(()=>{
    getProductByID(productId)
      .then((resp) => {
        setProduct(resp)
      })
  }, [productId])

  return (
    <div>
      <h3>Características</h3>
      <hr />
      <ItemDetail {...product} />
    </div>
  );
}
