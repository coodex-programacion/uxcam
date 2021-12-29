import { WebPlugin } from '@capacitor/core';

import type { UXCamPlugin } from './definitions';

export class UXCamWeb extends WebPlugin implements UXCamPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
