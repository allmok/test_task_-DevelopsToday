import React, { useState, useRef, useEffect } from 'react';
import './SidebarMenu.css';

export interface MenuItem {
  label: string;
  items?: MenuItem[];
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const SubMenu: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <li className="menu-item">
      <div className="menu-item-header" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        {item.label}
        {item.items && <span className={`arrow ${isSubMenuOpen ? 'open' : ''}`}>›</span>}
      </div>
      {item.items && isSubMenuOpen && (
        <ul className="submenu">
          {item.items.map((subItem) => (
            <SubMenu key={subItem.label} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};


export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, menuItems }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);


  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div ref={sidebarRef} className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close-btn" onClick={onClose}>
          &times;
        </button>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <SubMenu key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};