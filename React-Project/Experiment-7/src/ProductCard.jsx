function ProductCard({ product }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "150px" }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Status: {product.status}</p>
        </div>
    );
}

export default ProductCard;