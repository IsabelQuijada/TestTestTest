# Technical Solution Design: José Navarro Psicólogo Landing Page

## 1. Overview

Este documento describe la solución técnica y el diseño visual implementado para la landing page "José Navarro Psicólogo". El objetivo es dejar una referencia clara y reutilizable sobre la estructura, estilos, paleta de colores, tipografías, imágenes y componentes clave del sitio.

---

## 2. Estructura de Archivos

- `index.html`: Página principal.
- `styles.css`: Hoja de estilos global.
- `Assets/`: Carpeta de imágenes y logotipos.
    - `JoseNavarroLogo.png`: Logotipo principal.
    - `ImagenPlaceHolder.avif`: Imagen ilustrativa de la portada.
- `favicon.html`: Favicon.
- `CNAME`: Configuración de dominio personalizado.

---

## 3. Paleta de Colores

| Nombre        | Variable CSS      | Color         | Uso principal                        |
|---------------|-------------------|--------------|--------------------------------------|
| Ink           | --ink             | #071224      | Texto principal, títulos             |
| Navy          | --navy            | #173450      | Líneas, detalles, gradientes         |
| Teal          | --teal            | #0c84af      | Botones, acentos, íconos             |
| Teal Dark     | --teal-dk         | #0a6889      | Hover, bordes, badge                 |
| Teal Light    | --teal-lt         | rgba(12,132,175,.11) | Fondos suaves, orbes decorativos |
| Sage          | --sage            | #2c9060      | Acentos secundarios, íconos          |
| Sage Light    | --sage-lt         | rgba(44,144,96,.11)  | Fondos suaves, orbes decorativos |
| Gold          | --gold            | #c29438      | Detalles, íconos                     |
| Fondo         | --bg              | #eaf1f8      | Fondo general                        |
| Surface       | --surface         | #ffffff      | Tarjetas, superficies                |
| Glass         | --glass           | rgba(255,255,255,.70) | Efectos de vidrio, blur           |
| Texto         | --text            | #1a2c3d      | Texto general                        |
| Muted         | --muted           | #4e6272      | Texto secundario                     |
| Border        | --border          | rgba(22,52,80,.08) | Bordes sutiles                   |

---

## 4. Tipografías

- **Principal:** `Raleway`, sans-serif
    - Usada en la mayoría de los textos, títulos y botones.
- **Secundaria:** `Cormorant Garamond`, serif
    - Opcional para citas o textos destacados.
- **Decorativa:** `Alex Brush`, cursiva
    - Usada en el apellido "navarro" del logo.

Fuentes importadas desde Google Fonts:
```
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Raleway:wght@300;400;500;600;700&family=Alex+Brush&display=swap" rel="stylesheet" />
```

---

## 5. Componentes y Estilos Clave

### Header (Logo y Marca)
- Logo: `Assets/JoseNavarroLogo.png` (SVG/PNG)
- Marca:
    - "José": Raleway, 1.25rem, bold, color principal.
    - "navarro": Alex Brush, 1.75rem, gris decorativo.
    - "Psicólogo": Raleway, .62rem, mayúsculas, espaciado amplio.
- Badge: "Próximamente", fondo blanco translúcido, borde teal, texto teal oscuro.

### CTA Principal
- Botón: `Agendar primera consulta`
    - Color de fondo: `var(--teal)`
    - Texto: blanco, bold, fuente Raleway.
    - Ícono: SVG de WhatsApp, color blanco.
    - Padding generoso, border-radius alto.
    - Hover: puede usarse `var(--teal-dk)`.
    - Enlace a WhatsApp con mensaje prellenado.

### Tarjetas de Beneficio
- Tres tarjetas tipo "pill":
    - Íconos SVG personalizados (corazón, escudo, reloj).
    - Fondo blanco translúcido, sombra sutil.
    - Texto centrado, color principal.
    - Bordes y acentos según color del ícono.

### Headline y Subtítulo
- Headline: "Un lugar seguro está naciendo para ti."
    - "seguro": destacado en azul (`var(--teal)`).
    - "naciendo": destacado en verde (`var(--sage)`).
    - Fuente: Cormorant Garamond o Raleway, tamaño grande.
- Subtítulo: Texto explicativo, color muted.

### Imagen Principal
- Imagen ilustrativa: `Assets/ImagenPlaceHolder.avif`
    - Alt: "Ilustración de naturaleza y psicología"
    - Tamaño responsivo, borde redondeado opcional.

### Footer
- Texto legal, año, nombre, cédula profesional.
- Separadores con puntos.

---

## 6. Efectos Visuales y Decorativos

- Orbes de fondo: Gradientes circulares teal y sage, desenfocados.
- Líneas y puntos decorativos en la columna izquierda.
- Gradientes sutiles en el fondo general.
- Efecto glassmorphism en header y tarjetas.

---

## 7. Responsive Design

- Uso de `clamp()` y `vw` para paddings y gaps.
- Grid de dos columnas en desktop, stack en mobile.
- Imágenes y botones adaptativos.

---

## 8. Accesibilidad

- Contraste suficiente en textos y botones.
- `alt` descriptivo en imágenes.
- Navegación por teclado posible.

---

## 9. Reutilización

Este documento puede servir como base para otros proyectos de landing page profesional:
- Reutilizar la estructura de header, headline, cta y footer.
- Adaptar la paleta de colores y tipografías según la marca.
- Mantener la semántica y accesibilidad.

---

## 10. Referencias

- [Google Fonts](https://fonts.google.com/)
- [ColorBox](https://www.colorbox.io/)
- [SVG Repo](https://www.svgrepo.com/)

---

**Autor:** GitHub Copilot — Technical Solution Design, 2026
