import { NgModule } from '@angular/core';

import { NewautomacSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NewautomacSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NewautomacSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NewautomacSharedCommonModule {}
