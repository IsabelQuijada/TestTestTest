# Guía de Migración: HTML+CSS → React + TypeScript
## José Navarro Psicólogo · Tutorial paso a paso

> **Para quién es esta guía:** desarrolladora con experiencia en programación (iOS), que conoce TypeScript y tiene nociones básicas de React, pero que está haciendo su primer proyecto real con ambos.  
> **Qué construiremos:** la landing page existente, reescrita en React+TS con componentes, CSS Modules y un sistema de diseño escalable.

---

## Índice

1. [Prerrequisitos y herramientas](#1-prerrequisitos-y-herramientas)
2. [Fase 1 — Setup del proyecto](#2-fase-1--setup-del-proyecto)
3. [Fase 2 — Limpieza del boilerplate](#3-fase-2--limpieza-del-boilerplate)
4. [Fase 3 — Sistema de diseño global](#4-fase-3--sistema-de-diseño-global)
5. [Fase 4 — Primer componente: OrbsBackground](#5-fase-4--primer-componente-orbsbackground)
6. [Fase 5 — Header](#6-fase-5--header)
7. [Fase 6 — Íconos SVG como componentes](#7-fase-6--íconos-svg-como-componentes)
8. [Fase 7 — BenefitCard (props tipadas y variantes)](#8-fase-7--benefitcard)
9. [Fase 8 — CTAButton](#9-fase-8--ctabutton)
10. [Fase 9 — HeroImage](#10-fase-9--heroimage)
11. [Fase 10 — HeroSection (composición)](#11-fase-10--herosection)
12. [Fase 11 — Footer](#12-fase-11--footer)
13. [Fase 12 — Página Home y App raíz](#13-fase-12--página-home-y-app-raíz)
14. [Fase 13 — Responsive con CSS Modules](#14-fase-13--responsive-con-css-modules)
15. [Errores comunes de principiantes en React+TS](#15-errores-comunes)
16. [Qué sigue: escalando el proyecto](#16-qué-sigue)

---

## 1. Prerrequisitos y herramientas

### Instalar antes de empezar

```bash
# Verificar que tienes Node.js 18+ (Vite lo requiere)
node --version   # debe mostrar v18.x o superior

# Si no lo tienes, instalar con nvm (recomendado sobre el instalador directo)
brew install nvm
nvm install 20
nvm use 20
```

### Extensiones de VS Code recomendadas

| Extensión | ID | Para qué sirve |
|---|---|---|
| ESLint | `dbaeumer.vscode-eslint` | Detecta errores de JavaScript/TS en tiempo real |
| Prettier | `esbenp.prettier-vscode` | Formatea el código automáticamente |
| CSS Modules | `clinyong.vscode-css-modules` | Autocompletado de clases en CSS Modules |
| ES7+ React snippets | `dsznajder.es7-react-js-snippets` | Snippets: escribe `rafce` para generar un componente |

### Configurar VS Code para formatear al guardar

Abre `Preferences > Settings > Open Settings (JSON)` y agrega:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

> **Analogía iOS:** esto es equivalente a configurar SwiftLint + el formatter de Xcode. Mismo principio: el editor te avisa de errores antes de compilar.

---

## 2. Fase 1 — Setup del proyecto

### Crear el proyecto

```bash
# Crea el proyecto con Vite usando el template React + TypeScript
npm create vite@latest jose-navarro-psicologo -- --template react-ts

# Entrar a la carpeta
cd jose-navarro-psicologo

# Instalar dependencias
npm install

# Verificar que todo funciona
npm run dev
```

Vite abrirá `http://localhost:5173`. Deberías ver la pantalla de bienvenida de Vite+React.

### Estructura inicial generada por Vite

```
jose-navarro-psicologo/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css          ← borraremos esto
│   ├── App.tsx
│   ├── index.css        ← reemplazaremos esto
│   ├── main.tsx
│   └── vite-env.d.ts    ← NO tocar: declara tipos para importar assets
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Copiar tus assets al proyecto

```bash
# Desde la carpeta del proyecto HTML original, copiar los assets
cp ../Psicologo_LandingPage/Assets/JoseNavarroLogo.png src/assets/logo.png
cp ../Psicologo_LandingPage/Assets/ImagenPlaceHolder.avif src/assets/hero-placeholder.avif
```

### Crear la estructura de carpetas definitiva

```bash
mkdir -p src/components/Header
mkdir -p src/components/HeroSection
mkdir -p src/components/BenefitCard
mkdir -p src/components/CTAButton
mkdir -p src/components/HeroImage
mkdir -p src/components/Footer
mkdir -p src/components/OrbsBackground
mkdir -p src/components/icons
mkdir -p src/pages/Home
mkdir -p src/styles
mkdir -p src/types
```

> **Por qué esta estructura:** en iOS harías `Views/`, `ViewModels/`, `Models/`. En React la idea es la misma — cada pieza de UI en su propia carpeta. La regla: **un componente = una carpeta** con su `.tsx` y su `.module.css`.

---

## 3. Fase 2 — Limpieza del boilerplate

Vite genera código de ejemplo que no necesitas. Límpialo antes de empezar.

### Archivos a eliminar

```bash
rm src/App.css
rm src/assets/react.svg
rm public/vite.svg
```

### `src/main.tsx` — punto de entrada

Este archivo monta React en el DOM. **No cambies su estructura**, solo ajusta la importación del CSS global (lo haremos en la Fase 3):

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'   // ← actualizaremos esta línea en Fase 3
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> **¿Qué es `StrictMode`?** Es un wrapper de React que en desarrollo activa verificaciones extra (como detectar efectos secundarios inesperados). No afecta el build de producción. Mantenlo siempre.

### `src/App.tsx` — dejarlo vacío por ahora

```tsx
// src/App.tsx
import { Home } from './pages/Home/Home'

export default function App() {
  return <Home />
}
```

### `index.html` — agregar las fuentes de Google

Abre el `index.html` en la raíz del proyecto (el de Vite, no el original) y reemplaza el `<head>`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>José Navarro Psicólogo — Próximamente</title>

    <!-- SEO -->
    <meta name="description" content="José Navarro Psicólogo. Próximamente. Atención profesional y humana." />

    <!-- Google Fonts: cargar ANTES del CSS para evitar FOUT (flash de texto sin estilo) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Raleway:wght@300;400;500;600;700&family=Alex+Brush&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

> **¿Por qué `preconnect`?** Le dice al navegador que establezca la conexión con Google Fonts antes de que el HTML termine de parsear. Carga ~200ms más rápido. Pequeño detalle, gran diferencia en herramientas de Lighthouse.

---

## 4. Fase 3 — Sistema de diseño global

Esta es la fase más importante de la migración. Aquí extraemos del CSS original todos los **tokens de diseño** (colores, tipografía, espaciado) y los ponemos en archivos centralizados.

> **Analogía iOS:** es como mover tus colores de `UIColor.red` hardcodeado a un `Color+Extensions.swift` con `Color.teal`, `Color.ink`, etc. Una sola fuente de verdad.

### `src/styles/tokens.css`

Copia exactamente las variables `:root` del CSS original:

```css
/* src/styles/tokens.css */
/* ── Design Tokens ─────────────────────────────────────────── */
/* Importar este archivo SOLO desde global.css, nunca directamente */

:root {
  /* Colores */
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

  /* Layout */
  --header-h:   68px;

  /* Radios de borde */
  --radius-xl:  2rem;
  --radius-lg:  1.2rem;
  --radius-md:  .9rem;
}
```

### `src/styles/animations.css`

Extrae todos los `@keyframes` del CSS original:

```css
/* src/styles/animations.css */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUpFloat {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(-10px); }
}

@keyframes pulse-dot {
  0%,  100% { box-shadow: 0 0 0 3px rgba(46, 192, 107, .22); }
  50%       { box-shadow: 0 0 0 5px rgba(46, 192, 107, .12); }
}
```

### `src/styles/global.css`

El archivo central que importa tokens y animaciones, y define los estilos base del `body`:

```css
/* src/styles/global.css */
@import './tokens.css';
@import './animations.css';

/* ── Reset ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── Base ── */
html { height: 100%; }

body {
  min-height: 100%;
  font-family: 'Raleway', sans-serif;
  color: var(--text);
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 55% at 12% 110%, rgba(44,144,96,.09) 0%, transparent 62%),
    radial-gradient(ellipse 60% 45% at 88% -8%, rgba(12,132,175,.11) 0%, transparent 58%),
    radial-gradient(ellipse 50% 40% at 55% 85%, rgba(194,148,56,.05) 0%, transparent 55%),
    linear-gradient(155deg, #edf4fb 0%, #e3edf6 50%, #dce8f3 100%);
}

/* ── Anillos decorativos del body (top-right) ── */
body::before,
body::after {
  content: '';
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

body::before {
  width: 72vmin; height: 72vmin;
  top: -24vmin; right: -18vmin;
  border: 1px solid rgba(12, 132, 175, .14);
  box-shadow: inset 0 0 100px rgba(12, 132, 175, .03);
}

body::after {
  width: 52vmin; height: 52vmin;
  top: -13vmin; right: -8vmin;
  border: 1.5px solid rgba(12, 132, 175, .08);
}

/* ── Responsive: ocultar anillos en mobile ── */
@media (max-width: 840px) {
  body::before,
  body::after {
    display: none;
  }
}
```

### Actualizar `main.tsx`

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'   // ← importa la cadena completa: global → tokens → animations
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> **Punto clave:** los CSS Modules de cada componente tienen acceso a las variables `var(--teal)` etc. porque `global.css` las declara en `:root`. No necesitas importar `tokens.css` en cada componente — `:root` es global por naturaleza en CSS.

---

## 5. Fase 4 — Primer componente: OrbsBackground

Empezamos con el componente más simple: solo dos `<div>` decorativos. No tiene props ni lógica. Perfecto para aprender la estructura básica.

### `src/components/OrbsBackground/OrbsBackground.tsx`

```tsx
// src/components/OrbsBackground/OrbsBackground.tsx

import styles from './OrbsBackground.module.css'

// Componente sin props: no necesita interface
export function OrbsBackground() {
  return (
    <>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
    </>
  )
}
```

> **¿Por qué `aria-hidden="true"`?** Los orbes son puramente decorativos. Los lectores de pantalla deben ignorarlos. Equivalente al `accessibilityHidden = true` de SwiftUI.

> **¿Por qué `<>`?** El Fragment (`<>...</>`) agrupa elementos sin agregar un `<div>` extra al DOM. En React, todo componente debe retornar **un solo elemento raíz** — pero ese elemento puede ser un Fragment invisible.

### `src/components/OrbsBackground/OrbsBackground.module.css`

```css
/* src/components/OrbsBackground/OrbsBackground.module.css */

.orb1,
.orb2 {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  border-radius: 50%;
}

.orb1 {
  width: 62vw;
  height: 62vw;
  top: -28vw;
  right: -18vw;
  background: radial-gradient(circle, rgba(12,132,175,.10) 0%, transparent 65%);
  filter: blur(45px);
}

.orb2 {
  width: 48vw;
  height: 48vw;
  bottom: -17vw;
  left: -14vw;
  background: radial-gradient(circle, rgba(44,144,96,.08) 0%, transparent 65%);
  filter: blur(35px);
}
```

> **CSS Modules en 30 segundos:** el nombre de clase `.orb1` en el archivo `.module.css` es **privado a ese componente**. Vite lo transforma en algo como `OrbsBackground_orb1__xKp2` en producción. Así dos componentes distintos pueden usar `.container` sin conflicto. Exactamente como `private` en Swift.

---

## 6. Fase 5 — Header

El Header ya tiene más complejidad: recibe una prop opcional, importa una imagen, y tiene múltiples elementos internos.

### `src/components/Header/Header.tsx`

```tsx
// src/components/Header/Header.tsx

import logo from '../../assets/logo.png'
import styles from './Header.module.css'

// Definir la interfaz de props justo antes del componente
interface HeaderProps {
  badgeText?: string  // opcional: si no se pasa, usamos el valor por defecto
}

export function Header({ badgeText = 'Próximamente' }: HeaderProps) {
  return (
    <header className={styles.siteHeader}>

      {/* Logo + marca — envuelto en <a> para que sea navegable por teclado */}
      <a className={styles.headerLogo} href="/" aria-label="Ir al inicio — José Navarro Psicólogo">
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
          {/* aria-hidden porque es decorativo (la línea horizontal) */}
          <span className={styles.brandRule} aria-hidden="true" />
          <span className={styles.brandTitle}>Psicólogo</span>
        </span>
      </a>

      {/* Renderizado condicional: si badgeText existe, muestra el badge */}
      {badgeText && (
        <span className={styles.headerBadge}>
          {badgeText}
        </span>
      )}

    </header>
  )
}
```

> **Renderizado condicional `{badgeText && <span>...`}:** en React no existe `if` dentro del JSX directamente. Usas `&&` (cortocircuito) o el operador ternario `condición ? <A /> : <B />`. Es el equivalente de los `@if` de SwiftUI.

> **Importar imágenes:** `import logo from '../../assets/logo.png'` — Vite procesa este import y devuelve la URL correcta del asset (optimizada en producción). Nunca uses rutas de string hardcodeadas para imágenes en `src/assets/`.

### `src/components/Header/Header.module.css`

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

/* IMPORTANTE: 'fadeUp' existe porque global.css importa animations.css.
   Las animaciones globales están disponibles aquí sin importar nada extra. */

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
}

@media (max-width: 840px) {
  .headerBadge { display: none; }
}
```

---

## 7. Fase 6 — Íconos SVG como componentes

En lugar de pegar el SVG inline en cada lugar que lo uses, lo conviertes en un componente React reutilizable con props para color y tamaño.

### `src/components/icons/HeartIcon.tsx`

```tsx
// src/components/icons/HeartIcon.tsx

interface IconProps {
  color?: string
  size?: number
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
      aria-hidden="true"  // los íconos decorativos deben tener esto
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
```

> **Nota de JSX vs HTML en SVGs:** en JSX todos los atributos son camelCase. `stroke-width` → `strokeWidth`, `stroke-linecap` → `strokeLinecap`. Este es uno de los errores más frecuentes al migrar SVGs de HTML a React. VS Code te avisará si usas la versión con guion.

### `src/components/icons/ShieldIcon.tsx`

```tsx
interface IconProps {
  color?: string
  size?: number
}

export function ShieldIcon({ color = '#3a8a62', size = 15 }: IconProps) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
```

### `src/components/icons/ClockIcon.tsx`

```tsx
interface IconProps {
  color?: string
  size?: number
}

export function ClockIcon({ color = '#9a7a46', size = 15 }: IconProps) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
```

### `src/components/icons/WhatsAppIcon.tsx`

```tsx
interface IconProps {
  size?: number
}

export function WhatsAppIcon({ size = 19 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
```

---

## 8. Fase 7 — BenefitCard

Este componente introduce dos conceptos clave: **tipos literales de unión** para las variantes y **clases CSS dinámicas**.

### `src/types/index.ts`

Antes de crear BenefitCard, crea el archivo de tipos compartidos:

```ts
// src/types/index.ts
import type { ReactNode } from 'react'

// Tipo de unión: solo estos tres valores son válidos como variante
export type BenefitCardVariant = 'sky' | 'green' | 'sand'

export interface BenefitItem {
  icon: ReactNode      // ReactNode acepta cualquier JSX: <HeartIcon />, strings, null...
  label: string
  variant: BenefitCardVariant
}
```

> **`type` vs `interface` en TypeScript:** usa `interface` para objetos que describen la forma de un dato. Usa `type` para uniones, intersecciones y aliases. En la práctica, para props de React puedes usar cualquiera — aquí usamos `interface` para props y `type` para uniones de literales.

### `src/components/BenefitCard/BenefitCard.tsx`

```tsx
// src/components/BenefitCard/BenefitCard.tsx

import type { ReactNode } from 'react'
import type { BenefitCardVariant } from '../../types'
import styles from './BenefitCard.module.css'

interface BenefitCardProps {
  icon: ReactNode
  label: string
  variant?: BenefitCardVariant   // opcional con valor por defecto
}

export function BenefitCard({ icon, label, variant = 'sky' }: BenefitCardProps) {
  // Combinando clases: clase base + clase de variante dinámica
  // styles[variant] es equivalente a styles.sky, styles.green, o styles.sand
  const iconClass = `${styles.pillIcon} ${styles[variant]}`

  return (
    <div className={styles.pillCard}>
      <div className={iconClass} aria-hidden="true">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  )
}
```

> **`styles[variant]`** — acceso dinámico a una clase CSS Module usando el valor de la prop como índice. TypeScript sabe que `variant` solo puede ser `'sky' | 'green' | 'sand'`, así que el acceso es seguro. Si `variant = 'sky'`, esto evalúa a `styles.sky`.

### `src/components/BenefitCard/BenefitCard.module.css`

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

/* Clases de variante — se aplican dinámicamente según la prop `variant` */
.sky   { background: linear-gradient(135deg, rgba(12, 132, 175, .18), rgba(12, 132, 175, .08)); }
.green { background: linear-gradient(135deg, rgba(44, 144, 96,  .18), rgba(44, 144,  96, .08)); }
.sand  { background: linear-gradient(135deg, rgba(194, 148, 56, .18), rgba(194, 148, 56, .08)); }

/* Mobile */
@media (max-width: 840px) {
  .pillCard {
    font-size: clamp(.78rem, 3.2vw, .96rem);
    padding: clamp(.35rem, .7vh, .6rem) clamp(.65rem, 1.5vw, .95rem);
    border-radius: 10px;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .pillIcon {
    width: clamp(20px, 3vh, 28px);
    height: clamp(20px, 3vh, 28px);
  }
}
```

---

## 9. Fase 8 — CTAButton

### `src/components/CTAButton/CTAButton.tsx`

```tsx
// src/components/CTAButton/CTAButton.tsx

import type { ReactNode } from 'react'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'
import styles from './CTAButton.module.css'

// URL con el mensaje prellenado de WhatsApp
const WHATSAPP_URL =
  'https://wa.me/523313833562?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'

interface CTAButtonProps {
  href?: string
  children?: ReactNode
}

export function CTAButton({
  href = WHATSAPP_URL,
  children = 'Agendar primera consulta',
}: CTAButtonProps) {
  return (
    <a
      className={styles.ctaBtn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"  // SEGURIDAD: siempre en links externos con target="_blank"
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}
```

> **`rel="noopener noreferrer"`:** cuando abres un link en `_blank`, la nueva pestaña puede acceder al objeto `window.opener` de la página original (vulnerabilidad). `noopener` lo previene. `noreferrer` además no envía el header `Referer`. Siempre usa ambos juntos en links externos.

### `src/components/CTAButton/CTAButton.module.css`

```css
/* src/components/CTAButton/CTAButton.module.css */

.ctaBtn {
  display: inline-flex;
  align-items: center;
  gap: .85rem;
  background: linear-gradient(135deg, #22cc5e 0%, #25D366 55%, #1dba58 100%);
  color: #fff;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: .96rem;
  font-weight: 700;
  letter-spacing: .03em;
  padding: 1rem 2.4rem 1rem 1.85rem;
  border-radius: 15px;
  box-shadow:
    0 8px 28px rgba(37, 211, 102, .36),
    0 2px 6px rgba(0, 0, 0, .07),
    inset 0 1px 0 rgba(255, 255, 255, .20);
  transition:
    transform .26s cubic-bezier(.2, .8, .2, 1),
    box-shadow .26s cubic-bezier(.2, .8, .2, 1);
  opacity: 0;
  animation: fadeUp 1s ease 1.05s forwards;
  position: relative;
  overflow: hidden;
}

/* Brillo interno con pseudo-elemento */
.ctaBtn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,.14) 0%, transparent 55%);
  border-radius: inherit;
  pointer-events: none;
}

.ctaBtn:hover {
  transform: translateY(-3px) scale(1.012);
  box-shadow:
    0 22px 58px rgba(37, 211, 102, .50),
    0 4px 12px rgba(0, 0, 0, .08);
}

/* Foco visible para accesibilidad por teclado */
.ctaBtn:focus-visible {
  outline: 3px solid var(--teal);
  outline-offset: 3px;
}

@media (max-width: 840px) {
  .ctaBtn {
    width: 100%;
    justify-content: center;
    font-size: clamp(.9rem, 4vw, 1.2rem);
    padding: clamp(.72rem, 1.5vh, 1rem) 1.5rem;
    border-radius: 12px;
  }
}
```

---

## 10. Fase 9 — HeroImage

### `src/components/HeroImage/HeroImage.tsx`

```tsx
// src/components/HeroImage/HeroImage.tsx

import styles from './HeroImage.module.css'

interface HeroImageProps {
  src: string
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className={styles.heroIlloWrap}>
      <img
        src={src}
        alt={alt}
        className={styles.heroImg}
        loading="lazy"
      />
    </div>
  )
}
```

### `src/components/HeroImage/HeroImage.module.css`

```css
/* src/components/HeroImage/HeroImage.module.css */

.heroIlloWrap {
  position: relative;
  z-index: 1;
  width: 88%;
  max-width: 510px;
  height: calc(100vh - var(--header-h) - 7rem);
  border-radius: 2.4rem;
  overflow: hidden;
  box-shadow:
    0 36px 90px rgba(8, 23, 42, .22),
    0 8px 20px rgba(8, 23, 42, .08),
    0 0 0 1px rgba(255, 255, 255, .55);
  opacity: 0;
  animation: fadeUpFloat 1.4s cubic-bezier(.18, .82, .35, 1) .35s forwards;
}

/* Overlay de gradiente encima de la imagen */
.heroIlloWrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(12,132,175,.06) 0%, transparent 28%),
    linear-gradient(0deg, rgba(7,18,36,.14) 0%, transparent 38%);
  pointer-events: none;
  z-index: 2;
  border-radius: inherit;
}

/* Anillo decorativo desplazado */
.heroIlloWrap::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 2.55rem;
  border: 1.5px solid rgba(12, 132, 175, .24);
  transform: translate(15px, 15px);
  z-index: -1;
  pointer-events: none;
}

.heroImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
}

@media (max-width: 840px) {
  .heroIlloWrap {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    animation: fadeUp .8s ease .2s forwards;
  }

  .heroIlloWrap::before {
    display: none;
  }

  .heroImg {
    object-fit: cover;
    object-position: center 25%;
  }
}
```

---

## 11. Fase 10 — HeroSection

Este es el componente de composición: usa todos los componentes anteriores juntos.

### `src/components/HeroSection/HeroSection.tsx`

```tsx
// src/components/HeroSection/HeroSection.tsx

import { BenefitCard } from '../BenefitCard/BenefitCard'
import { CTAButton } from '../CTAButton/CTAButton'
import { HeartIcon } from '../icons/HeartIcon'
import { ShieldIcon } from '../icons/ShieldIcon'
import { ClockIcon } from '../icons/ClockIcon'
import type { BenefitItem } from '../../types'
import styles from './HeroSection.module.css'

// Datos estáticos definidos fuera del componente para que no se recreen en cada render
const BENEFITS: BenefitItem[] = [
  {
    icon: <HeartIcon />,
    label: 'Atención personalizada',
    variant: 'sky',
  },
  {
    icon: <ShieldIcon />,
    label: 'Espacio seguro y confidencial',
    variant: 'green',
  },
  {
    icon: <ClockIcon />,
    label: 'A tu ritmo, sin presión',
    variant: 'sand',
  },
]

export function HeroSection() {
  return (
    <div className={styles.leftCol}>

      {/* Acento decorativo móvil */}
      <div className={styles.mAccent} aria-hidden="true">
        <span className={styles.mAccentDot} />
        <span className={styles.mAccentLine} />
      </div>

      {/* Eyebrow */}
      <div className={styles.eyebrow} aria-hidden="true">
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Próximamente · 2026</span>
      </div>

      {/* Headline */}
      <div className={styles.headline}>
        <h1>
          Un lugar <em>seguro</em>
          <br />
          está <span className={styles.wordWarm}>naciendo</span> para&nbsp;ti.
        </h1>
      </div>

      {/* Subtítulo */}
      <p className={styles.sub}>
        Nuestro sitio está en construcción. Estamos preparando algo especial para ti.
        Mientras tanto, puedes escribirnos para reservar tu lugar o resolver cualquier duda.
      </p>

      {/* Tarjetas de beneficio */}
      <div className={styles.cardsRow}>
        {BENEFITS.map(({ icon, label, variant }) => (
          // key debe ser único y estable — el label es estable aquí
          <BenefitCard key={label} icon={icon} label={label} variant={variant} />
        ))}
      </div>

      {/* CTA */}
      <CTAButton />

    </div>
  )
}
```

> **¿Por qué `BENEFITS` fuera del componente?** Si lo pusieras dentro, el array se recrearía en memoria en **cada render**. Como es un dato estático, declararlo fuera del componente es una micro-optimización correcta. Para datos que dependen de estado o props, sí van dentro.

> **`key` en listas:** cuando usas `.map()` para renderizar componentes, React necesita una `key` única y estable por elemento para saber cuál elemento actualizó. Nunca uses el índice del array (`index`) como key en listas que pueden cambiar de orden.

### `src/components/HeroSection/HeroSection.module.css`

```css
/* src/components/HeroSection/HeroSection.module.css */

.leftCol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* ── Eyebrow ── */
.eyebrow {
  display: flex;
  align-items: center;
  gap: .65rem;
  margin-bottom: 1.2rem;
  opacity: 0;
  animation: fadeUp .7s ease .3s forwards;
}

.eyebrowDot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--teal);
  flex-shrink: 0;
  box-shadow: 0 0 0 3px var(--teal-lt);
}

.eyebrowText {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--teal-dk);
}

/* ── Headline ── */
.headline {
  text-align: left;
  width: 100%;
  opacity: 0;
  animation: fadeUp 1s ease .5s forwards;
  margin-bottom: 1rem;
}

.headline h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: clamp(3rem, 4.4vw, 5.2rem);
  line-height: 1.05;
  color: var(--ink);
  letter-spacing: -.03em;
}

/* em dentro del h1 — heredado del contexto */
.headline h1 em {
  font-style: italic;
  background: linear-gradient(135deg, var(--teal) 20%, #34c4ec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wordWarm {
  font-style: italic;
  background: linear-gradient(135deg, var(--sage) 15%, #54c98e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Subtítulo ── */
.sub {
  text-align: left;
  max-width: 460px;
  font-size: 1rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.9;
  opacity: 0;
  animation: fadeUp 1s ease .7s forwards;
  margin-bottom: 1.85rem;
}

/* ── Cards row ── */
.cardsRow {
  display: flex;
  flex-wrap: wrap;
  gap: .65rem;
  justify-content: flex-start;
  width: 100%;
  opacity: 0;
  animation: fadeUp 1s ease .9s forwards;
  margin-bottom: 2.1rem;
}

/* ── M-accent (solo mobile) ── */
.mAccent {
  display: none;
  align-items: center;
  gap: .55rem;
}

.mAccentDot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 0 3px var(--teal-lt);
}

.mAccentLine {
  height: 2px;
  width: clamp(28px, 8vw, 44px);
  background: linear-gradient(90deg, var(--teal), var(--sage));
  border-radius: 2px;
  opacity: .7;
}

/* ── Mobile ── */
@media (max-width: 840px) {
  .eyebrow { display: none; }

  .mAccent { display: flex; }

  .headline { margin-bottom: 0; }
  .headline h1 { font-size: clamp(1.7rem, 9vw, 3.2rem); line-height: 1.12; }

  .sub {
    max-width: 100%;
    font-size: clamp(.84rem, 3.8vw, 1.1rem);
    line-height: 1.5;
    margin-bottom: 0;
  }

  .cardsRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(.3rem, .6vh, .5rem);
    margin-bottom: 0;
  }

  /* Última card ocupa toda la fila */
  .cardsRow > :last-child {
    grid-column: 1 / -1;
    justify-self: start;
  }
}
```

---

## 12. Fase 11 — Footer

### `src/components/Footer/Footer.tsx`

```tsx
// src/components/Footer/Footer.tsx

import styles from './Footer.module.css'

interface FooterProps {
  year: number
  licenseNumber: string
}

export function Footer({ year, licenseNumber }: FooterProps) {
  return (
    <footer className={styles.siteFooter}>
      © {year} José Navarro Psicólogo
      <span className={styles.sep} aria-hidden="true">·</span>
      Céd. Prof.: {licenseNumber}
      <span className={styles.sep} aria-hidden="true">·</span>
      Todos los derechos reservados
    </footer>
  )
}
```

### `src/components/Footer/Footer.module.css`

```css
/* src/components/Footer/Footer.module.css */

.siteFooter {
  position: fixed;
  bottom: 1rem;
  left: 0; right: 0;
  z-index: 10;
  text-align: center;
  font-size: .67rem;
  color: rgba(26, 55, 82, .32);
  letter-spacing: .06em;
  opacity: 0;
  animation: fadeUp 1s ease 1.35s forwards;
  pointer-events: none;
}

.sep {
  margin: 0 .4em;
  opacity: .5;
}

@media (max-width: 840px) {
  .siteFooter {
    font-size: clamp(.52rem, 1.2vw, .64rem);
    bottom: .6rem;
  }
}
```

---

## 13. Fase 12 — Página Home y App raíz

Ahora ensamblas todo.

### `src/pages/Home/Home.tsx`

```tsx
// src/pages/Home/Home.tsx

import heroImage from '../../assets/hero-placeholder.avif'
import { OrbsBackground } from '../../components/OrbsBackground/OrbsBackground'
import { Header } from '../../components/Header/Header'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { HeroImage } from '../../components/HeroImage/HeroImage'
import { Footer } from '../../components/Footer/Footer'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      {/* Decoración de fondo — detrás de todo (z-index 0) */}
      <OrbsBackground />

      {/* Header fijo en la parte superior */}
      <Header badgeText="Próximamente" />

      {/* Grid principal de dos columnas */}
      <div className={styles.page}>
        <HeroSection />
        <div className={styles.rightCol}>
          <HeroImage
            src={heroImage}
            alt="Ilustración de naturaleza y psicología"
          />
        </div>
      </div>

      {/* Footer fijo en la parte inferior */}
      <Footer year={2026} licenseNumber="12831580" />
    </>
  )
}
```

### `src/pages/Home/Home.module.css`

```css
/* src/pages/Home/Home.module.css */

.page {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  max-width: 1380px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  align-items: center;
  gap: clamp(2rem, 4vw, 5rem);
  padding: calc(var(--header-h) + 2.5rem) clamp(2rem, 6vw, 6rem) 2.5rem;
}

.rightCol {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}

@media (max-width: 840px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 1fr;
    gap: .6rem;
    padding: calc(var(--header-h) + .75vh) 0 calc(3rem + .5vh);
    align-items: stretch;
    height: 100vh;
    box-sizing: border-box;
  }

  /* En mobile: imagen arriba, contenido abajo */
  .rightCol {
    grid-row: 1;
    display: flex;
    align-items: stretch;
  }

  /* HeroSection irá a la fila 2 via su propio CSS si es necesario */
}
```

### `src/App.tsx` — conectar todo

```tsx
// src/App.tsx
import { Home } from './pages/Home/Home'

export default function App() {
  return <Home />
}
```

### Verificar que funciona

```bash
npm run dev
```

Abre `http://localhost:5173`. Deberías ver la landing page idéntica a la original.

---

## 14. Fase 13 — Responsive con CSS Modules

### Cómo funcionan las media queries en CSS Modules

Las media queries van **dentro del mismo archivo `.module.css`** del componente que estás haciendo responsive. No hay un archivo global de breakpoints.

```css
/* Dentro de cualquier .module.css */
.miComponente {
  font-size: 1rem;   /* Desktop */
}

@media (max-width: 840px) {
  .miComponente {
    font-size: .85rem;   /* Mobile */
  }
}
```

### Breakpoints usados en este proyecto

| Breakpoint | Valor | Uso |
|---|---|---|
| Mobile | `max-width: 840px` | Colapsa el grid a una columna |

### `clamp()` — la función más útil para responsive

```css
/* En lugar de escribir dos reglas: */
font-size: 5rem;   /* desktop */
@media ... { font-size: 2rem; }  /* mobile */

/* Usa clamp(mínimo, preferido, máximo): */
font-size: clamp(2rem, 4.4vw, 5.2rem);
/* Lee: "nunca menos de 2rem, preferiblemente 4.4% del viewport, nunca más de 5.2rem" */
```

`clamp()` es especialmente útil para tipografía, padding y gap porque escala suavemente sin saltos.

---

## 15. Errores comunes

Estos son los errores que cometen casi todos en su primer proyecto React+TS. Léelos antes de empezar para ahorrarte horas de debugging.

### ❌ Error 1: `class` en lugar de `className`

```tsx
// ❌ INCORRECTO — 'class' es palabra reservada en JavaScript
<div class={styles.container}>

// ✅ CORRECTO
<div className={styles.container}>
```

### ❌ Error 2: No poner `key` en listas

```tsx
// ❌ INCORRECTO — React mostrará warning y el comportamiento puede ser raro
{items.map(item => <BenefitCard label={item.label} />)}

// ✅ CORRECTO
{items.map(item => <BenefitCard key={item.label} label={item.label} />)}
```

### ❌ Error 3: Olvidar `rel="noopener noreferrer"` en links externos

```tsx
// ❌ INCORRECTO — vulnerabilidad de seguridad
<a href="https://..." target="_blank">...</a>

// ✅ CORRECTO
<a href="https://..." target="_blank" rel="noopener noreferrer">...</a>
```

### ❌ Error 4: Atributos SVG con guion en lugar de camelCase

```tsx
// ❌ INCORRECTO — JSX no acepta guiones en atributos
<svg stroke-width="2" stroke-linecap="round">

// ✅ CORRECTO
<svg strokeWidth="2" strokeLinecap="round">
```

### ❌ Error 5: Importar imágenes con ruta de string

```tsx
// ❌ INCORRECTO — la ruta puede romperse en producción
<img src="../../assets/logo.png" />

// ✅ CORRECTO — Vite resuelve y optimiza el path
import logo from '../../assets/logo.png'
<img src={logo} />
```

### ❌ Error 6: CSS global en lugar de CSS Module para componentes

```tsx
// ❌ INCORRECTO — los estilos contaminan toda la app
import './Header.css'
<div className="siteHeader">

// ✅ CORRECTO — los estilos son privados al componente
import styles from './Header.module.css'
<div className={styles.siteHeader}>
```

### ❌ Error 7: `for` en `<label>` en lugar de `htmlFor`

```tsx
// ❌ INCORRECTO
<label for="nombre">

// ✅ CORRECTO
<label htmlFor="nombre">
```

### ❌ Error 8: Definir arrays/objetos estáticos dentro del componente

```tsx
// ❌ INCORRECTO — se recrea en cada render innecesariamente
function HeroSection() {
  const BENEFITS = [...]   // nuevo array en memoria en cada render
  return ...
}

// ✅ CORRECTO — fuera del componente, se crea una sola vez
const BENEFITS = [...]

function HeroSection() {
  return ...
}
```

### ❌ Error 9: No usar `loading="lazy"` en imágenes

```tsx
// ❌ INCORRECTO — el navegador carga todas las imágenes inmediatamente
<img src={heroImage} alt="..." />

// ✅ CORRECTO — carga diferida, mejora el tiempo de carga inicial
<img src={heroImage} alt="..." loading="lazy" />
```

---

## 16. Qué sigue

Una vez que tengas la landing funcionando en React+TS, los siguientes pasos naturales son:

### Agregar una segunda página

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom  # ya incluido en react-router-dom v6+
```

Crea `src/pages/About/About.tsx` siguiendo el mismo patrón que `Home`. Luego actualiza `App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Build de producción

```bash
npm run build     # genera la carpeta dist/
npm run preview   # previsualiza el build localmente
```

### Deploy en Vercel (recomendado)

1. Sube el proyecto a GitHub.
2. Ve a [vercel.com](https://vercel.com), conecta tu cuenta de GitHub.
3. Importa el repositorio — Vercel detecta Vite automáticamente.
4. Cada push a `main` hace deploy automático.

Para mantener tu dominio `josenavarropsicologo.com`, agrega la variable `CNAME` en la configuración de Vercel.

### Migrar a TypeScript estricto

Ya tenemos `"strict": true` en `tsconfig.json`. A medida que agregues formularios o lógica más compleja, TypeScript te pedirá que seas más explícita con los tipos. Abraza eso — cada error de TypeScript es un bug que no llegará a producción.

---

## Resumen del flujo de trabajo

```
Instalar Node → crear proyecto Vite → limpiar boilerplate
  → tokens.css / global.css / animations.css
  → OrbsBackground (componente simple)
  → Header (props + importar asset)
  → íconos SVG como componentes
  → BenefitCard (variantes con tipos literales)
  → CTAButton (link externo seguro)
  → HeroImage (asset + CSS Modules)
  → HeroSection (composición + .map())
  → Footer
  → Home (ensamblado) + App.tsx
  → verificar responsive
  → npm run build
  → deploy en Vercel
```

---

**Documento generado por GitHub Copilot — 2026-03-28**  
*Referencia: [TSD.md](TSD.md) — Decisiones de arquitectura del proyecto*
