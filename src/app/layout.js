import './globals.css';
import { Inter } from 'next/font/google';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Casapia',
  description: 'A blog website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
