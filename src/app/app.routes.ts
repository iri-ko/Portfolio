import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {path: '', component: MainpageComponent },
    {path: 'imprint', component: ImprintComponent},
    {path: 'privacy', component: PrivacyComponent}
];
