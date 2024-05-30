const Footer = () => {
  const title = "Resume AI";
  const description =
    "Transform your career with the power of your CV. Apply for your dream job, get constructive feedback, and grow professionally. HR professionals can review CVs more efficiently with AI-powered summaries, ensuring the best match for every role.";

  return (
    <footer class="bg-gray-800 text-white py-4 w-full">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-4 justify-between items-center">
          <div class="mb-4 col-span-1 md:mb-0">
            <h2 class="text-2xl font-bold">{title}</h2>
            <p class="mt-2">Empowering Your Professional Journey</p>
          </div>
          <div class="col-span-3">
            <p class="italic text-center flex justify-center items-center">
              &quot;{description}&quot;
            </p>
            <p class="mt-4 text-center text-sm font-semibold text-gray-400">
              &copy; 2024 {title}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
