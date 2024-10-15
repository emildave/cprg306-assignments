import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Shopping List",
  description: "Assignments for CPRG 303",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-purple-100 flex justify-center pt-20`}>
        <Link
          href={"/"}
          className="absolute font-bold text-3xl top-2 left-2 text-violet-900 px-3 py-2 hover:bg-violet-300 rounded-xl"
          >
          HOME
        </Link>
        <div className="w-[80%]">{children}</div>
      </body>
    </html>
  );
}
