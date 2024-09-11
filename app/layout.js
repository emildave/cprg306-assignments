import "./globals.css";

export const metadata = {
  title: "Web Dev 2 Assignments",
  description: "Assignments for CPRG 303",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
