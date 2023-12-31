import { useState, useEffect } from "react";
//import { pedirProductos } from "./pedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  //Estado del producto
  const [productos, setProductos] = useState([]);

  const categoria = useParams().category;

  //Cambio del estado del producto
  useEffect(() => {
    /*
    pedirProductos().then((res) => {
      setProductos(res);
    });
    */
    //Fetch para traer los datos de Mockapi con agregado de filtro por categoria
    fetch("https://64e8fe2899cf45b15fe063ea.mockapi.io/api/cafeteria/opciones")
      .then((res) => {
        return res.json(); //Se captura la info en formato json
      })
      .then((data) => {
        //Se convierte la info para que sea legible y con setProductos accedes a la misma
        if (categoria) {
          setProductos(data.filter((prod) => prod.category === categoria));
        } else {
          setProductos(data);
        }
      });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
