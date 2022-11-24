import { FC } from "react";
import Link from "next/link";

export const Navbar:FC = () => {

    return (
        <nav>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/signin">SignIn</Link>
                <Link href="/signup">SignUp</Link>
            </div>
        </nav>
    )
}