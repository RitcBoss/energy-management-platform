import "./globals.css";
import { RoomProvider } from "./Context/RoomContext";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro ({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-be-vietnam-pro"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className} antialiased`}>
        <RoomProvider >
          {children}
        </RoomProvider>
      </body>
    </html>
  );
}
