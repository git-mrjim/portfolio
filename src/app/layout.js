import "./globals.css";

export const metadata = {
  title: "Mr. Jim",
  description: "Portfolio of Jimwell Ibay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#020617] roboto'>{children}</body>
    </html>
  );
}
