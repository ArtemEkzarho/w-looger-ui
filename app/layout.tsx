import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Container, CssBaseline } from '@mui/material';
import Header from './header/header';
import Providers from './providers';
import authenticated from './auth/actions/authenticated';
import logout from './auth/logout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Workout logger',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await authenticated();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header logout={logout} />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
