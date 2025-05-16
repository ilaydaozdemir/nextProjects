export const metaData = {
  title: "My Workspace",
  description: "Next.js projects",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
