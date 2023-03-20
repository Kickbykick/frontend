import "../styles/globals.css";
import "../styles/index.scss";
import NavBar from './NavBar'
import Footer from './Footer'
import classes from './../styles/Layout.module.scss';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        {/* <NavBar /> */}
        <body>
            <NavBar />
            <div className={classes.general}>
            </div>
            {children}
            <Footer />
        </body>
      </html>
    );
}



