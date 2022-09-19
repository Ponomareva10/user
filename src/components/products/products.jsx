import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Products = () => {
  const {data, setData, getLaptops} = useContext(ProductsContext);

  useEffect(() => {
    getLaptops().then((response) => setData(response));
  }, []);

  return (
    <>
      <h1>Техника</h1>
      {data.length !== 0 ? data.map(item => (
        <div key={item.id} className={styles.product}>
          <h4>{item.name}</h4>
          <div className={styles.picture}>
            <img src={item.picture} alt={item.name} />
          </div>
        </div>
      ) )  : (
        <></>
      )}
    </>
  );
};

export default Products;
