import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { environment } from 'src/environments';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(environment.configuration.core),
    SharedModule.forRoot(environment.configuration.shared.root),

    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
