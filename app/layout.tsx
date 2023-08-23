import './globals.css';

import {Space_Grotesk} from 'next/font/google';

const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: ['400', '700']});

export const metadata = {
  title: 'Always Track',
  description: 'Always Track & Analyze Your Business Statistics To Succeed',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
