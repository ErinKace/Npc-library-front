import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LibraryDisplayComponent } from './library-display/library-display.component';
import { LibraryListComponent } from './library-display/library-list/library-list.component';
import { CharaSmallComponent } from './library-display/library-list/chara-small/chara-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    LibraryDisplayComponent,
    LibraryListComponent,
    CharaSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
