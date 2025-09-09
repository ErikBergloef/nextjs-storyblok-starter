import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
    if (!products?.length) {
        return <p>No products found.</p>;
    }

    return(
        <div className="products-grid"
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
        }}
        >
            {products.map((p) => (
                <ProductCard key={p.slug}{...p}/>
            ))}
        </div>
    )
}