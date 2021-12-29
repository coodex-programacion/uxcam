import { registerPlugin } from '@capacitor/core';

import type { UXCamPlugin } from './definitions';

const UXCam = registerPlugin<UXCamPlugin>('UXCam', {
  web: () => import('./web').then(m => new m.UXCamWeb()),
});

export * from './definitions';
export { UXCam };
