import './../App.css';

export default function NavBarItem(
  {navBarLink, navBarLinkText}
) {
  return (
    <div className="nav-bar-item">
      <a href={navBarLink} className="nav-bar-link">
        {navBarLinkText}
      </a>
    </div>
  )
}