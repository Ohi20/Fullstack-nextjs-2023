import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer/Footer';
// import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar/Navbar2';
import { ThemeProvider } from '../context/ThemeContext';
import AuthProvider from '../components/AuthProvider/AuthProvider.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quota',
  description: 'share your thoughts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar2 />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
