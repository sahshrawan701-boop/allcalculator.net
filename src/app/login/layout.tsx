import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/login",
  },
  title: "Log in",
  description:
    "Log in to your Allcalculator.net account to save your calculations and preferences.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
