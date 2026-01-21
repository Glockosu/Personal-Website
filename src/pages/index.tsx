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
      image: './projects/mimibot-app.png', // Replace with your project image path
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
            <img src="/../images/local/profile-pic-nice.webp" alt="Alex Johannesson" width={200} height={200} className="mx-auto rounded-md transition-transform transition-filter grayscale hover:grayscale-0 hover:scale-105 will-animate animate-scale-in" />
            <h1 className="text-2xl font-bold mt-4 will-animate animate-fade-in delay-100">Alex Johannesson</h1>
            <p className="text-gray-400 mt-4 will-animate animate-fade-in delay-200">Software Engineer</p>
            <p className="text-gray-400 mt-2 will-animate animate-fade-in delay-300">I build cool stuff, check out my projects below :)</p>
            {/* Sidebar navigation */}
            <nav className="mt-16">
              <ul className="space-y-4">
                <li className="sidebar-item will-animate animate-slide-in-right delay-400">
                  <a href="#about" className="sidebar-link">ABOUT</a>
                </li>
                <li className="sidebar-item will-animate animate-slide-in-right delay-500">
                  <a href="#skills" className="sidebar-link">SKILLS</a>
                </li>
                <li className="sidebar-item will-animate animate-slide-in-right delay-600">
                  <a href="#projects" className="sidebar-link">PROJECTS</a>
                </li>
                <li className="sidebar-item will-animate animate-slide-in-right" style={{animationDelay: '0.7s'}}>
                  <a href="#experience" className="sidebar-link">EXPERIENCE</a>
                </li>
                <li className="sidebar-item will-animate animate-slide-in-right" style={{animationDelay: '0.8s'}}>
                  <a href="/AlexJohannesson_Resume.pdf" target="_blank" rel="noopener noreferrer" className="sidebar-link">RESUME</a>
                </li>
              </ul>
            </nav>

            {/* Social icons section */}
            <div className="mt-40 will-animate animate-fade-in" style={{animationDelay: '0.9s'}}>
              <a href="https://github.com/alexjohannesson" className="inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your GitHub icon */}
                <img src="/../images/icons/icons8-github-50.png" alt="GitHub" className="w-6 h-6 icon-hover" />
              </a>
              <a href="https://linkedin.com/in/alex-johannesson" className="inline-block mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                {/* Replace with your LinkedIn icon */}
                <img src="/../images/icons/icons8-linkedin-50.png" alt="LinkedIn" className="w-6 h-6 icon-hover" />
              </a>
              {/* Add more icons as needed */}
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
        <section id="about" className="my-8 pt-10 will-animate animate-fade-in-up">
            <p className="text-lg text-gray-400">
                Hi, I'm <span className="text-white">Alex Johannesson</span>. I've been passionate about <span className="text-white">technology</span>, from tinkering with computers to gaming, since childhood. My early curiosity sparked my love for <span className="text-white">coding</span> and <span className="text-white">software development</span>.
            </p>
            <p className="text-gray-400 text-lg mt-4">
                Professionally, I've grown by working with <span className="text-white">innovative startups</span>, blending <span className="text-white">technical skills</span> with <span className="text-white">creative vision</span>. I enjoy the challenge of both <span className="text-white">front-end</span> and <span className="text-white">back-end development</span>, crafting software that's both functional and beautiful.
            </p>
            <p className="text-gray-400 text-lg mt-4">
                Outside work, I'm exploring the latest <span className="text-white">game releases</span> or dabbling with <span className="text-white">ai</span> and <span className="text-white">machine learning</span> models. These hobbies fuel my professional innovation, continually inspiring fresh ideas for new <span className="text-white">projects</span>.
            </p>
        </section>
        <section id="skills" className="px-0 py-8 will-animate animate-fade-in-up delay-100">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Front-end Skills */}
            <div className="skills-category">
              <h3 className="text-xl font-bold mb-2">Front-end</h3>
              <ul className="list-disc list-inside">
                <li>HTML & CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Next.js & Tailwind</li>
                <li>Angular & TypeScript</li>
                <li>Vue.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            {/* Back-end Skills */}
            <div className="skills-category">
              <h3 className="text-xl font-bold mb-2">Back-end</h3>
              <ul className="list-disc list-inside">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>Java</li>
                <li>C++</li>
                <li>Database Management (SQL & NoSQL)</li>
                <li>API Design & Development</li>
              </ul>
            </div>
            {/* Additional Skills */}
            <div className="skills-category">
              <h3 className="text-xl font-bold mb-2">Other Technologies</h3>
              <ul className="list-disc list-inside">
                <li>Docker & Kubernetes</li>
                <li>AWS, Azure & Google Cloud</li>
                <li>Machine Learning & AI</li>
                <li>Blockchain Technologies</li>
                <li>IoT Development</li>
                <li>Mobile App Development (Flutter & React Native)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-0 py-8 will-animate animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <ProjectCard
              title="Cedarvo"
              imageSrc="/../images/projects/cedarvo.png"
              websiteLink="https://cedarvo.com"
              description="Web development company specializing in modern, scalable web applications and digital solutions."
              skills={['Web Development', 'Full-Stack', 'Client Solutions', 'Project Management']}
            />
            <ProjectCard
              title="Typojam"
              imageSrc="/../images/projects/typo.png"
              websiteLink="https://waffwrw.itch.io/typojam"
              description="A rhythm typing game where you type to the song's rhythm. Features a level editor, customizable themes, and LastFM integration. Currently on Unity, transitioning to osu!framework with web integration, Supabase database, and Cloudflare R2 storage."
              skills={['Unity', 'osu!framework', 'Supabase', 'Cloudflare R2', 'Game Development', 'Level Editor']}
            />
            <ProjectCard
              title="FNaF Max Mode List"
              imageSrc="/../images/projects/fnaf.png"
              websiteLink="https://fnafmml.glockbhop.workers.dev/"
              description="The official FNaF Max Mode List - a collaborative community project ranking the hardest possible modes from FNaF games, fangames, and mods. Features leaderboards, user submissions, comprehensive admin panel, and fully customizable user profiles."
              skills={['Cloudflare Workers', 'Full-Stack', 'Admin Dashboard', 'Supabase', 'Community Platform']}
            />
            <ProjectCard
              title="MemSum Enhancements"
              imageSrc="/../images/projects/extractive.png"
              githubLink="https://github.com/Glockosu/MemSum-Enhancements"
              websiteLink="/../MemSum__Proposal_for_Improving_MemSum_model_for_Extractive_Text_Summarization.pdf"
              description="Enhanced extractive text summarization model integrating Local Sentence Encoder (LSE) and Global Context Encoder (GCE) with GloVe embeddings. Features dynamic TF-IDF post-processing and advanced LSTM/GNN configurations for improved summary coherence."
              skills={['Machine Learning', 'NLP', 'Python', 'LSTM', 'GNN', 'TF-IDF', 'GloVe']}
            />
            <ProjectCard
              title="MimiBot App"
              imageSrc="/../images/projects/rsz_mimibot-app.png"
              githubLink="https://github.com/Glockosu/mimibot"
              description="Discord bot for Tower of Fantasy featuring real-time character insights, statistical analysis, and damage calculation algorithms."
              skills={['Node.js', 'Discord API', 'TypeScript', 'API Integration']}
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

        {/* Experience Section */}
        <section id="experience" className="px-0 py-8 will-animate animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          {/* Experience item */}
          <div className="group cursor-pointer p-4 transition duration-300 ease-in-out transform hover:scale-100 hover:text-teal-400 hover:bg-purple-200/30 rounded-lg lg:flex lg:flex-col" onClick={redirectToLinkedIn}>
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
  
        {/* Contact Section */}
        <section id="contact" className="px-0 py-8 will-animate animate-fade-in-up delay-400">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="border-b border-gray-600 mb-5"></div>
          <p className="mb-5 text-gray-400">If you're interested in working together or just want to say hi, don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <a href="mailto:alejohannesson@gmail.com" className="inline-block button-container text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-opacity-50">
            Send Email
          </a>
        </section>

        <footer className="px-4 py-8 mt-20 text-white">
          <div className="flex justify-center items-center">
            <a href="https://github.com/Glockosu/Personal-Website" className="ml-4">
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