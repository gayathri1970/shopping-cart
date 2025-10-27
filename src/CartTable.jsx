import React from "react";

function CartTable({ items }) {
  console.log("CartTable render");
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, imageSrc, imageAlt, title, price }) => (
          <tr key={id} className="cart-row">
            <td>
              <img className="product-thumb" src={imageSrc} alt={imageAlt} />
            </td>
            <td>{title}</td>
            <td>${price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default CartTable;
// export default React.memo(CartTable);