const Footer = () => {
  const title = "Resume AI";
  const description =
    "Transform your career with the power of your CV. Apply for your dream job, get constructive feedback, and grow professionally. HR professionals can review CVs more efficiently with AI-powered summaries, ensuring the best match for every role.";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-8 py-4">
        <div className="grid grid-cols-4 text-left">
          <div className="mb-2 col-span-1 lg:mb-0 border-r-2 border-gray-600">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm">Empowering Your Professional Journey</p>
          </div>
          <p className="italic ml-0 col-span-3 flex text-center text-sm items-center text-gray-400 lg:ml-4">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-8">
          <p className="text-center text-sm font-semibold text-gray-500">
            &copy; {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
