# Clase Práctica de TypeScript

> **Duración estimada:** ~1 hora  
> **Nivel:** Desarrolladores con conocimientos previos en JavaScript

---

## Tabla de Contenidos

1. [Prerequisitos](#prerequisitos)
2. [¿Por qué TypeScript?](#por-qué-typescript)
3. [Bibliografía y Recursos](#bibliografía-y-recursos)
4. [Configuración del Proyecto](#configuración-del-proyecto)
5. [El Compilador `tsc`](#el-compilador-tsc)
6. [ECMAScript](#ecmascript)
7. [Ejercicio Práctico: Lista de Personas](#ejercicio-práctico-lista-de-personas)
8. [Configuración con `tsconfig.json`](#configuración-con-tsconfigjson)
9. [Módulos: Import y Export](#módulos-import-y-export)
10. [Instalación de Dependencias](#instalación-de-dependencias)

---

## Prerequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

| Herramienta | Versión mínima | Verificar instalación  |
| ----------- | -------------- | ---------------------- |
| Node.js     | 22 o superior  | `node --version`       |
| npm         | incluido con Node | `npm --version`     |
| pnpm        | última estable | `pnpm --version`       |

### Instalación de pnpm

Si aún no tienes `pnpm`, instálalo siguiendo la guía oficial:

🔗 [https://pnpm.io/installation#on-windows](https://pnpm.io/installation#on-windows)

```bash
# Opción rápida con npm
npm install -g pnpm
```

---

## ¿Por qué TypeScript?

### Análisis de Código Estático

TypeScript detecta **inconsistencias en las estructuras de datos** antes de ejecutar el código. Incluso en archivos JavaScript puedes obtener beneficios básicos usando la directiva:

```javascript
// @ts-check

/** @type {number} */
let count = "hello"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

> 💡 **`// @ts-check`** activa la verificación de tipos en archivos `.js` sin necesidad de migrar a `.ts`.

### Tendencia de Uso

TypeScript se ha consolidado como una herramienta esencial en el ecosistema JavaScript. Consulta las siguientes métricas:

- 📊 [JetBrains Developer Ecosystem Survey 2024](https://www.jetbrains.com/es-es/lp/devecosystem-2024/) — TypeScript aparece consistentemente entre los lenguajes de mayor crecimiento.
- 📦 [TypeScript en npm](https://www.npmjs.com/package/typescript) — Más de **50 millones de descargas semanales**.

---

## Bibliografía y Recursos

| Recurso | Enlace |
| ------- | ------ |
| Documentación oficial de TypeScript | [typescriptlang.org](https://www.typescriptlang.org/) |
| Guía de JavaScript (MDN) | [developer.mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide) |
| Tutorial TypeScript (W3Schools) | [w3schools.com/typescript](https://www.w3schools.com/typescript/index.php) |

---

## Configuración del Proyecto

### 1. Inicializar el proyecto

```bash
pnpm init
```

Esto genera un archivo `package.json` con la configuración base del proyecto.

### 2. Instalar TypeScript como dependencia de desarrollo

```bash
pnpm add --save-dev typescript
```

### 3. Verificar la instalación

```bash
pnpm exec tsc --version
```

---

## El Compilador `tsc`

`tsc` (TypeScript Compiler) es la herramienta que transforma archivos `.ts` en archivos `.js`.

### Flags principales

| Flag | Descripción | Ejemplo |
| ---- | ----------- | ------- |
| `--target` | Versión de ECMAScript de salida | `tsc --target ES2022 archivo.ts` |
| `--outDir` | Directorio de salida para los archivos compilados | `tsc --outDir dist archivo.ts` |
| `--watch` | Recompila automáticamente al detectar cambios | `tsc --watch archivo.ts` |

### Ejemplo de compilación

```bash
# Compilar un archivo específico
pnpm exec tsc src/data.ts --target ES2022 --outDir dist

# Compilar en modo watch
pnpm exec tsc src/data.ts --target ES2022 --outDir dist --watch
```

---

## ECMAScript

**ECMAScript (ES)** es la especificación estándar en la que se basa JavaScript. Define la sintaxis, tipos, y las API del lenguaje.

> TypeScript compila a una versión específica de ECMAScript según la configuración de `target`.

### ¿Por qué es importante?

- Define qué características del lenguaje están disponibles.
- Garantiza la **compatibilidad** entre navegadores y entornos de ejecución.
- Cada nueva versión introduce mejoras significativas.

### Aportaciones de ES6 (ES2015)

ES6 fue un punto de inflexión para JavaScript. Estas son algunas de las características más relevantes:

```typescript
// 1. Arrow Functions
const greet = (name: string): string => `Hola, ${name}`;

// 2. Template Literals
const message = `El resultado es: ${1 + 2}`;

// 3. Destructuring
const { firstName, lastName } = { firstName: "Carlos", lastName: "García" };

// 4. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 5. let y const (reemplazo de var)
let mutable = 10;
const immutable = 20;

// 6. Clases
class Animal {
  constructor(public name: string) {}
  speak(): string {
    return `${this.name} hace un sonido`;
  }
}

// 7. Módulos (import/export)
// → Se cubren en detalle más adelante

// 8. Promises
const fetchData = (): Promise<string> =>
  new Promise((resolve) => resolve("datos"));
```

---

## Ejercicio Práctico: Lista de Personas

### Objetivo

Crear un script en TypeScript que defina un tipo `Person`, genere una lista de personas y la muestre en consola.

### Instrucciones

1. Crea el archivo `src/data.ts`.
2. Usa el siguiente prompt en **GitHub Copilot** para generar el código base:

> **Prompt:** *generate an script that show a list of person on console. Generate person data type and use Typescript good practices.*

### Solución de referencia

```typescript
// filepath: src/data.ts
interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const people: ReadonlyArray<Person> = [
  { id: 1, firstName: "Carlos", lastName: "García", age: 30, email: "carlos.garcia@example.com" },
  { id: 2, firstName: "María", lastName: "López", age: 25, email: "maria.lopez@example.com" },
  { id: 3, firstName: "Juan", lastName: "Martínez", age: 40, email: "juan.martinez@example.com" },
  { id: 4, firstName: "Ana", lastName: "Rodríguez", age: 35, email: "ana.rodriguez@example.com" },
  { id: 5, firstName: "Luis", lastName: "Hernández", age: 28, email: "luis.hernandez@example.com" },
];

const formatFullName = (person: Person): string =>
  `${person.firstName} ${person.lastName}`;

const printPeopleList = (personList: ReadonlyArray<Person>): void => {
  console.log("=== Lista de Personas ===\n");

  personList.forEach((person) => {
    console.log(
      `ID: ${person.id} | Nombre: ${formatFullName(person)} | Edad: ${person.age} | Email: ${person.email}`
    );
  });

  console.log("\n--- Vista en tabla ---\n");
  console.table(
    personList.map(({ id, firstName, lastName, age, email }) => ({
      ID: id,
      Nombre: `${firstName} ${lastName}`,
      Edad: age,
      Email: email,
    }))
  );

  console.log(`\nTotal de personas: ${personList.length}`);
};

printPeopleList(people);
```

### Ejecutar el ejercicio

```bash
# Compilar y ejecutar
pnpm exec tsc src/data.ts --target ES2022 --outDir dist
node dist/data.js
```

### Buenas prácticas aplicadas

- ✅ **`interface`** en lugar de `type` para definir la estructura de datos.
- ✅ **`readonly`** en `id` para evitar mutaciones accidentales.
- ✅ **`ReadonlyArray`** para proteger la colección completa.
- ✅ **Tipos de retorno explícitos** en todas las funciones.
- ✅ **`const`** para todas las declaraciones.
- ✅ **Funciones puras** para la lógica de formato.

---

## Configuración con `tsconfig.json`

### Generar el archivo de configuración

```bash
pnpm exec tsc --init
```

Esto crea un archivo `tsconfig.json` con valores por defecto y comentarios explicativos.

### Estructura y propiedades más importantes

```jsonc
// filepath: tsconfig.json
{
  "compilerOptions": {
    /* Lenguaje y Entorno */
    "target": "ES2022",                        // Versión de ECMAScript de salida
    "lib": ["ES2022"],                         // Librerías de tipos incluidas

    /* Módulos */
    "module": "commonjs",                      // Sistema de módulos
    "moduleResolution": "node",                // Estrategia de resolución de módulos
    "esModuleInterop": true,                   // Interoperabilidad con módulos ES

    /* Emisión */
    "outDir": "./dist",                        // Directorio de salida
    "rootDir": "./src",                        // Directorio raíz del código fuente
    "sourceMap": true,                         // Generar mapas de código fuente

    /* Verificación de tipos */
    "strict": true,                            // Habilitar TODAS las verificaciones estrictas
    "noImplicitAny": true,                     // Error en tipos 'any' implícitos
    "strictNullChecks": true,                  // Verificación estricta de null/undefined

    /* Otras opciones */
    "skipLibCheck": true,                      // Saltar verificación de archivos .d.ts
    "forceConsistentCasingInFileNames": true   // Forzar consistencia en nombres de archivo
  },
  "include": ["src/**/*"],                     // Archivos a incluir
  "exclude": ["node_modules", "dist"]          // Archivos a excluir
}
```

> 💡 Con `tsconfig.json` configurado, basta ejecutar `pnpm exec tsc` sin argumentos adicionales.

---

## Módulos: Import y Export

TypeScript usa el sistema de módulos de ES para organizar el código en archivos independientes.

### Tipos de export

```typescript
// filepath: src/models/person.ts

// Named export
export interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

// Named export de función
export const formatFullName = (person: Person): string =>
  `${person.firstName} ${person.lastName}`;

// Default export
const MAX_PEOPLE = 100;
export default MAX_PEOPLE;
```

### Tipos de import

```typescript
// filepath: src/main.ts

// Named import
import { Person, formatFullName } from "./models/person";

// Default import
import MAX_PEOPLE from "./models/person";

// Import con alias
import { Person as PersonType } from "./models/person";

// Import de todo el módulo
import * as PersonModule from "./models/person";
```

---

## Instalación de Dependencias

### Dependencias nativas de TypeScript

Estas librerías están escritas en TypeScript o incluyen sus propios tipos (archivos `.d.ts`). **No requieren paquetes adicionales** para tipado.

```bash
# Instalar directamente — los tipos ya están incluidos
pnpm add zod
pnpm add date-fns
pnpm add -g @angular/cli
```

| Paquete | Descripción |
| ------- | ----------- |
| `zod` | Validación de esquemas con inferencia de tipos |
| `date-fns` | Utilidades para manipulación de fechas |
| `@angular/cli` | CLI del framework Angular |

### Dependencias JavaScript sin soporte nativo para TypeScript

Estas librerías están escritas en JavaScript puro y **no incluyen archivos de tipos**. Necesitas instalar los tipos por separado desde el repositorio [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

```bash
# Instalar la librería + sus tipos
pnpm add lodash
pnpm add --save-dev @types/lodash

pnpm add express
pnpm add --save-dev @types/express

pnpm add react
pnpm add --save-dev @types/react

# Tipos para las APIs nativas de Node.js
pnpm add --save-dev @types/node

pnpm add jquery
pnpm add --save-dev @types/jquery
```

| Paquete | Tipos | Convención |
| ------- | ----- | ---------- |
| `lodash` | `@types/lodash` | `@types/<nombre-paquete>` |
| `express` | `@types/express` | `@types/<nombre-paquete>` |
| `react` | `@types/react` | `@types/<nombre-paquete>` |
| `node` | `@types/node` | APIs nativas de Node.js |
| `jquery` | `@types/jquery` | `@types/<nombre-paquete>` |

### 📦 DefinitelyTyped

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) es el repositorio comunitario más grande de definiciones de tipos para TypeScript. Aloja los paquetes `@types/*` que se publican en npm.

> 🔍 **Tip:** Para saber si una librería necesita `@types`, busca el icono **TS** en su página de npm. Si lo tiene, los tipos ya están incluidos.

### Dependencias vs. Dependencias de Desarrollo

| Tipo | Flag | Propósito | Ejemplo |
| ---- | ---- | --------- | ------- |
| **Dependencia** | `pnpm add <paquete>` | Necesaria en producción (runtime) | `zod`, `express`, `lodash` |
| **Dependencia de desarrollo** | `pnpm add --save-dev <paquete>` | Solo para desarrollo/compilación | `typescript`, `@types/*` |

```jsonc
// package.json
{
  "dependencies": {
    "zod": "^3.23.0",        // Se usa en runtime
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",  // Solo para compilar
    "@types/express": "^4.17.0",
    "@types/node": "^22.0.0"
  }
}
```

> ⚠️ Los paquetes `@types/*` y `typescript` deben ir **siempre** en `devDependencies`, ya que solo se necesitan durante el desarrollo y la compilación.
