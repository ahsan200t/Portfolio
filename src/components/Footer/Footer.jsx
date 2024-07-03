const Footer = () => {
  return (
    <footer className="footer bg-black text-neutral-content items-center p-4">
    <aside className="grid-flow-col items-center">
      <p>Copyright © ${new Date().getFullYear()} - All right reserved by AHASAN</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.facebook.com/profile.php?id=100028344363466&mibextid=ZbWKwL">
        Facebook
      </a>
      <a href="https://github.com/ahsan200t">
       Github
      </a>
      <a href="https://www.linkedin.com/in/mohammad-amimul-ehsan">
       LinkdIn
      </a>
      <a>
       Twitter
      </a>
    </nav>
  </footer>
  );
};

export default Footer;
