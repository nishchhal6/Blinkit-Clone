import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/mockData"; // Mock data se categories import karein

// SVG Icons for social media
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.863-.764-.025-1.482-.234-2.11-.583v.06c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.198 4.342 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.004-.403-.012-.604.91-.658 1.7-1.476 2.323-2.41z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.441-.645 1.441-1.44s-.646-1.44-1.441-1.44z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const Footer = () => {
  const usefulLinks1 = [
    { name: "Blog", path: "#" },
    { name: "Privacy", path: "/account?section=privacy" },
    { name: "Terms", path: "/account?section=privacy" },
    { name: "FAQs", path: "/account?section=faqs" },
    { name: "Security", path: "#" },
    { name: "Contact", path: "#" },
  ];
  const usefulLinks2 = [
    { name: "Partner", path: "#" },
    { name: "Franchise", path: "#" },
    { name: "Seller", path: "#" },
    { name: "Warehouse", path: "#" },
    { name: "Deliver", path: "#" },
    { name: "Resources", path: "#" },
  ];

  // Categories ko 3 columns mein baant do
  const categoriesPerColumn = Math.ceil(categories.length / 3);
  const categoryColumns = [
    categories.slice(0, categoriesPerColumn),
    categories.slice(categoriesPerColumn, 2 * categoriesPerColumn),
    categories.slice(2 * categoriesPerColumn),
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Section: Links & Categories */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Useful Links Section */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Useful Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                {usefulLinks1.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-green-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {usefulLinks2.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-gray-600 hover:text-green-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div className="md:col-span-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Categories
              </h3>
              <Link
                to="/categories"
                className="text-green-600 font-semibold hover:underline"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categoryColumns.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {column.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/products/${cat.id}`}
                        className="text-gray-600 hover:text-green-600"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright, Download & Social */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
            © Nishchhal Private Limited, 2025-2025
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <p className="font-semibold">Download App</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>

          <div className="flex gap-4 order-3 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/nishchhal.verma.31"
              className="text-gray-400 hover:text-gray-500"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://x.com/NishchhalVerma"
              className="text-gray-400 hover:text-gray-500"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/nishchhal267/"
              className="text-gray-400 hover:text-gray-500"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/nishchhalverma6/"
              className="text-gray-400 hover:text-gray-500"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>
            "Blinkit" is owned & managed by "Nishchhal Verma Private Limited"
            and is not related, linked or interconnected in whatsoever manner or
            nature, to "GROF.COM" which is a real estate services business
            operated by "Redstone Consultancy Services Private Limited".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
