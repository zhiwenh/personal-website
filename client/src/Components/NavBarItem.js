import './../App.css';
import { useRef } from "react";

export default function NavBarItem(
  {navBarLink, navBarLinkText, clickNavBarLink}
) {

  return (
    <div className="nav-bar-item">
      <a href={navBarLink} className="nav-bar-link" onClick={clickNavBarLink}>
        {navBarLinkText}
      </a>
    </div>
  )
}
