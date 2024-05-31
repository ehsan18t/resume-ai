import { RegisterForm } from "@/components/forms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume AI | Register",
  description: "Resume AI register page",
};

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="p-5 w-2/4 shadow">
        <CardHeader>
          <CardTitle className="text-center">
            Sign up for your account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <RegisterForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
