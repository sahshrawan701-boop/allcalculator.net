import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/signup",
  },
  title: "Sign up",
  description:
    "Create an account on Allcalculator.net to save your favorite calculators and preferences.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
