import type { Metadata } from 'next';
import { VT323, Nunito, Playfair_Display } from 'next/font/google';
import './globals.css';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Felipe Paes | Dev Multiplataforma',
  description:
    'Portfólio de Felipe Paes da Silva: Desenvolvedor de Software Multiplataforma (Next.js, Node.js, React Native, TypeScript).',
  keywords: [
    'Felipe Paes',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Multiplataforma',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Felipe Paes da Silva' }],
  openGraph: {
    title: 'Felipe Paes da Silva | Portfólio de Desenvolvimento',
    description:
      'Projetos, habilidades técnicas e trajetória de Felipe Paes da Silva.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${vt323.variable} ${nunito.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen antialiased selection:bg-amber-600 selection:text-black">
        {children}
      </body>
    </html>
  );
}
