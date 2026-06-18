# Ama a Dios — Proyecto Amor Conyugal

Acompañamos tu matrimonio desde el amor de Cristo. Sitio web del Proyecto Amor Conyugal: evangelio diario, retiros, formación, testimonios y experiencias para la vida en pareja.

## Requisitos

- **Node.js** >= 18 (recomendado 20+)
- **npm** >= 9

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router) |
| **Lenguaje** | TypeScript (strict mode) |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) 4 con sistema de diseño propio |
| **Animaciones** | Framer Motion |
| **Iconos** | Lucide React |
| **Despliegue** | Vercel (serverless) |

## Primeros Pasos

```bash
# 1. Clona el repositorio
git clone <repo-url>
cd proyecto-amor-conyugal-app

# 2. Instala dependencias
npm install

# 3. Configura variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# 4. Inicia servidor de desarrollo
npm run dev
# Abre http://localhost:3000
```

## Scripts Disponibles

```bash
npm run dev         # Servidor de desarrollo (http://localhost:3000)
npm run build       # Compila para producción
npm run start       # Sirve el build de producción localmente
npm run lint        # Ejecuta ESLint
npm run type-check  # Verifica tipos con TypeScript (tsc --noEmit)
```

## Estructura del Proyecto

```
proyecto-amor-conyugal-app/
├── public/
│   └── data/               # Datos estáticos JSON
│       ├── reflections.json    # Evangelios diarios
│       ├── retreats.json       # Retiros
│       ├── testimonials.json   # Testimonios
│       ├── formation-path.json # Recursos de formación
│       ├── missions.json       # Misiones activas
│       ├── links.json          # Enlaces de navegación
│       └── legal-notes.json    # Aviso legal, privacidad, cookies
├── src/
│   ├── app/                # Páginas (App Router)
│   │   ├── acerca/
│   │   ├── adoraciones/
│   │   ├── camino-conyugal/
│   │   ├── contacto/
│   │   ├── evangelio/
│   │   ├── formacion/
│   │   ├── legal/
│   │   ├── misiones/
│   │   ├── modo-oracion/
│   │   ├── retiros/
│   │   ├── reto-7-dias/
│   │   ├── testimonios/
│   │   ├── layout.tsx      # Layout raíz con Header y Footer
│   │   ├── page.tsx        # Página de inicio
│   │   └── globals.css     # Diseño global y tokens
│   ├── components/
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Footer.tsx      # Footer con columnas
│   │   ├── PageHero.tsx    # Hero genérico con breadcrumbs
│   │   ├── experience/     # Componentes interactivos de experiencias
│   │   ├── retreats/       # Componentes de retiros (filtros, tarjetas)
│   │   └── ui/             # Componentes UI reutilizables
│   ├── data/               # Lógica de datos (navegación, retiros)
│   └── lib/
│       └── content.ts      # Definiciones de tipos de contenido
├── docs/
│   └── copy-guide.md       # Guía de estilo de contenido
├── next.config.ts
├── vercel.json             # Configuración de despliegue en Vercel
├── .env.example            # Variables de entorno de ejemplo
└── tsconfig.json
```

### Sobre los datos

Todo el contenido del sitio se gestiona mediante archivos JSON estáticos en `public/data/`. Para actualizar el contenido (reflexiones diarias, retiros, testimonios, etc.), edita directamente estos archivos. No se requiere base de datos ni CMS.

Consulta `src/lib/content.ts` para las definiciones de tipos e interfaces de cada contenido.

## Despliegue en Vercel

### 1. Conectar repositorio

Conecta tu repositorio Git a [Vercel](https://vercel.com). Vercel detecta automáticamente Next.js y usa `vercel.json` para la configuración.

### 2. Configurar variables de entorno

En el dashboard de Vercel (Project Settings → Environment Variables), añade:

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (ej: `https://amaadios.org`) | Sí |
| `NEXT_PUBLIC_SITE_NAME` | Nombre del sitio para meta tags | No |
| `CONTACT_EMAIL` | Email de contacto | No |

### 3. Desplegar

Cada push a `main` (o la rama configurada) despliega automáticamente. También puedes hacer despliegues manuales desde la CLI de Vercel:

```bash
npx vercel --prod
```

### Seguridad

El `vercel.json` incluye cabeceras de seguridad (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy) y un redirect permanente de `/itinerario` → `/formacion`.

## Guía de Estilo de Contenido

Revisa `docs/copy-guide.md` para directrices sobre el tono, estilo y formato del contenido escrito.

## Sistema de Diseño

El diseño sigue principios de sobriedad luminosa, calidez artesanal y jerarquía espiritual. Los tokens de diseño están definidos en `src/app/globals.css` usando `@theme` de Tailwind CSS 4.

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#c7954e` | Dorado principal (CTAs, acentos) |
| `primary-dark` | `#a87a3d` | Dorado oscuro (hover) |
| `primary-light` | `#e8d5b0` | Dorado claro (fondos suaves) |
| `accent` | `#d4785c` | Terracota (énfasis secundario) |
| `background` | `#faf8f5` | Fondo general |
| `surface` | `#ffffff` | Tarjetas y contenedores |
| `surface-alt` | `#f5f0ea` | Secciones alternas |
| `foreground` | `#2c2416` | Texto principal |
| `muted` | `#7a6f5e` | Texto secundario |

## Licencia

© 2026 Ama a Dios. Todos los derechos reservados.
