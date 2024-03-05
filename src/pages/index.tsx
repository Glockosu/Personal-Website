/* eslint-disable react/jsx-no-undef */
"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import '../styles/globals.css';
import ProjectCard from '@/components/projectCard';


function handleHover(e) {
  // Optional: Implement any hover-on action here
}

function handleUnhover(e) {
  // Optional: Implement any hover-off action here
}

function redirectToLinkedIn() {
  window.location.href = 'https://www.linkedin.com/company/cybernetny/';
}


export default function Home() {
  const projects = [
    {
      image: '/../images/projects/mimibot-app.png', // Replace with your project image path
      title: 'MimiBot App',
      description: 'A Node.js-based Discord bot, designed to elevate the Tower of Fantasy gameplay experience by offering instant access to character data and analytics. Features integration with the Tower of Fantasy Simulacra API for real-time character insights and statistical analysis, leveraging asynchronous programming for swift and accurate data handling. Equipped with sophisticated algorithms to calculate potential damage outputs for various character combinations, all accessible through user-friendly bot commands.',
      githubUrl: 'https://github.com/Glockosu/mimibot',
    },
    // Add more projects here
  ];
  return (
    <div className="min-h-screen text-white flex flex-col custom:flex-row">
      <Head>
        <title>Alex Johannesson</title>
        {/* Add other head elements here */}
      </Head>

      <header className="py-8 fixed w-full z-10 md:bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          {/* Add navigation and social links here */}
        </div>
      </header>

      {/* Sidebar container */}

      <div className="sidebar">
        <aside className="sticky top-0 pt-20 pl-0 h-screen flex justify-center md:pl-5 w-128 ">
          <div className="text-center">
            <Image src="/../images/profile-pic-nice.webp" alt="Alex Johannesson" width={200} height={200} className="mx-auto rounded-md transition-transform transition-filter grayscale hover:grayscale-0 hover:scale-105" />
            <h1 className="text-2xl font-bold mt-4">Alex Johannesson</h1>
            <p className="text-gray-400 mt-4">Software Engineer</p>
            <p className="text-gray-400 mt-2">I build cool stuff, check out my projects below :)</p>
            {/* Sidebar navigation */}
            <nav className="mt-16">
              <ul className="space-y-4">
                <li className="sidebar-item">
                  <a href="#about" className="sidebar-link">ABOUT</a>
                </li>
                <li className="sidebar-item">
                  <a href="#experience" className="sidebar-link">EXPERIENCE</a>
                </li>
                <li className="sidebar-item">
                  <a href="#projects" className="sidebar-link">PROJECTS</a>
                </li>
              </ul>
            </nav>

            {/* Social icons section */}
            <div className="mt-40">
              <a href="https://github.com/alexjohannesson" className="inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your GitHub icon */}
                <img src="/../images/icons/icons8-github-50.png" alt="GitHub" className="w-6 h-6 icon-hover" />
              </a>
              <a href="https://linkedin.com/in/alex-johannesson" className="inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your LinkedIn icon */}
                <img src="/../images/icons/icons8-linkedin-50.png" alt="LinkedIn" className="w-6 h-6 icon-hover" />
              </a>
              {/* Add more icons as needed */}
              <a href="https://x.com/alexJohannesson12" className="inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your X icon or any other social platform */}
                <img src="/../images/icons/icons8-twitterx-50.png" alt="X" className="w-6 h-6 icon-hover" />
              </a>
              <a href="mailto:alejohannesson@gmail.com" className="social-media inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your X icon or any other social platform */}
                <img src="/../images/icons/icons8-mail-48.png" alt="mail" className="w-6 h-6 icon-hover" />
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Main content container */}
      <main className="flex-1 container mx-auto items-start content-start px-4 custom:pl-20 custom:mr-40 pt-[/* same as header height plus any additional space */]">
        {/* About Section */}
        <section id="about" className="my-8 pt-10">
          <p className="text-lg text-gray-400">
            Hi, my name is <span className=" text-white">Alex Johannesson!</span> My journey into the world of <span className=" text-white">technology</span> began out of <span className=" text-white">curiosity</span> and a love for <span className=" text-white">creativity</span>. As a kid, my days were spent in the dual thrall of complex <span className=" text-white">computer systems</span> and the boundless realms of <span className=" text-white">video games</span>. This early fascination laid the foundation for what would become a deep-seated <span className=" text-white">passion</span> for <span className=" text-white">coding</span> and <span className=" text-white">web development</span>.
          </p>
          <p className="text-gray-400 text-lg mt-4">
            Today, my professional tapestry includes experiences ranging from <span className=" text-white">innovative startups</span> where I've had the opportunity to blend my <span className=" text-white">technical skills</span> with my <span className=" text-white">creative vision</span>. The thrill of <span className=" text-white">building</span> and <span className=" text-white">designing</span> not only functional but also aesthetically pleasing <span className=" text-white">software</span> is what drives me. With a foot firmly planted in both the <span className=" text-white">front-end</span> and <span className=" text-white">back-end</span> worlds, I thrive on the versatility of <span className=" text-white">full-stack development</span>. Whether I'm refining the <span className=" text-white">user interface</span> or architecting the <span className=" text-white">server-side</span>, each line of code is a stroke of passion painted on the canvas of <span className=" text-white">digital innovation</span>.
          </p>
          <p className="text-gray-400 text-lg mt-4">
            When I'm not immersed in code, you can still find me engaging with technology, exploring the latest <span className=" text-white">game releases</span> or building custom <span className=" text-white">PC setups</span>. These hobbies not only satisfy my personal interests but also complement my professional growth, inspiring new ideas for <span className=" text-white">projects</span> and <span className=" text-white">solutions</span>. I'm always on the lookout for the next <span className=" text-white">challenge</span>, the next problem to solve, and the next opportunity to craft <span className=" text-white">software</span> that resonates with users and ignites my <span className=" text-white">fervor</span> for the field.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-0 py-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          {/* Experience item */}
          <div className="group cursor-pointer p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:text-teal-400 hover:bg-purple-200/30 rounded-lg lg:flex lg:flex-col" onClick={redirectToLinkedIn}>
              <div className="lg:w-auto lg:flex-shrink-0 lg:text-left lg:pr-0">
                <p className="text-gray-400 mt-5">April 2019 — Sept 2019</p>
              </div>
              {/* Content on the right */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mt-5 ">Web Developer @ CybernetNY ↷</h3>
                <h2 className="text-sm pb-5 text-gray-400">New York, NY</h2>
                <p className="text-gray-300">
                  Architected and engineered state-of-the-art user interfaces leveraging the power of React.js coupled with the agility of Tailwind CSS, resulting in highly responsive and visually appealing components. Pioneered the integration of SEO strategies, optimizing web properties to enhance online presence and significantly boost site traffic. Fostered a collaborative environment by synergizing with UX/UI designers, backend engineers, and project managers to deliver seamless digital solutions that resonate with clients such as Harvard Business School, Everytown for Gun Safety, Pratt Institute, and others. Championed departmental leadership by driving knowledge sharing initiatives and steering the development of sophisticated internal tools.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* Tags for skills */}
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">JavaScript</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">TypeScript</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">React</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">PHP</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">HTML & SCSS</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">WordPress</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">TypeScript</span>
                  {/* Add other tags */}
                </div>
              </div>
          </div>

          {/* Add more positions here */}
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-0 py-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <ProjectCard
              title="MimiBot App"
              imageSrc="/../images/projects/rsz_mimibot-app.png"
              githubLink="https://github.com/Glockosu/mimibot"
              skills={['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Discord API']}
            />
            <ProjectCard
              title="Terrain Modeling"
              imageSrc="/../images/projects/rsz_terrain.png"
              githubLink="https://github.com/Glockosu/mimibot"
              skills={['Node.js', 'Perlin Noise', 'Data Structures and Algorithms', 'Version Control']}
            />
            <ProjectCard
              title="SourceJump"
              imageSrc="/../images/projects/rsz_sourcejump.png"
              githubLink="https://github.com/sourcejump/website"
              skills={['Custom API', 'Python', 'Next.js', 'Tailwind CSS', 'MongoDB']}
            />
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="px-0 py-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          <p className="mb-5 text-gray-400">If you're interested in working together or just want to say hi, don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <a href="mailto:alejohannesson@gmail.com" className="inline-block button-container text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-opacity-50">
            Send Email
          </a>
        </section>

        <footer className="px-4 py-8 mt-20 text-white">
          <div className="flex justify-center items-center">
            <a href="https://github.com/alejohannesson/personal-website" className="ml-4">
            <p className="text-center text-gray-200 hover:text-teal-500">Designed & Built by Alex Johannesson</p>
              <svg className="w-6 h-6 ml-28 mt-3 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.755-1.334-1.755-.9-.616.07-.604.07-.604 1 .07 1.525.98 1.525.98.888 1.52 2.33 1.08 2.897.827.09-.644.348-1.08.633-1.33-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.125-.302-.54-1.52.117-3.17 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.3-1.23 3.3-1.23.657 1.65.242 2.868.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.47 5.93.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75 0 .32.22.694.82.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
        </footer>

        {/* Add more sections as needed */}
      </main>
    </div>
  );
}