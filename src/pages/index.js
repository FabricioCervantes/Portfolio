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
import Code from "/public/images/code.png";
import Consulting from "/public/images/consulting.png";
import Design from "/public/images/design.png";
import web1 from "/public/images/web1.png";
import web2 from "/public/images/web2.png";
import web3 from "/public/images/web3.png";
import web4 from "/public/images/web4.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fabricio&apos;s Portfolio</title>
      </Head>
      <main className="px-10 min-h-screen md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white ">
        <section className="lg:min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl">Fabricio Cervantes</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a href="#" className="px-4">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center justify-center">
            <div class="flex mb-10 flex-wrap justify-center">
              <div class="w-10/12 sm:w-4/12 px-4">
                <Image
                  src={ProfilePic}
                  alt="profile pic"
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                ></Image>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-cyan-500 md:text-6xl">
              Fabricio Cervantes
            </h1>
            <p className="text-xl mt-2 md:text-3xl">Full Stack Developer</p>
            <p className="mt-5 text-center md:text-xl max-w-lg mx-auto">
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
          </div>
        </section>
        <section className="">
          <h1 className="text-3xl mt-10 mb-5 font-bold">Services I offer</h1>
          <p>
            As a web developer, I offer a comprehensive range of services that
            encompass website design, development, and maintenance.
            <br /> <br />
            With a keen eye for aesthetics and functionality, I specialize in
            creating dynamic and user-friendly web experiences that help my
            clients meet their online goals while ensuring their website stays
            up-to-date and secure.
          </p>
          <div className="lg:flex gap-10">
            <div className="shadow-lg my-5 flex flex-col justify-center items-center p-10 gap-5 rounded-md dark:bg-white dark:text-black">
              <Image
                src={Code}
                width={100}
                height={100}
                alt="Code icon"
              ></Image>
              <h3 className="text-xl font-bold">Beautiful Designs</h3>
              <p className="text-center">
                Created some elegant designs using only my own imagination
              </p>
              <p className="text-cyan-500">Design tools I use</p>
              <ul className="flex text-center flex-col gap-2">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="shadow-lg my-5 flex flex-col justify-center items-center p-10 gap-5 rounded-md dark:bg-white dark:text-black">
              <Image
                src={Consulting}
                width={100}
                height={100}
                alt="Code icon"
              ></Image>
              <h3 className="text-xl font-bold">Beautiful Designs</h3>
              <p className="text-center">
                Created some elegant designs using only my own imagination
              </p>
              <p className="text-cyan-500">Design tools I use</p>
              <ul className="flex text-center flex-col gap-2">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="shadow-lg my-5 flex flex-col justify-center items-center p-10 gap-5 rounded-md dark:bg-white dark:text-black">
              <Image
                src={Design}
                width={100}
                height={100}
                alt="Code icon"
              ></Image>
              <h3 className="text-xl font-bold">Beautiful Designs</h3>
              <p className="text-center">
                Created some elegant designs using only my own imagination
              </p>
              <p className="text-cyan-500">Design tools I use</p>
              <ul className="flex text-center flex-col gap-2">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Portfolio</h1>
            <p>
              As a web developer, I offer a comprehensive range of services that
              encompass website design, development, and maintenance.
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-5 ">
            <div className="shadow-lg my-5 flex flex-col justify-center items-center gap-2 rounded-md dark:bg-white dark:text-black">
              <Image src={web1} alt="Code icon" className="w-full"></Image>
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-bold">Beautiful Designs</h3>
                <p className="">
                  Created some elegant designs using only my own imagination
                </p>
                <div className="flex justify-between mt-2">
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Website
                  </a>
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Source code
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-lg my-5 flex flex-col justify-center items-center gap-2 rounded-md dark:bg-white dark:text-black">
              <Image src={web2} alt="Code icon" className="w-full"></Image>
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-bold">Beautiful Designs</h3>
                <p className="">
                  Created some elegant designs using only my own imagination
                </p>
                <div className="flex justify-between mt-2">
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Website
                  </a>
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Source code
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-lg my-5 flex flex-col justify-center items-center gap-2 rounded-md dark:bg-white dark:text-black">
              <Image src={web3} alt="Code icon" className="w-full"></Image>
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-bold">Beautiful Designs</h3>
                <p className="">
                  Created some elegant designs using only my own imagination
                </p>
                <div className="flex justify-between mt-2">
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Website
                  </a>
                  <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                    Source code
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="shadow-lg flex flex-col justify-center items-center gap-2 rounded-md dark:bg-white dark:text-black">
                <Image src={web4} alt="Code icon" className="w-full"></Image>
                <div className="p-5 flex flex-col">
                  <h3 className="text-xl font-bold">Beautiful Designs</h3>
                  <p className="">
                    Created some elegant designs using only my own imagination
                  </p>
                  <div className="flex justify-between mt-2">
                    <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                      Website
                    </a>
                    <a className="bg-cyan-500 p-1 rounded-md cursor-pointer">
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
