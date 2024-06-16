import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-evenly items-center bg-gray-800 p-2 text-xs">
            <Link target='_blank' href="https://github.com/FrattiJ" className="">GitHub</Link>
            <Link target='_blank' href="https://www.linkedin.com/in/jacob-fratti/" className="">LinkedIn</Link>
            <Link href="/contact" className="">Contact</Link>
            <Link target='_blank' href="https://www.youtube.com/channel/UC-NotWJsekxqvgyCm9F5viQ" className="">Youtube</Link>
            <Link target='_blank' href="https://www.twitch.tv/fratti_jsx" className="">Twitch</Link>
        </footer>
    );
}
