import "./globals.css";

export const metadata = {
  title: "YAK Article 35 Platform",
  description: "Access to Information - Nairobi, Kajiado, Machakos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
