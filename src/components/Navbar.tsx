const links = ["Skills", "Projects", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-bold text-lg">
          B<span className="text-primary">.</span>S
        </button>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
