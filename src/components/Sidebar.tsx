import React from 'react';
import './Sidebar.css';

type SidebarProps = {
  items: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      <img src="/BlackLogo.png" alt="Logo" className="banner-logo-sidebar" />
      {items.map((item, index) => (
        
        <React.Fragment key={index}>
          
          {index === 0 && <hr className="sidebar-divider" />}
          <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${index === 0 ? 'first' : ''}
            ${index === 2 ? 'last' : ''}
              ${index === 3 ? 'contact' : ''}`.trim()}
          >
            <span className="link-text">{item}</span>
          </a>
          {index === 2 && <hr className="sidebar-divider" />}
          {index === 3 && <hr className="sidebar-divider" />}
        </React.Fragment>
      ))}
      <div className="sidebar-social-container">
        <img src="/ig.png" alt="Logo" className="sidebar-social" />
        <img src="/LinkedInBlack.png" alt="Logo" className="sidebar-social" />
        <img src="/gh.png" alt="Logo" className="sidebar-social" />

        </div>

    </div>
    
  );
};

export default Sidebar;
