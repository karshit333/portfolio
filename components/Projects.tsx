
import React, { useEffect, useState } from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
import { fetchGithubRepos } from '../services/githubService';
import { GitHubRepo } from '../types';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<{ title: string; description: string; url?: string; language?: string; stars?: number }> = ({ title, description, url, language, stars }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-fuchsia-500 transition-colors duration-300 group interactive-element"
    whileHover={{ y: -10, scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
    {language && (
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>{language}</span>
        {stars !== undefined && <span>⭐ {stars}</span>}
      </div>
    )}
  </motion.a>
);

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      const username = portfolioData.contact.socials.github.split('/').pop() || '';
      const fetchedRepos = await fetchGithubRepos(username);
      const topRepos = fetchedRepos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
      setRepos(topRepos);
      setLoading(false);
    };

    getRepos();
  }, []);

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((p, i) => (
          <ProjectCard key={`static-${i}`} title={p.title} description={p.description} />
        ))}
        {loading ? (
          <p className="md:col-span-2 text-center">Fetching projects from GitHub...</p>
        ) : (
          repos.map(repo => (
            <ProjectCard 
              key={repo.id}
              title={repo.name}
              description={repo.description || 'No description available.'}
              url={repo.html_url}
              language={repo.language}
              stars={repo.stargazers_count}
            />
          ))
        )}
      </div>
    </Section>
  );
};

export default Projects;
