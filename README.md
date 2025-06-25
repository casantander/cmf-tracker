
# CMFTracker

**CMFTracker** es una aplicación desarrollada en React Native para visualizar valores de indicadores financieros (como la UTM, IPC, etc.) desde la **CMF de Chile** (Comisión para el Mercado Financiero).

![Captura de pantalla CMFTracker](https://i.postimg.cc/d0MgK1KC/e4a463df-c84f-4d73-b874-7391148e9e08.jpg)

## Funcionalidades

- Visualización de valores de indicadores del año actual o últimos 30 días  
- Interfaz rápida y responsiva con skeletons de carga  
- Navegación entre pantallas  
- Soporte completo para TypeScript

## Estructura del Proyecto

```
.
├── App.tsx
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   └── types/
├── android/
├── ios/
└── ...
```

## Primeros Pasos

### Requisitos Previos

- Node.js  
- npm o yarn  
- Android Studio o Xcode (para ejecutar en dispositivos o emuladores)
- Openjdk 17
>**Nota**: Asegúrese de haber completado las instrucciones [React Native - Configuración de ambiente](https://reactnative.dev/docs/environment-setup) hasta el paso "Crear una nueva aplicación", antes de continuar.

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/casantander/cmf-tracker.git
cd CMFTracker
```

2. Instalar dependencias:

```bash
npm install --legacy-peer-deps
# o
yarn install --legacy-peer-deps
```

3. Iniciar el bundler de Metro:

```bash
npx react-native start
```

4. Ejecutar la aplicación:

- Para Android:

```bash
npx react-native run-android
```

- Para iOS:

```bash
npx react-native run-ios
```

## Scripts Disponibles

- `npm run start` — Inicia Metro bundler  
- `npm run android` — Ejecuta en dispositivo/emulador Android  
- `npm run ios` — Ejecuta en simulador iOS

## Librerías
### react-native-community/netinfo
Se utiliza para detectar si el dispositivo está conectado a internet. En el caso de que no esté conectado, se muestra un mensaje.
![Estado conexión](https://i.postimg.cc/L5JL3j8g/1e6f0adb-e91d-4404-ba09-ecce9f22d61e.jpg)

### react-native-wagmi-charts
Con esta librería es posible generar un gráfico con la información obtenida.

![Grafico](https://i.postimg.cc/XNhxrYsD/79120258-82af-40eb-abab-38c7a3f516d0.jpg)

## Licencia

MIT

---

**Nota:** Actualiza los endpoints de la API y las variables de entorno según tus necesidades.
