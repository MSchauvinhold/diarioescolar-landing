# Diario Escolar - Escuela Nº 227 "Cnel Simeón Payba"

Diario escolar digital desarrollado con React, Vite y Tailwind CSS.

## Características

- 📰 Diseño tipo diario con jerarquía editorial
- 🖼️ Carrusel multimedia (múltiples imágenes por noticia)
- 🔍 Filtro por secciones (Educación, Deportes, Institucional, Comunidad)
- 📱 Responsive (mobile-first)
- ⚡ Ordenamiento automático por fecha
- 🎨 Diseño limpio y profesional

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS 3

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Agregar/Editar Noticias

Todas las noticias se gestionan desde un único archivo: `src/data/news.ts`

### Agregar una noticia nueva:

```typescript
{
  id: 9, // número único
  title: 'Título de la noticia',
  summary: 'Resumen de la noticia...',
  media: [
    { type: 'image', url: 'https://url-imagen.jpg' }
  ],
  section: 'educacion', // o 'deportes', 'institucional', 'comunidad'
  date: '2026-01-20', // formato YYYY-MM-DD
  subtitle: 'Subtítulo opcional' // opcional
}
```

### Agregar múltiples imágenes:

```typescript
media: [
  { type: 'image', url: 'imagen1.jpg' },
  { type: 'image', url: 'imagen2.jpg' },
  { type: 'image', url: 'imagen3.jpg' }
]
```

## Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Desplegar en GitHub Pages

1. Instala el paquete gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega estos scripts en `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Agrega la base en `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nombre-del-repo/',
  // ...resto de la config
})
```

4. Despliega:
```bash
npm run deploy
```

## Desplegar en Vercel

1. Sube el proyecto a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Vite
4. Click en "Deploy"

## Desplegar en Netlify

1. Sube el proyecto a GitHub
2. Importa el repositorio en [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click en "Deploy"

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MediaCarousel.tsx
├── data/            # Datos de las noticias
│   └── news.ts
├── pages/           # Páginas
│   └── Home.tsx
├── types/           # Tipos TypeScript
│   └── news.ts
└── App.tsx          # Componente principal
```

## Licencia

MIT
