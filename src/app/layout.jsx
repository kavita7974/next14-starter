import { Inter } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/navbar/navbar'
import Footer from '@/components/footer/Footer';
// import ClientSideProviderTest from '@/components/clientSideProviderTest';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: 'Next.js starter app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className='container'>
        <NavbarComponent />
        {children}
        <Footer/>
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}