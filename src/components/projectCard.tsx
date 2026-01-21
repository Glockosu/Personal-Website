/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Ensure you have react-icons installed

const ProjectCard = ({ title, imageSrc, githubLink, websiteLink, skills, description }) => {
    return (
        <div className="max-w-full bg-gray-900 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out purple-tint flex flex-col h-full">
        <div className="image-container" style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '41.66%' }}>
            <img className="rounded-t-lg" src={imageSrc} alt={title} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
            <div className="p-5 flex flex-col flex-grow">
            <h5 className="text-white text-2xl font-bold tracking-tight mb-2">{title}</h5>
            {description && <p className="font-normal text-gray-400 mb-3 text-sm">{description}</p>}
            <p className="font-normal text-gray-400 mb-4">Skills: {skills.join(', ')}</p>
            <div className="flex gap-4 mt-auto">
                {githubLink && (
                    <a href={githubLink} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                        <FiGithub className="inline-block" /> View on GitHub
                    </a>
                )}
                {websiteLink && (
                    <a href={websiteLink} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                        <FiExternalLink className="inline-block" /> Visit Website
                    </a>
                )}
            </div>
            </div>
      </div>
    );
  };

export default ProjectCard;