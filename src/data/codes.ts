export interface CodeInfo {
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  accentColor: string;
  accentColorLight: string;
  difficulty: 1 | 2 | 3;
  icon: string; // emoji placeholder until illustrations
  metaDescription: string;
}

export const codes: CodeInfo[] = [
  {
    title: 'Caesar-Chiffre',
    slug: 'caesar',
    description: 'Julius Caesar verschlüsselte seine Botschaften, indem er jeden Buchstaben im Alphabet verschob.',
    shortDesc: 'Verschiebe das Alphabet wie ein römischer Kaiser.',
    accentColor: '#8B5CF6',
    accentColorLight: '#EDE9FE',
    difficulty: 1,
    icon: '🏛️',
    metaDescription: 'Lerne die Caesar-Chiffre kennen und verschlüssle deine eigenen Nachrichten. Interaktiver Caesar-Code für Kinder.',
  },
  {
    title: 'Morse-Code',
    slug: 'morse',
    description: 'Punkte und Striche — damit wurde über riesige Entfernungen kommuniziert.',
    shortDesc: 'Punkte und Striche — die Sprache der Funker.',
    accentColor: '#3B82F6',
    accentColorLight: '#DBEAFE',
    difficulty: 2,
    icon: '📡',
    metaDescription: 'Übersetze Text in Morse-Code und spiele ihn ab. Interaktiver Morse-Übersetzer für Kinder.',
  },
  {
    title: 'Zahlen-Code',
    slug: 'zahlen',
    description: 'Der einfachste Code der Welt — jeder Buchstabe bekommt seine Nummer im Alphabet.',
    shortDesc: 'A=1, B=2 — verschlüssle mit Mathe.',
    accentColor: '#10B981',
    accentColorLight: '#D1FAE5',
    difficulty: 1,
    icon: '🔢',
    metaDescription: 'Wandle Buchstaben in Zahlen um und zurück. Interaktiver Zahlen-Code für Kinder.',
  },
  {
    title: 'Spiegelschrift',
    slug: 'spiegel',
    description: 'Leonardo da Vinci schrieb seine geheimen Notizbücher in Spiegelschrift.',
    shortDesc: 'Schreibe rückwärts wie Leonardo da Vinci.',
    accentColor: '#EC4899',
    accentColorLight: '#FCE7F3',
    difficulty: 1,
    icon: '🪞',
    metaDescription: 'Schreibe in Spiegelschrift wie Leonardo da Vinci. Interaktive Spiegel-Maschine für Kinder.',
  },
  {
    title: 'Freimaurer-Chiffre',
    slug: 'pigpen',
    description: 'Auch „Pigpen" genannt — diese Chiffre ersetzt Buchstaben durch geometrische Symbole.',
    shortDesc: 'Geheime Zeichen statt Buchstaben.',
    accentColor: '#F59E0B',
    accentColorLight: '#FEF3C7',
    difficulty: 2,
    icon: '🏗️',
    metaDescription: 'Entdecke die Freimaurer-Chiffre und übersetze Text in geheime Symbole. Interaktiv für Kinder.',
  },
  {
    title: 'Skytale',
    slug: 'skytale',
    description: 'Die Spartaner wickelten einen Papierstreifen um einen Stock.',
    shortDesc: 'Die antike Verschlüsselung der Spartaner.',
    accentColor: '#14B8A6',
    accentColorLight: '#CCFBF1',
    difficulty: 3,
    icon: '📜',
    metaDescription: 'Simuliere eine Skytale-Verschlüsselung wie die alten Spartaner. Interaktiv für Kinder.',
  },
  {
    title: 'Emoji-Code',
    slug: 'emoji',
    description: 'Erstelle deine eigene Geheimsprache mit Emojis.',
    shortDesc: 'Erstelle deine eigene Geheimsprache.',
    accentColor: '#F97316',
    accentColorLight: '#FFEDD5',
    difficulty: 1,
    icon: '😎',
    metaDescription: 'Erstelle deine eigene Emoji-Geheimsprache. Interaktiver Emoji-Code für Kinder.',
  },
  {
    title: 'Komprimierung',
    slug: 'komprimierung',
    description: 'Mach große Dateien klein! Lerne, wie Computer Daten schrumpfen lassen — mit cleveren Wörterbuch-Tricks.',
    shortDesc: 'Schrumpfe Daten wie ein ZIP-Zauberer.',
    accentColor: '#0EA5E9',
    accentColorLight: '#E0F2FE',
    difficulty: 2,
    icon: '🗜️',
    metaDescription: 'Lerne wie Datenkomprimierung funktioniert und probiere sie selbst aus. Interaktive LZW-Komprimierung für Kinder.',
  },
];

export function getCodeBySlug(slug: string): CodeInfo | undefined {
  return codes.find(c => c.slug === slug);
}
