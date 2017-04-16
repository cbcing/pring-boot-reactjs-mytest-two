/**
 * Created by David on 4/15/17.
 */
import React from 'react'
import styles from './productList.css';


const ProductList = ({
    products = []
}) => (
    <div>
        <ul className={styles.list}>
            {products.map (({name, value}, i) => (
                <li key={i} className={styles.listItem}>
                    <b>{name}</b>&nbsp;<span>{value}&nbsp;EUR</span>
                </li>
            ))}
        </ul>
    </div>
);

export default ProductList;