import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiConnectivityComponent } from './api-connectivity/api-connectivity.component';
import { DummyComponent } from './dummy/dummy.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "pqr", component: ApiConnectivityComponent },
    { path: "lmn", component: DirectiveDemoComponent },
    { path: "xyz", component: PipesDemoComponent },
    { path: "king", component: ReactiveFormDemoComponent },
    { path: "queen", component: DummyComponent },
    { path: "**", component: NotFoundComponent },
];
