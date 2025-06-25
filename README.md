
# CMFTracker

**CMFTracker** es una aplicación desarrollada en React Native para visualizar valores de indicadores financieros (como la UTM, IPC, etc.) desde la **CMF de Chile** (Comisión para el Mercado Financiero).

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

## Licencia

MIT

---

**Nota:** Actualiza los endpoints de la API y las variables de entorno según tus necesidades.
