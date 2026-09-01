//src/app/poducts/[productId]/page.tsx
type Props = {
    params: {
        ProductId: string
    }
}

export default function ProductDetails({params}:  Props) {
    return (
        <h1>Details about Product {params.ProductId}</h1>
    );
}
