# ⚙️ Guía de Implementación - DermaPicassent 2.0

## 🚀 Pasos Rápidos

### 1. **Reemplazar Archivos**
```bash
# Reemplaza en tu servidor:
✅ index.html    (versión 2.0 mejorada)
✅ styles.css    (versión 2.0 mejorada)
✅ script.js     (versión 2.0 mejorada)
```

### 2. **Información de Contacto** (Ya configurada)

La información de contacto está lista con:
- Teléfono clickeable
- Ubicación detallada
- Horarios claros
- Mapa interactivo

### 3. **Probar en Diferentes Dispositivos**

#### Desktop
- Abre en navegador: `http://localhost/index.html`
- Presiona F12 → DevTools
- Prueba todas las secciones

#### Móvil Simulado
1. F12 → Responsive Design Mode (Ctrl+Shift+M)
2. Prueba en:
   - iPhone 12 (390x844)
   - iPad (768x1024)
   - Samsung Galaxy S21 (360x800)

#### Móvil Real
1. Sube archivos a servidor
2. Accede desde tu teléfono
3. Prueba formulario, carrusel, navegación

### 4. **Verificar SEO**

#### Google Search Console
1. Ir a: https://search.google.com/search-console
2. Agregar propiedad (tu dominio)
3. Verificar que SEO is correcto

#### Lighthouse
1. Abre página
2. F12 → Tabs → Lighthouse
3. Selecciona "Desktop" o "Mobile"
4. Click "Analyze page load"
5. Objetivo: >80 en todos los aspectos

### 5. **Pruebas Funcionales**

#### Carrusel 🖼️
- [ ] Ver dots/indicadores en la parte inferior
- [ ] Click en dot siguiente → cambia imagen
- [ ] Click botón ▶ → cambia imagen
- [ ] Click botón ◀ → cambia imagen anterior
- [ ] Espera 8s → cambia automáticamente
- [ ] Pasar ratón → pausa autoplay
- [ ] Sacar ratón → reinicia autoplay

#### Navegación 🔗
- [ ] Click en "Inicio" → scroll a inicio
- [ ] Click en "Quiénes Somos" → scroll a sección
- [ ] Click en "Servicios" → scroll a servicios
- [ ] Todas las transiciones son suaves

#### Responsividad 📱
- [ ] Desktop: layout normal
- [ ] Tablet (768px): 2 columnas
- [ ] Móvil (480px): 1 columna
- [ ] Elementos se adaptan correctamente

---

## 🎨 Personalización

### Cambiar Colores

#### Color Primario (Azul)
En `styles.css`, busca `#1e54e9` y reemplaza:

```css
/* ANTES */
.navbar .nav-links a {
    color: #1e54e9;  /* ← AZUL
}

/* DESPUÉS */
.navbar .nav-links a {
    color: #ff6b35;  /* ← NARANJA (ejemplo)
}
```

**Lugares a cambiar:**
- `.navbar .nav-links a` (navegación)
- `.text-s2 h1` (títulos)
- `.title h1` (títulos de sección)
- `.btn-submit` (botón enviar)
- Y más... (busca todas las instancias)

**Recomendación:** Crea variables CSS:
```css
:root {
    --primary: #1e54e9;  /* Tu color aquí */
}

.navbar .nav-links a {
    color: var(--primary);
}
```

### Cambiar Fuente

En `styles.css`, línea 6:
```css
/* ANTES */
font-family: 'Calibri', Arial, sans-serif;

/* DESPUÉS */
font-family: 'Arial', sans-serif;
/* O cualquier otra fuente segura */
```

### Cambiar Contenido

#### Nombre de Clínica
En `index.html`, línea 15:
```html
<span class="company-name">Tu Nombre de Clínica</span>
```

#### Teléfono
En `index.html`, línea 137:
```html
961 234 925  ← Cambiar por tu teléfono
```

#### Ubicación
En `index.html`, líneas 140-142:
```html
Plaza Ausiàs March 1-1º-1ª, Picassent  ← Tu ubicación
```

#### Horarios
En `index.html`, línea 145:
```html
<span class="horario-item">Lunes: 16:30h - 20h</span>
<span class="horario-item">Miércoles: 9:30h - 13h, 16:30h - 20h</span>
<!-- Agregar/modificar según horario real -->
```

---

## 🐛 Solución de Problemas

### El formulario no envía emails

**Solución:**
1. Verifica tu ID en Formspree (script.js línea 87)
2. Abre DevTools (F12) → Console
3. Busca mensajes de error
4. Si ves error CORS, es normal (Formspree lo maneja)
5. Verifica email recibido en Formspree

### El carrusel no se mueve

**Solución:**
1. Verifica que existan imágenes (consulta1.jpeg, etc.)
2. Abre DevTools → Console para errores
3. Prueba con botones ◀ ▶ primero
4. Luego prueba autoplay

### La página no se ve responsive

**Solución:**
1. Limpiar caché: Ctrl+Shift+Delete
2. Recargar: Ctrl+F5 (hard reload)
3. DevTools → Desactivar cache
4. Probar en navegador privado

### Colores no se aplican

**Solución:**
1. Verificar sintaxis CSS (sin ; falta, etc.)
2. Limpiar caché del navegador
3. Hard reload: Ctrl+F5
4. DevTools → Inspect para verificar estilos aplicados

---

## 📱 Testing Mobile

### Checklist Móvil
- [ ] Navegación visible en pantalla pequeña
- [ ] Textos legibles sin zoom
- [ ] Botones clickeables (mínimo 44x44px)
- [ ] Imágenes cargan rápido
- [ ] Formulario se ve bien
- [ ] Mapa es interactivo
- [ ] No hay scroll horizontal

### Emuladores Recomendados
1. **Chrome DevTools** - Incorporado
2. **Firefox Mobile** - Requiere Firefox
3. **Responsively App** - Aplicación dedicada
4. **BrowserStack** - Testing real device

---

## 🔐 Seguridad

### Validación de Formulario
✅ Implementado:
- Email válido
- Campos requeridos
- Sin inyección XSS (usando .value, no innerHTML)
- CSRF protection (Formspree maneja)

### Privacy
✅ Implementado:
- No se almacenan datos de más de necesario
- LocalStorage solo si falla email
- Ojo con GDPR (agregar privacy policy)

---

## 🚀 Deploy

### Opción 1: GitHub Pages
```bash
1. Crear repo en GitHub
2. Subir archivos (index.html, styles.css, script.js)
3. Settings → Pages → Main branch
4. ¡Listo! Disponible en username.github.io
```

### Opción 2: Hosting Tradicional
```bash
1. FTP a tu host
2. Subir archivos a carpeta pública
3. Configurar dominio
4. Verificar en navegador
```

### Opción 3: Netlify (Recomendado)
```bash
1. Ir a netlify.com
2. Drag & drop carpeta
3. Conectar dominio
4. ¡Listo en segundos!
```

---

## 📊 Analytics

### Agregar Google Analytics
En `index.html`, antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Reemplazar `GA_ID` con tu ID de Google Analytics.

---

## 📞 Soporte

Si necesitas ayuda:
1. Revisa DevTools → Console para errores
2. Verifica que archivos estén en mismo directorio
3. Comprueba que URLs de imágenes sean correctas
4. Prueba en navegador diferente

---

## ✅ Checklist Final

Antes de lanzar:
- [ ] Todas las imágenes cargan
- [ ] Links van a las secciones correctas
- [ ] Móvil se ve bien
- [ ] Lighthouse score >80
- [ ] SEO verificado
- [ ] Teléfono y ubicación correctos
- [ ] Horarios actualizados
- [ ] Dominio configurado
- [ ] SSL certificado (HTTPS)
- [ ] Backup de archivos

---

**¡Listo para producción!** 🎉

Versión: 2.0  
Última actualización: 2026-06-02
