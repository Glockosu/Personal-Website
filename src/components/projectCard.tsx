/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi'; // Ensure you have react-icons installed

const ProjectCard = ({ title, imageSrc, githubLink, skills }) => {
    return (
        <div className="max-w-full bg-gray-900 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out purple-tint">
        <div className="image-container" style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '41.66%' }}>
            <img className="rounded-t-lg" src={imageSrc} alt={title} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
            <div className="p-5">
            <h5 className="text-white text-2xl font-bold tracking-tight mb-2">{title}</h5>
            <p className="font-normal text-gray-400 mb-4">Skills: {skills.join(', ')}</p>
                <a href={githubLink} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    <FiGithub className="inline-block" /> View on GitHub
                </a>
            </div>
      </div>
    );
  };

export default ProjectCard;