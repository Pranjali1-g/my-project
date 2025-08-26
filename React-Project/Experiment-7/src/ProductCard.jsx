function ProductCard({ product }) {
    return (
        <div className="product-card" style={{ border: "1px white solid", margin: "100px", padding: "100px" }}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.status}</div>
        </div>
    );
}

export default ProductCard;