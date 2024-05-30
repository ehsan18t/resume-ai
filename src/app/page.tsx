import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiBriefcase, BiUser } from "react-icons/bi";
// import { FaChartLine, FaFileUpload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-[#0079FF] text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Resume AI</h1>
          <p className="text-xl mb-8">
            Empowering Your Professional Journey with AI-Powered Solutions
          </p>
          <Button
            asChild
            variant="secondary"
            className="text-lg border-2 rounded-full p-5 shadow-lg hover:bg-transparent hover:text-white transition duration-200"
          >
            <Link href="/auth/register" target="_blank">
              Get Started
            </Link>
          </Button>
          <p className="pt-6">
            Already have an account?{" "}
            <a
              className="text-cyan-200 hover:text-amber-200 underline underline-offset-4 transition duration-200 ease-in-out"
              href="/auth/login"
            >
              Login Here
            </a>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Resume AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Job Seekers Feature */}
            <Card className="p-3">
              <CardHeader>
                <CardTitle className="flex gap-3 items-center font-semibold">
                  <BiUser color="#D04848" size={40} /> For Job Seekers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Build your profile with a simple CV upload</li>
                  <li>Apply for jobs effortlessly</li>
                  <li>
                    Receive detailed feedback and personalized improvement tips
                  </li>
                  <li>
                    Track your applications and progress in a user-friendly
                    dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* HR Professionals Feature */}

            <Card className="p-3">
              <CardHeader>
                <CardTitle className="flex gap-3 items-center font-semibold">
                  <BiBriefcase color="#D04848" size={40} /> For HR Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Efficiently review CVs with AI-powered summaries</li>
                  <li>Post job circulars and manage applications</li>
                  <li>Generate detailed reports on candidates</li>
                  <li>
                    Streamline the recruitment process with advanced tools and
                    analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="relative z-10 mt-32">
        <div className="absolute inset-x-0 -top-44 -z-10 pointer-events-none">
          <img src="/wave.svg" alt="Wave" className="w-full h-auto" />
        </div>
        <section className="bg-gradient-to-b from-[#0079FF] to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl mb-8">
              Join Resume AI and take the next step in your professional
              journey.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-lg border-2 transition duration-200"
            >
              <Link href="/auth/register" target="_blank">
                Sign Up Now
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
