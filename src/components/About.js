import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <TypeAnimation
                sequence={[
                  'Hi, I am Salih',
                  2000,
                  'I love to build apps'
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
                />
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              I enjoy creating things that live on the internet. My interest for development started when I was a late teen. I was always interested in IT but the hardware side of it, but then I got my first experience with coding and fell in love. My main focus these days is improving my skills and evolving as a developer by doing challenging projects.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Projects
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </section>
    )
}