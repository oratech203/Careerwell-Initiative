import React from "react";

// ✅ Correct export name (must match what App.tsx & Hero.tsx import)
export type PageType = "home" | "about" | "programs" | "impact" | "contact";

interface HeaderProps {
  current: PageType;
  onNavigate: (p: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
  const [open, setOpen] = React.useState(false);

  const links: { id: PageType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "impact", label: "Impact" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header>
      <nav className="container">
        <div className="logo">CareerWell Initiative</div>

        <ul
          className="nav-links"
          style={{ display: open ? "flex" : undefined }}
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                  setOpen(false);
                }}
                style={{
                  color:
                    current === link.id ? "var(--primary-blue)" : undefined,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="mobile-menu"
          onClick={() => setOpen((s) => !s)}
          aria-hidden
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
