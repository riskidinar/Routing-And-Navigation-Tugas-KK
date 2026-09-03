// //src/app/page.tsx
// import Link from "next/link";

// export default function Home() {
//     return (
//         <div>
//             <h1>Welcome to Home</h1>
//             <Link href='/profile'>Profile</Link>
//             <br></br>
//             <Link href='/about'>About</Link>
//             <br></br>
//             <Link href='/blogs/first'>Blogs first</Link>
//             <br></br>
//             <Link href='/blogs/seconds'>Blogs seconds</Link>
//             <br></br>
//             <Link href='/products'>Products</Link>
//             <br></br>
//             <Link href='/products/productId'>Product Id</Link>
//             <br></br>
//             <Link href='/products/productId/reviews/reviewId'>Review Id</Link>
//         </div>
//     );
// }

//src/app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Selamat datang di Portal Sekolah</h1>
            <Link href='/library_fiksi'>Library Fiksi</Link>
            <br></br>
            <Link href='/library_sains'>Library Sains</Link>
            <br></br>
            <Link href='/library_sejarah'>Library Sejarah</Link>
            <br></br>
            <Link href='/teachers/teachersId'>Profile Guru</Link>
            <br></br>
            <Link href='/courses/courseId/materials/materialId'>Materi BAB</Link>
            <br></br>
        </div>
    );
}