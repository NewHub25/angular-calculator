# Angular Calculator

**Angular Calculator** es una SPA (Single Page Application) que integra una calculadora completamente funcional dentro de una landing page interactiva. Este proyecto destaca por el uso avanzado de **CSS**, **Angular**, y **TypeScript**, aprovechando sus últimas características y patrones de desarrollo.

## Características Principales

### CSS Avanzado

- **CSS Nesting**: Permite una estructura de estilos más organizada y legible.
- **Transformaciones 3D**: `transform-style: preserve-3d` aplicado al título para crear un efecto visual dinámico.
- **Pseudoelementos mejorados**: Con `contain: paint` se asegura que los pseudoelementos no interfieran con el layout principal.
- **Efecto de iluminación en botones**: Implementado con `background-attachment: fixed` para dar un efecto de luz en los bordes de las teclas de la calculadora.
- **Grid Layout**: Utilizado para una distribución flexible y limpia del contenido.

### Angular y TypeScript

- **Hook AfterViewInit**: Se utiliza para asegurar que el DOM esté completamente cargado antes de manipular elementos.
- **ViewChild & ElementRef**: Para una gestión eficiente de los elementos nativos en Angular.
- **CommonModule**: Permite el uso de directivas esenciales como `ngFor` para manejar bucles en la vista.
- **Decoradores de TypeScript**: Añaden metadatos a clases y métodos, optimizando el código.

### Funcionalidades Extras

- **Soporte para números negativos**: La calculadora está diseñada para manejar operaciones con números negativos sin problemas.
- **Drag-and-drop**: Las teclas de la calculadora pueden moverse dentro de la pantalla gracias a la integración con **GSAP**, proporcionando una experiencia interactiva única.
- **Copiar resultado**: El resultado de las operaciones se puede copiar fácilmente al portapapeles.

## Instalación

Sigue los pasos a continuación para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/NewHub25/angular-calculator.git
   ```

2. Navegar al directorio del proyecto:

   ```bash
   cd angular-calculator
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar la aplicación en local:

   ```bash
   npm run start
   ```

5. Abrir en el navegador:

   Visita `http://localhost:4200` para ver la aplicación en ejecución.

## Tecnologías Utilizadas

- **Angular 18**: Para la creación de componentes reutilizables y manejo eficiente del DOM.
- **TypeScript**: Para escribir un código más robusto y tipado, incluyendo el uso de decoradores.
- **CSS**: Con técnicas avanzadas como Grid Layout, nesting, y animaciones para crear una interfaz de usuario interactiva.
- **GSAP**: Para animaciones fluidas y la funcionalidad drag-and-drop.
