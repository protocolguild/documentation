import { FC } from 'react';
import './Repos.css';
import { repoData, RepoData } from '../content/repos';

const Repos: FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Scroll to top before navigating to the link
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderRow = (repo: RepoData, idx: number) => (
    <div 
      key={`${repo.name}-${idx}`} 
      className="repo-row"
    >
      <div className="repo-info flex-shrink-0">
        <svg className="github-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
        </svg>
        <a 
          href={repo.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="repo-name whitespace-nowrap hover:text-[var(--brand-primary)] transition-colors duration-200"
          onClick={handleLinkClick}
        >
          {repo.name}
        </a>
      </div>
      <div className="repo-description flex-1 truncate text-white/70">{repo.description}</div>
    <div className="repositories-table whitespace-nowrap flex-shrink-0">
      {repo.contributors} {repo.contributors === 1 ? 'contributor' : 'contributors'}
    </div>
    </div>
  );

  // Sort the repoData by repo name
  const sortedRepoData = [...repoData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="repos-container">  
      <div className="repos-divider"></div>
      <div className="repos">
        {sortedRepoData.map(renderRow)} {/* Render the sorted rows here */}
      </div>
    </div>
  );
};

export default Repos
