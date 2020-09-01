import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function ProductTable(props){
    const headings=(
        <tr>
            <th>name</th>
            <th>category</th>
            <th>price</th>
        </tr>
    );
    const table=props.products.map((row)=>
        <tr>
            <td>{row.name}</td>
            <td>{row.category}</td>
            <td>{row.price}</td>
        </tr>
    );
    return (
        <div>
            <h1>Products</h1>
            <table>
                {headings}
                {table}
            </table>
        </div>
    )
}
ProductTable.propTypes={
    products : PropTypes.arrayOf(
        {name:PropTypes.string,
        catergory:PropTypes.string,
        price:PropTypes.number}
    )
}
export default ProductTable;