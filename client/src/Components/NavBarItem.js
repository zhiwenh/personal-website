import './../App.css';
import { useRef } from "react";

export default function NavBarItem(
  {navBarLink, navBarLinkText}
) {

  if (window.innerWidth > 600) {
    return (
      <div className="nav-bar-item">
        <a href={navBarLink} className="nav-bar-link">
          {navBarLinkText}
        </a>
      </div>
    )
  } else {
    <div className="nav-bar-item-small-window">
      <a href={navBarLink} className="nav-bar-link-small-window">
        {navBarLinkText}
      </a>
    </div>
  }
}
