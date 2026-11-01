import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'br.com.kekelbarbearia.app',
  appName: 'Kekel Barbearia',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: { launchShowDuration: 1800, launchAutoHide: true, launchFadeOutDuration: 250 },
    PushNotifications: { presentationOptions: ['badge', 'sound', 'alert'] }
  }
};
export default config;
