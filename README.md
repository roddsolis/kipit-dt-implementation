### Paso 1

Para iniciar el proyecto de prueba necesitaremos crear un proyecto con vite para esto vamos a ejecutar el siguiente comando:

```console
npm create vite@latest . -- --template vanilla
```

### Paso 2

Instalamos las dependencias del proyecto

```console
npm i
```

### Paso 3

Levantamos el proyecto para visualizar

```console
npm run dev
```

### Paso 4

Instalamos style dicctionary, el paquete de transformadores de tokens studio y sass para convertir los tokens que vienen desde figma al formato css y scss.

```console
npm install style-dictionary@latest @tokens-studio/sd-transforms sass
```

### Paso 5

dentro del archivo package.json modificamos o agregamos el script que ejecuta style dicctionary para convertir los tokens.

```console
"build-tokens": "node build-tokens.js"
```

### Paso 6

Ejecutamos el script que permite separar el archivo tokens.json en archivos independedientes

```console
node src/tokens/splitTokens.js
```

### Paso 7

convertimos los tokens a scss y css ejecutando el siguiente comando, que creara 2 archivos, variables.scss y variables.css en la ruta src/styles

```console
npm run build-tokens
```
