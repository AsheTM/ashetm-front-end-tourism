import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { environment } from 'src/environments';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(environment.configuration.core),
    SharedModule.forRoot(environment.configuration.shared.root),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
