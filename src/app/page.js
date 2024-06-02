import Image from "next/image";
import Link from "next/link";
import headshot from "/public/headshot.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex items-center p-4">
        <Image src={headshot} alt="A very handsome professional headshot of Jaco Fratti" className="w-1/3 h-auto transform -scale-x-100" />
        <div className="w-2/3">
          <h1 className="text-8xl p-4">Jacob Fratti</h1>
          <h2 className="text-xl p-4">As an ambitious professional with a background in communication and a fervent passion
            for technology, I have honed a diverse skill set that seamlessly blends technical expertise
            with effective communication and strategic thinking.</h2>
        </div>
      </div>
      <div>
        {/* Add an about me that appears on hover over the above div */}
      </div>
      <div className="flex justify-evenly items-center p-4">
        <div className="">
          <Link href='/experience' className="p-4">Experience</Link>
          {/* Have background image of slide show of company logos */}
        </div>
        <div className="">
          <Link href='/education' className="p-4">Education</Link>
          {/* Have background image of slide show of school logos */}
        </div>
        <div className="">
          <Link href='/projects' className="p-4">Projects</Link>
          {/* Have background image of slide show of project previews */}
        </div>
      </div>
    </main>
  );
}
