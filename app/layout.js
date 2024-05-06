import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotify",
  description:
    "A marketing page for Spotify, spotlightling the top 10 artisits in 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
