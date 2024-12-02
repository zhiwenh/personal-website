import './../App.css';
import { useRef } from "react";
import NavBarItem from './NavBarItem.js'

export default function NavBarItem(
  {navBarLink, navBarLinkText}
) {
  const windowWidith = useRef(
    window.innerWidth
  );

  if (window.innerWidth > 400) {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
          ZH
        </div>
        <a href={navBarLink} className="nav-bar-link">
          {navBarLinkText}
        </a>
      </div>
    )
  } else {
    return (
      <div className="nav-bar-item-small-window">
      <div className="nav-bar-logo">
        ZH
      </div>
        <a href={navBarLink} className="nav-bar-link-small-window">
          {navBarLinkText}
        </a>
      </div>
    )
  }
}
