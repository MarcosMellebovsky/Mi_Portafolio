import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marcos Mellebovsky - Web Developer",
  description: "Bienvenido a mi portfolio, donde comparto mis proyectos y habilidades en desarrollo web. Aquí encontrarás una selección de mis trabajos más destacados, desde aplicaciones web hasta sitios estáticos, demostrando mi pasión por la tecnología y el diseño. ¡Explora y descubre lo que puedo ofrecer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
