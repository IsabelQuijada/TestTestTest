# TSD — Technical Solution Document
## José Navarro Psicólogo · Migración a React

**Versión:** 1.0  
**Fecha:** 2026-03-28  
**Autor:** GitHub Copilot — Architecture & Design

---

## Índice

1. [Objetivo y contexto](#1-objetivo-y-contexto)
2. [Decisiones de arquitectura y stack tecnológico](#2-decisiones-de-arquitectura-y-stack-tecnológico)
3. [Estructura de carpetas y archivos](#3-estructura-de-carpetas-y-archivos)
4. [Inventario de componentes](#4-inventario-de-componentes)
5. [Sistema de diseño en React (tokens, colores, fuentes)](#5-sistema-de-diseño-en-react)
6. [Estilos: estrategia y decisiones](#6-estilos-estrategia-y-decisiones)
7. [Manejo de imágenes, SVGs y fuentes](#7-manejo-de-imágenes-svgs-y-fuentes)
8. [Navegación y routing para futuras páginas](#8-navegación-y-routing)
9. [Accesibilidad y rendimiento](#9-accesibilidad-y-rendimiento)
10. [Guía de migración paso a paso](#10-guía-de-migración-paso-a-paso)
11. [Ejemplos de componentes clave](#11-ejemplos-de-componentes-clave)
12. [Referencias y recursos](#12-referencias-y-recursos)

---

## 1. Objetivo y contexto

El sitio actual es una landing page estática (`index.html` + `styles.css`) que funciona como página de "Próximamente" para el consultorio José Navarro Psicólogo.

**Objetivo de la migración:** convertir este sitio en una aplicación React escalable,  y completamente responsivecon:

- Componentes reutilizables y mantenibles.
- Un sistema de diseño centralizado (tokens de color, tipografía, espaciado).
- Preparación para agregar páginas futuras (servicios, sobre mí, reservas, blog).
- Buenas prácticas de estructura de carpetas, accesibilidad y rendimiento.
- Paridad visual completa con el diseño existente (paleta, fuentes, efectos glassmorphism, animaciones de entrada).

**Referencia de inspiración estructural:** [florenciatulian.com](https://www.florenciatulian.com/) — disposición de secciones, navegación limpia, hero visual, tarjetas de servicios.

---

## 2. Decisiones de arquitectura y stack tecnológico

### 2.1 Bundler / framework base

| Opción | Decisión | Razón |
|---|---|---|
| **Vite + React** | ✅ **Elegido** | Setup moderno, HMR instantáneo, build optimizado sin configuración extra. Ideal para proyectos de tamaño mediano. |
| Create React App | ❌ | Deprecado desde 2023. No se recomienda para proyectos nuevos. |
| Next.js | Futuro | Considerar si se necesita SSR, SEO avanzado o rutas dinámicas. Por ahora Vite es suficiente. |

**Comando de inicio:**
```bash
npm create vite@latest jose-navarro-psicologo -- --template react-ts
cd jose-navarro-psicologo
npm install
```

### 2.2 Lenguaje

| Opción | Decisión | Razón |
|---|---|---|
| **TypeScript (TSX)** | ✅ **Elegido** | Tipado estático desde el inicio, autocompletado enriquecido en VS Code, errores detectados en compilación, estándar de la industria para proyectos escalables. |
| JavaScript (JSX) | ❌ | Menos seguridad de tipos; dificulta el mantenimiento a medida que el proyecto crece. |

### 2.3 Estilos

| Opción | Decisión | Razón |
|---|---|---|
| **CSS Modules** | ✅ **Elegido** | Encapsulamiento de estilos por componente. Sin dependencias extra. Compatible con el CSS existente. Permite migrar el `styles.css` gradualmente. |
| Tailwind CSS | Alternativa válida | Agrega velocidad de desarrollo pero requiere aprender utilidades. Puede introducirse en versiones futuras. |
| styled-components | No recomendado | Overhead en runtime, peor rendimiento que CSS Modules. |
| Sass/SCSS | Complementario | Se puede usar para las variables globales y mixins de responsive si se prefiere. |

**Decisión:** CSS Modules para estilos de componente + un archivo global `src/styles/global.css` para variables CSS (`:root`) y estilos base.

### 2.4 Gestión de estado

No se requiere gestión de estado compleja en v1. El estado local con `useState` de React es suficiente. Si en el futuro se agregan formularios de reserva o autenticación, evaluar **Zustand** (ligero, con soporte nativo de TypeScript) antes de Redux.

### 2.5 Configuración de TypeScript

El template `react-ts` de Vite ya incluye `tsconfig.json` configurado. Ajustes recomendados en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"]
    }
  }
}
```

Los `paths` permiten importaciones absolutas como `import { Header } from '@components/Header/Header'` en lugar de rutas relativas largas.

### 2.6 Routing

**React Router v6** cuando se agreguen páginas adicionales. Por ahora, estructura preparada para incorporarlo fácilmente (ver [Sección 8](#8-navegación-y-routing)).

### 2.7 Animaciones

Las animaciones de entrada (`fadeUp`, `fadeUpFloat`) del CSS original se conservan via CSS keyframes en un archivo compartido `src/styles/animations.css`. Para animaciones más complejas en el futuro, considerar **Framer Motion**.

---

## 3. Estructura de carpetas y archivos

```
jose-navarro-psicologo/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/                      # Imágenes, SVGs, fuentes locales
│   │   ├── logo.png                 # JoseNavarroLogo.png renombrado
│   │   └── hero-placeholder.avif    # ImagenPlaceHolder.avif renombrado
│   │
│   ├── components/                  # Componentes reutilizables
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.module.css
│   │   ├── BenefitCard/
│   │   │   ├── BenefitCard.tsx
│   │   │   └── BenefitCard.module.css
│   │   ├── CTAButton/
│   │   │   ├── CTAButton.tsx
│   │   │   └── CTAButton.module.css
│   │   ├── HeroImage/
│   │   │   ├── HeroImage.tsx
│   │   │   └── HeroImage.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   └── OrbsBackground/
│   │       ├── OrbsBackground.tsx
│   │       └── OrbsBackground.module.css
│   │
│   ├── pages/                       # Una carpeta por página/vista
│   │   └── Home/
│   │       ├── Home.tsx
│   │       └── Home.module.css
│   │
│   ├── styles/                      # Estilos globales y tokens
│   │   ├── global.css               # reset, :root variables, body
│   │   ├── animations.css           # @keyframes compartidos
│   │   └── tokens.css               # Variables de diseño (colores, radios, etc.)
│   │
│   ├── types/                       # Tipos e interfaces compartidas
│   │   └── index.ts                 # Exportaciones de tipos globales
│   ├── vite-env.d.ts                # Tipos de Vite (generado automáticamente)
│   ├── App.tsx                      # Router raíz (cuando se agreguen páginas)
│   └── main.tsx                     # Punto de entrada React
│
├── index.html                       # HTML shell de Vite
├── tsconfig.json                    # Configuración TypeScript
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

**Reglas de organización:**
- Un componente = una carpeta con su `.jsx` y su `.module.css`.
- Las páginas importan y orquestan componentes; no tienen lógica de UI propia.
- Los assets que se usan en el código van en `src/assets/`. Los que van referenciados en `<link>` o `<meta>` van en `public/`.

---

## 4. Inventario de componentes

### Componentes de layout (siempre presentes)

| Componente | Descripción | Props |
|---|---|---|
| `Header` | Logo, marca, badge "Próximamente" | `badgeText?: string` |
| `Footer` | Texto legal, año, cédula | `year: number`, `licenseNumber: string` |
| `OrbsBackground` | Orbes decorativos de fondo | — |

### Componentes de la sección Hero

| Componente | Descripción | Props |
|---|---|---|
| `HeroSection` | Columna izquierda: eyebrow, headline, subtítulo, tarjetas, CTA | `data?: HeroData` |
| `Eyebrow` | Punto + texto tipo "Próximamente · 2026" | `text: string` |
| `Headline` | H1 con palabras resaltadas en teal/sage | `children: React.ReactNode` |
| `BenefitCard` | Tarjeta pill con ícono SVG y texto | `icon: React.ReactNode`, `label: string`, `variant: 'sky' \| 'green' \| 'sand'` |
| `CTAButton` | Botón WhatsApp con ícono | `href?: string`, `children?: React.ReactNode` |
| `HeroImage` | Imagen con decoración, ring, overlay | `src: string`, `alt: string` |

### Componentes futuros (próximas páginas)

| Componente | Uso futuro |
|---|---|
| `NavMenu` | Navegación desktop/mobile cuando haya más páginas |
| `ServiceCard` | Tarjeta de servicio terapéutico |
| `TestimonialCard` | Cita de paciente anónimo |
| `BookingForm` | Formulario de reserva de citas |
| `SectionTitle` | Título de sección con decoración |

---

## 5. Sistema de diseño en React

### 5.1 Tokens CSS en `src/styles/tokens.css`

```css
:root {
  /* ── Colores ── */
  --ink:        #071224;
  --navy:       #173450;
  --teal:       #0c84af;
  --teal-dk:    #0a6889;
  --teal-lt:    rgba(12, 132, 175, .11);
  --teal-glow:  rgba(12, 132, 175, .26);
  --sage:       #2c9060;
  --sage-lt:    rgba(44, 144, 96, .11);
  --sage-glow:  rgba(44, 144, 96, .22);
  --gold:       #c29438;
  --gold-lt:    rgba(194, 148, 56, .10);
  --bg:         #eaf1f8;
  --surface:    #ffffff;
  --glass:      rgba(255, 255, 255, .70);
  --text:       #1a2c3d;
  --muted:      #4e6272;
  --border:     rgba(22, 52, 80, .08);

  /* ── Espaciado ── */
  --header-h:   68px;

  /* ── Radios ── */
  --radius-xl:  2rem;
  --radius-lg:  1.2rem;
  --radius-md:  .9rem;
}
```

> **Importante:** No usar valores hexadecimales directamente en los componentes. Siempre usar las variables `var(--teal)`, `var(--ink)`, etc. Esto garantiza consistencia y facilita cambios de marca.

### 5.2 Tipografía

Las fuentes se cargan en `index.html` (Vite) con `<link>` de Google Fonts. No instalar como paquete npm — la CDN es suficiente para este caso.

```html
<!-- index.html (en la etiqueta <head>) -->
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Raleway:wght@300;400;500;600;700&family=Alex+Brush&display=swap"
  rel="stylesheet"
/>
```

| Familia | Variable de uso | Peso | Uso |
|---|---|---|---|
| `Raleway` | `font-family: 'Raleway', sans-serif` | 300–700 | Texto general, UI, botones |
| `Cormorant Garamond` | `font-family: 'Cormorant Garamond', serif` | 300–600 | Headline H1, citas |
| `Alex Brush` | `font-family: 'Alex Brush', cursive` | 400 | "navarro" en el logo |

---

## 6. Estilos: estrategia y decisiones

### 6.1 Cómo funcionan los CSS Modules en React

```tsx
// BenefitCard.tsx
import type { ReactNode } from 'react';
import styles from './BenefitCard.module.css';

type BenefitCardVariant = 'sky' | 'green' | 'sand';

interface BenefitCardProps {
  icon: ReactNode;
  label: string;
  variant?: BenefitCardVariant;
}

export function BenefitCard({ icon, label, variant = 'sky' }: BenefitCardProps) {
  return (
    <div className={`${styles.pillCard} ${styles[variant]}`}>
      <div className={styles.pillIcon}>{icon}</div>
      <span>{label}</span>
    </div>
  );
}
```

```css
/* BenefitCard.module.css */
.pillCard {
  display: flex;
  align-items: center;
  gap: .7rem;
  background: var(--glass);
  border: 1px solid rgba(255, 255, 255, .78);
  border-radius: var(--radius-lg);
  padding: .72rem 1.2rem;
  /* ... */
}
```

Los nombres de clase se transforman en hashes únicos en producción (`BenefitCard_pillCard__3xKp2`), evitando colisiones.

### 6.2 Jerarquía de archivos de estilos

```
src/styles/global.css       ← reset universal + body + background
src/styles/tokens.css       ← :root variables (colores, radios, etc.)
src/styles/animations.css   ← @keyframes fadeUp, fadeUpFloat, pulse-dot
                               (importado en global.css o en App.jsx)
```

`main.jsx` importa solo `global.css`. Los tokens y animaciones se importan dentro de `global.css` con `@import`.

### 6.3 Migración del CSS existente

El `styles.css` original se divide así:

| Bloque del original | Destino en React |
|---|---|
| `:root` | `src/styles/tokens.css` |
| `body`, `html`, reset | `src/styles/global.css` |
| `body::before/after` (anillos) | `OrbsBackground.module.css` |
| `.orb-1`, `.orb-2` | `OrbsBackground.module.css` |
| `.site-header`, `.header-*` | `Header.module.css` |
| `.page`, `.left-col`, `.right-col` | `Home.module.css` o `HeroSection.module.css` |
| `.eyebrow*`, `.headline`, `.sub` | `HeroSection.module.css` |
| `.pill-card`, `.pill-icon`, `.pi-*` | `BenefitCard.module.css` |
| `.cta-btn` | `CTAButton.module.css` |
| `.hero-illo-wrap`, `.hero-img` | `HeroImage.module.css` |
| `.site-footer` | `Footer.module.css` |
| `@keyframes` | `src/styles/animations.css` |
| `@media` | Dentro de cada `.module.css` correspondiente |

---

## 7. Manejo de imágenes, SVGs y fuentes

### 7.1 Imágenes

Las imágenes en `src/assets/` se importan directamente en JSX. Vite optimiza el path automáticamente:

```jsx
import heroImage from '../assets/hero-placeholder.avif';
import logo from '../assets/logo.png';

// Uso:
<img src={heroImage} alt="Ilustración de naturaleza y psicología" />
<img src={logo} alt="Logotipo José Navarro Psicólogo" />
```

**Recomendación de formato:** mantener `.avif` para la imagen hero (mejor compresión). Usar WebP como fallback si se requiere mayor compatibilidad.

### 7.2 SVGs

**Opción A — Inline como componente React (recomendada para íconos interactivos):**

```tsx
// src/components/icons/HeartIcon.tsx
interface IconProps {
  color?: string;
  size?: number;
}

export function HeartIcon({ color = '#0e7fa8', size = 15 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
```

**Opción B — Importar como componente con Vite (requiere plugin):**

```bash
npm install vite-plugin-svgr
```

```jsx
import { ReactComponent as Logo } from '../assets/logo.svg';
```

**Recomendación:** usar Opción A para los 3 íconos de BenefitCard (heart, shield, clock) y el ícono de WhatsApp. Crear una carpeta `src/components/icons/`.

### 7.3 Fuentes

Las fuentes de Google Fonts se cargan en el `<head>` de `index.html` (Vite). No es necesario copiar los archivos localmente a menos que se requiera funcionamiento offline.

---

## 8. Navegación y routing

### 8.1 Estructura preparada para React Router

Instalar cuando se vaya a agregar la segunda página:

```bash
npm install react-router-dom
```

```jsx
// src/App.tsx — Estructura futura
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Contact } from './pages/Contact/Contact';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/sobre-mi"  element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto"  element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 8.2 Navegación en el Header cuando haya más páginas

Mientras el sitio sea "Próximamente", el Header no tiene links de navegación. Cuando se lancen páginas reales:

```jsx
// Header.jsx
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/sobre-mi',  label: 'Sobre mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto',  label: 'Contacto' },
];

// Dentro del Header:
<nav aria-label="Navegación principal">
  {NAV_LINKS.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
    >
      {label}
    </NavLink>
  ))}
</nav>
```

`NavLink` añade automáticamente la clase `active` a la ruta actual — útil para estilos del link seleccionado.

### 8.3 Scroll suave a secciones (dentro de la misma página)

Si el sitio crece con secciones en la misma página (estilo florenciatulian.com), usar `id` en cada sección y `href="#seccion"` en el nav. No requiere react-router para esto.

---

## 9. Accesibilidad y rendimiento

### Accesibilidad

| Práctica | Implementación |
|---|---|
| `alt` descriptivo en imágenes | `alt="Ilustración de naturaleza y psicología"` |
| `aria-hidden` en decoraciones | `<div aria-hidden="true">` en orbes, líneas, puntos |
| `aria-label` en nav | `<nav aria-label="Navegación principal">` |
| `rel="noopener"` en links externos | Aplicado al CTA de WhatsApp |
| Contraste de color | Mantener ratio mínimo WCAG AA (4.5:1 para texto) |
| Navegación por teclado | Botones y links con `:focus-visible` estilizado |

### Rendimiento

| Práctica | Implementación |
|---|---|
| Lazy loading de imágenes | `<img loading="lazy" />` (mantener del original) |
| Formatos modernos | `.avif` para la imagen hero |
| Fuentes con `display=swap` | Añadir `&display=swap` al link de Google Fonts |
| Code splitting | Vite lo hace automáticamente por rutas al usar React Router |
| Evitar re-renders innecesarios | No usar estado global para datos estáticos; pasar props directamente |

---

## 10. Guía de migración paso a paso

### Fase 1 — Configuración del proyecto (día 1)

```bash
# 1. Crear el proyecto con Vite
npm create vite@latest jose-navarro-psicologo -- --template react
cd jose-navarro-psicologo

# 2. Instalar dependencias base
npm install

# 3. Limpiar el boilerplate de Vite
# Eliminar: src/App.css, src/assets/react.svg, public/vite.svg
# Limpiar: src/App.jsx (dejar solo un return vacío)

# 4. Arrancar el servidor de desarrollo
npm run dev
```

**Estructura inicial después de limpiar:**
```
src/
├── main.tsx        ← punto de entrada
├── App.tsx         ← componente raíz (vacío por ahora)
├── vite-env.d.ts   ← tipos de Vite (generado automáticamente)
└── assets/         ← copiar logo.png y hero-placeholder.avif aquí
```

### Fase 2 — Sistema de diseño (día 1-2)

1. Crear `src/styles/tokens.css` con todas las variables `:root` del CSS original.
2. Crear `src/styles/animations.css` con los `@keyframes`.
3. Crear `src/styles/global.css` con el reset, estilos de `body`, background gradients, y pseudoelementos decorativos. Importar tokens y animations:
   ```css
   @import './tokens.css';
   @import './animations.css';
   ```
4. En `src/main.jsx`, importar global.css:
   ```jsx
   import './styles/global.css';
   ```
5. Añadir el `<link>` de Google Fonts en `index.html`.

### Fase 3 — Componentes de layout (día 2)

Orden recomendado de creación:

1. **`OrbsBackground`** — solo divs decorativos, sin lógica.
2. **`Header`** — logo, marca, badge.
3. **`Footer`** — texto legal estático.

Migración directa: copiar el HTML del `index.html` original, pegar en JSX, ajustar atributos (`class` → `className`, etc.).

### Fase 4 — Componentes del Hero (día 3-4)

1. **`BenefitCard`** — el más reutilizable; hacerlo primero para validar CSS Modules.
2. **`CTAButton`** — botón WhatsApp con ícono SVG inline.
3. **`HeroImage`** — imagen con decoraciones CSS.
4. **`HeroSection`** — ensambla eyebrow + headline + sub + cards + CTA.

### Fase 5 — Página Home y App (día 4)

```tsx
// src/pages/Home/Home.tsx
import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroImage } from '../../components/HeroImage/HeroImage';
import { Footer } from '../../components/Footer/Footer';
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground';
import styles from './Home.module.css';

export function Home(): JSX.Element {
  return (
    <>
      <OrbsBackground />
      <Header badgeText="Próximamente" />
      <div className={styles.page}>
        <HeroSection />
        <HeroImage />
      </div>
      <Footer year={2026} licenseNumber="12831580" />
    </>
  );
}
```

```tsx
// src/App.tsx
import { Home } from './pages/Home/Home';

export default function App(): JSX.Element {
  return <Home />;
}
```

### Fase 6 — Validación y ajustes (día 5)

- Revisar responsive en móvil (≤840px) y tablet.
- Verificar animaciones de entrada (`fadeUp`).
- Pasar por un linter (`npm run lint`).
- Verificar accesibilidad con las herramientas de DevTools (Lighthouse).

### Fase 7 — Deploy (opcional)

Opciones de hosting estático para este proyecto:

| Plataforma | Comando | Notas |
|---|---|---|
| **GitHub Pages** | `npm run build` → subir `dist/` | Gratis, dominio personalizado con CNAME |
| **Vercel** | Conectar repo, deploy automático | Recomendado para proyectos React |
| **Netlify** | Conectar repo, deploy automático | Alternativa a Vercel |

Para GitHub Pages con Vite, agregar en `vite.config.js`:
```js
export default {
  base: '/', // o '/nombre-repo/' si se usa GitHub Pages sin dominio custom
}
```

---

## 11. Ejemplos de componentes clave

### 11.1 Header

```tsx
// src/components/Header/Header.tsx
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

interface HeaderProps {
  badgeText?: string;
}

export function Header({ badgeText = 'Próximamente' }: HeaderProps) {
  return (
    <header className={styles.siteHeader}>
      <a className={styles.headerLogo} href="/" aria-label="Ir al inicio">
        <img
          src={logo}
          alt="Logotipo José Navarro Psicólogo"
          className={styles.logoImg}
          loading="lazy"
        />
        <span className={styles.headerBrand}>
          <span className={styles.brandNameRow}>
            <strong className={styles.brandFirst}>José</strong>
            <em className={styles.brandLast}>navarro</em>
          </span>
          <span className={styles.brandRule} aria-hidden="true" />
          <span className={styles.brandTitle}>Psicólogo</span>
        </span>
      </a>
      {badgeText && (
        <span className={styles.headerBadge} aria-label={`Estado: ${badgeText}`}>
          {badgeText}
        </span>
      )}
    </header>
  );
}
```

```css
/* src/components/Header/Header.module.css */
.siteHeader {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 300;
  height: var(--header-h);
  display: flex;
  align-items: center;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  background: rgba(237, 244, 251, .88);
  backdrop-filter: blur(24px) saturate(1.5);
  -webkit-backdrop-filter: blur(24px) saturate(1.5);
  border-bottom: 1px solid rgba(255, 255, 255, .55);
  box-shadow: 0 1px 0 rgba(22, 52, 80, .06), 0 4px 28px rgba(12, 132, 175, .04);
  opacity: 0;
  animation: fadeUp .6s ease .1s forwards;
}

.headerLogo {
  display: flex;
  align-items: center;
  gap: .75rem;
  text-decoration: none;
}

.logoImg {
  height: 2.2rem;
  width: auto;
  display: block;
}

.headerBrand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  line-height: 1;
}

.brandNameRow {
  display: flex;
  align-items: baseline;
  gap: .15rem;
}

.brandFirst {
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  color: var(--ink);
  font-size: 1.25rem;
  letter-spacing: -.01em;
}

.brandLast {
  font-family: 'Alex Brush', cursive;
  font-style: normal;
  font-weight: 400;
  color: #8a8a8a;
  font-size: 1.75rem;
  letter-spacing: .01em;
}

.brandRule {
  display: block;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, var(--navy) 20%, var(--navy) 80%, transparent);
  margin: .2rem 0 .25rem;
}

.brandTitle {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: .62rem;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: var(--ink);
}

.headerBadge {
  margin-left: auto;
  background: rgba(255, 255, 255, .6);
  color: var(--teal-dk);
  border: 1px solid rgba(12, 132, 175, .18);
  padding: .3rem .95rem;
  border-radius: 99px;
  font-size: .67rem;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px rgba(12, 132, 175, .08);
}

@media (max-width: 840px) {
  .headerBadge { display: none; }
}
```

---

### 11.2 BenefitCard

```tsx
// src/components/BenefitCard/BenefitCard.tsx
import type { ReactNode } from 'react';
import styles from './BenefitCard.module.css';

type BenefitCardVariant = 'sky' | 'green' | 'sand';

interface BenefitCardProps {
  icon: ReactNode;
  label: string;
  variant?: BenefitCardVariant;
}

export function BenefitCard({ icon, label, variant = 'sky' }: BenefitCardProps) {
  return (
    <div className={styles.pillCard}>
      <div className={`${styles.pillIcon} ${styles[variant]}`} aria-hidden="true">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
}
```

```css
/* src/components/BenefitCard/BenefitCard.module.css */
.pillCard {
  display: flex;
  align-items: center;
  gap: .7rem;
  background: var(--glass);
  border: 1px solid rgba(255, 255, 255, .78);
  border-radius: var(--radius-lg);
  padding: .72rem 1.2rem;
  font-size: .83rem;
  color: var(--text);
  font-weight: 500;
  box-shadow:
    0 2px 16px rgba(8, 23, 42, .06),
    inset 0 1px 0 rgba(255, 255, 255, .85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition:
    transform .26s cubic-bezier(.2, .8, .2, 1),
    box-shadow .26s cubic-bezier(.2, .8, .2, 1),
    border-color .26s;
  cursor: default;
}

.pillCard:hover {
  transform: translateY(-3px);
  box-shadow:
    0 14px 36px rgba(8, 23, 42, .12),
    0 0 0 1px rgba(12, 132, 175, .16),
    inset 0 1px 0 rgba(255, 255, 255, .92);
  border-color: rgba(12, 132, 175, .26);
}

.pillIcon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Variantes de color del ícono */
.sky   { background: linear-gradient(135deg, rgba(12, 132, 175, .18), rgba(12, 132, 175, .08)); }
.green { background: linear-gradient(135deg, rgba(44, 144, 96, .18),  rgba(44, 144,  96, .08)); }
.sand  { background: linear-gradient(135deg, rgba(194, 148, 56, .18), rgba(194, 148, 56, .08)); }
```

**Uso en HeroSection:**

```tsx
import { BenefitCard } from '../BenefitCard/BenefitCard';
import { HeartIcon } from '../icons/HeartIcon';
import { ShieldIcon } from '../icons/ShieldIcon';
import { ClockIcon } from '../icons/ClockIcon';
import type { ReactNode } from 'react';

type BenefitVariant = 'sky' | 'green' | 'sand';

interface Benefit {
  icon: ReactNode;
  label: string;
  variant: BenefitVariant;
}

const BENEFITS: Benefit[] = [
  { icon: <HeartIcon />,  label: 'Atención personalizada',        variant: 'sky' },
  { icon: <ShieldIcon />, label: 'Espacio seguro y confidencial', variant: 'green' },
  { icon: <ClockIcon />,  label: 'A tu ritmo, sin presión',       variant: 'sand' },
];

// Dentro del JSX:
<div className={styles.cardsRow}>
  {BENEFITS.map(({ icon, label, variant }) => (
    <BenefitCard key={label} icon={icon} label={label} variant={variant} />
  ))}
</div>
```

---

### 11.3 CTAButton

```tsx
// src/components/CTAButton/CTAButton.tsx
import type { ReactNode } from 'react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import styles from './CTAButton.module.css';

const WHATSAPP_HREF =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.';

interface CTAButtonProps {
  href?: string;
  children?: ReactNode;
}

export function CTAButton({ href = WHATSAPP_HREF, children = 'Agendar primera consulta' }: CTAButtonProps) {
  return (
    <a
      className={styles.ctaBtn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}
```

### 11.4 Tipos compartidos (`src/types/index.ts`)

```ts
import type { ReactNode } from 'react';

export type BenefitCardVariant = 'sky' | 'green' | 'sand';

export interface Benefit {
  icon: ReactNode;
  label: string;
  variant: BenefitCardVariant;
}

export interface HeroData {
  eyebrowText: string;
  headline: ReactNode;
  subtext: string;
  benefits: Benefit[];
  ctaHref: string;
  ctaLabel: string;
}
```

---

## 12. Referencias y recursos

### Documentación oficial
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/guide/)
- [React Router v6](https://reactrouter.com/en/main)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Diseño y referencia visual
- [Florencia Tulian](https://www.florenciatulian.com/) — referencia de estructura y UX
- [Google Fonts](https://fonts.google.com/) — Raleway, Cormorant Garamond, Alex Brush
- [SVG Repo](https://www.svgrepo.com/) — íconos SVG

### Herramientas de accesibilidad y calidad
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) — auditoría de rendimiento y accesibilidad en DevTools
- [axe DevTools](https://www.deque.com/axe/devtools/) — extensión de accesibilidad para Chrome
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — verificar contraste de colores

### Hosting recomendado
- [Vercel](https://vercel.com/) — deploy automático desde GitHub, gratis para proyectos personales
- [Netlify](https://netlify.com/) — alternativa equivalente

---

**Documento generado por GitHub Copilot — 2026-03-28**  
*Este TSD reemplaza y expande el `TechnicalSolutionDesign.md` original para el contexto de la migración a React.*
