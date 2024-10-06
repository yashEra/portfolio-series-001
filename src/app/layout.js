
import { Poppins } from 'next/font/google'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:["400","500","600","700"],
  variable: '--font-poppins ',
 })

export const metadata = {
  title: 'Muvico - Next Js Personal & Minimal Portfolio Template',
  description: 'Muvico - Next Js Personal & Minimal Portfolio Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${poppins.variable} font-poppins text-[15px] text-slate-900 dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  )
}
