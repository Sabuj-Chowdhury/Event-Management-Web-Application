import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="footer p-10 max-w-7xl mx-auto md:flex md:justify-between">
        <aside className="flex gap-5">
          <img
            src="/EventEase.png"
            alt="EventEase Logo"
            className="w-20 h-14 rounded"
          />
          <p className="font-semibold text-xl">
            EventEase
            <br />
            Simplifying your event journey.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© {new Date().getFullYear()} EventEase. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
