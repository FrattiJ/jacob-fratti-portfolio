import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-800 p-2">
            <Link href="/" className="flex items-center">
                <Image src='' alt="A cool logo for " className="mr-2" width={75} height={75} />
                Jacob Fratti
            </Link>
            <div className="flex items-center">
                <Link href='/experience' className="mr-4">Experience</Link>
                <Link href='/education' className="mr-4">Education</Link>
                <Link href='/projects' className="mr-4">Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;