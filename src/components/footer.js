import React from "react";

function Footer() {
  return (
    <footer className="bg-grey">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Site web réalisé par{` `}
          <a
            className="font-bold no-underline"
            href="https://github.com/ma-bourassa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marc-Andre Bourassa
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
