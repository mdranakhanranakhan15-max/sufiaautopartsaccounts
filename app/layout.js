import './globals.css';
import Providers from '@/components/Providers';
import AppLayout from '@/components/AppLayout';

export const metadata = {
  title: 'Sufia Auto - Enterprise POS & Inventory',
  description: 'Enterprise Auto Parts Point of Sale & Inventory Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
