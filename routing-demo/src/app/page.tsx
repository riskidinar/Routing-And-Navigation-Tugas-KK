//src/app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <Link href='/profile'>Profile</Link>
            <br></br>
            <Link href='/about'>About</Link>
            <br></br>
            <Link href='/blogs/first'>Blogs first</Link>
            <br></br>
            <Link href='/blogs/seconds'>Blogs seconds</Link>
            <br></br>
            <Link href='/products'>Products</Link>
            <br></br>
            <Link href='/products/productId'>Product Id</Link>
            <br></br>
            <Link href='/products/productId/reviews/reviewId'>Review Id</Link>
        </div>
    );
}