import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import ProfilePic from "/public/images/profile.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabricio Portfolio</title>
      </Head>
      <main className="px-10 bg-indigo-950 text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl">Fabricio Cervantes</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a href="#" className="px-4">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-cyan-300 shadow-lg">
              Fabricio Cervantes
            </h1>
            <p className="text-xl mt-2">Full Stack Developer</p>
            <p className="mt-5 text-center">
              I&apos;m a web-loving software engineering student with a passion
              for creating dynamic and engaging online experiences.
            </p>
            <div className="flex text-5xl gap-20 mt-10">
              <a href="www.twitter.com">
                <BsTwitter />
              </a>
              <a href="">
                <BsGithub />
              </a>
              <a href="">
                <BsLinkedin />
              </a>
            </div>
            <div class="flex mt-10 flex-wrap justify-center">
              <div class="w-10/12 sm:w-4/12 px-4">
                <Image
                  src={ProfilePic}
                  alt="profile pic"
                  width={800}
                  height={800}
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <Link href={"/first-post"}>First blog</Link>
      </main>
    </div>
  );
}
