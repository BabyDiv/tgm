import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'TGM Export',
  description: 'Company specializing in providing comprehensive solutions in the selection, configuration, calculation, and support of deals related to the supply of pumping equipment.',
  keywords: [
    'промышленные насосы',
    'насосное оборудование',
    'инженерные услуги',
    'подбор оборудования',
    'насосные системы',
    'industrial pumps',
    'pumping equipment',
    'Kazakhstan exports',
    'engineering services',
    'TGM Export',
    'project support',
    'equipment supply',
    'technical consulting',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

