//src/app/poducts/[productId]/review/[reviewID]/page.tsx
type Props = {
    params: {
        ReviewId: string
    }
}

export default function ReviewDetails({params}:  Props) {
    return (
        <h1>Details review Product {params.ReviewId}</h1>
    );
}
