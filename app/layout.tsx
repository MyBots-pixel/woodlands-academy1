import "./globals.css";

export const metadata = {
  title: "Woodlands Academy",
  description: "Woodlands Academy school portal"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
