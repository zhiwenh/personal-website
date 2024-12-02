import './../App.css';
import { useRef } from "react";

export default function NavBarItem(
  {navBarLink, navBarLinkText, clickNavBarLink, navBarLinkClassName }
) {

  return (
    <div className="nav-bar-item">
      <a href={navBarLink} className={navBarLinkClassName} onClick={clickNavBarLink}>
        {navBarLinkText}
      </a>
    </div>
  )
}
