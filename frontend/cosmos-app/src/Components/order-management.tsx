import React, { useState } from 'react';


export default function OrderManagement() {

    const [customerId, setCustomerId] = React.useState("");
    const [productId, setProductId] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [quantity, setQuantity] = React.useState("");


    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            customerId,
            productId,
            price,
            quantity,
        };
        console.log("Order submitted:", orderData);

    };

    return (
        <>
            <p>React Orders</p>
            <form onSubmit={handleOrderSubmit}>
                <label htmlFor="customerId">Customer ID</label>
                <input type="text" id="customerId" name="customerId" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required
                />
                <br />

                

                <label htmlFor="productId">Product ID</label>
                <input type="text" id="productId" name="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required
                />
                <br />

                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required
                />
                <br />

                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <br />

                <button type="submit">Submit Order</button>
                <br />
            </form>
        </>
    );
}

