export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const headerNav: NavItem[] = [
  { label: "Evangelio", href: "/evangelio" },
  { label: "Retiros", href: "/retiros" },
  { label: "Formación", href: "/formacion" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Adoraciones", href: "/adoraciones" },
  { label: "Misiones", href: "/misiones" },
  { label: "Qué Ofrecemos", href: "/que-ofrecemos" },
];

export const mobileNav: NavItem[] = [
  { label: "Evangelio del Día", href: "/evangelio" },
  {
    label: "Experiencias",
    href: "/camino-conyugal",
    children: [
      { label: "Camino Conyugal", href: "/camino-conyugal" },
      { label: "Reto de 7 Días", href: "/reto-7-dias" },
      { label: "Modo Oración", href: "/modo-oracion" },
      { label: "Antes y Después", href: "/testimonios/antes-despues" },
    ],
  },
  {
    label: "Retiros",
    href: "/retiros",
    children: [{ label: "Calendario de Retiros", href: "/retiros" }],
  },
  {
    label: "Formación",
    href: "/formacion",
    children: [
      { label: "Todos los Recursos", href: "/formacion" },
      { label: "Catequesis SJPII", href: "/formacion#catequesis" },
    ],
  },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Adoraciones", href: "/adoraciones" },
  { label: "Misiones", href: "/misiones" },
  { label: "Qué Ofrecemos", href: "/que-ofrecemos" },
  { label: "Colabora", href: "/colabora" },
  { label: "Acerca de", href: "/acerca" },
  { label: "Contacto", href: "/contacto" },
  { label: "Aviso Legal", href: "/legal" },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Evangelio",
    links: [
      { label: "Evangelio de Hoy", href: "/evangelio" },
      { label: "Camino Conyugal", href: "/camino-conyugal" },
    ],
  },
  {
    title: "Experiencias",
    links: [
      { label: "Camino Conyugal", href: "/camino-conyugal" },
      { label: "Reto de 7 Días", href: "/reto-7-dias" },
      { label: "Modo Oración", href: "/modo-oracion" },
      { label: "Antes y Después", href: "/testimonios/antes-despues" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Retiros", href: "/retiros" },
      { label: "Formación", href: "/formacion" },
      { label: "Adoraciones", href: "/adoraciones" },
      { label: "Qué Ofrecemos", href: "/que-ofrecemos" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { label: "Testimonios", href: "/testimonios" },
      { label: "Misiones", href: "/misiones" },
      { label: "Colabora", href: "/colabora" },
      { label: "Contacto", href: "/contacto" },
      { label: "Acerca de", href: "/acerca" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso Legal", href: "/legal" },
      { label: "Privacidad", href: "/legal#privacidad" },
      { label: "Cookies", href: "/legal#cookies" },
    ],
  },
];
