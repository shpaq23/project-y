import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRootModule } from './app/ui/AppRootModule';

platformBrowserDynamic()
  .bootstrapModule(AppRootModule)
  .catch((err) => console.error(err));
