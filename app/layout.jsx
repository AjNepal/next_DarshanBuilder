import "@/assets/styles/globals.css";

export const metadata = {
  title: "Darshan Builder | Find The Property",
  description: "Home, Property, Land, Find your Dream Home",
  keywords: "rental, property, some else",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
