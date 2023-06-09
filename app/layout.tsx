import "../styles/globals.css";
import "../styles/index.scss";
import NavBar from './NavBar'
import Footer from './Footer'
import classes from './../styles/Layout.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iDDt Studios | A Development and Design Company',
  description:
    'iDDt Studios is a Growth Agency',
  keywords:"growth agency, web design, design, web development",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
            <NavBar />
            <div className={classes.topspace}></div>
            <div className={classes.body}>
              {children}
            </div>
            <Footer />
        </body>
      </html>
    );
}
