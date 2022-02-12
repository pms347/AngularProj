import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CalcComponent } from './calc/calc.component';
import { NotepadComponent } from './notepad/notepad.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  {path:'calc', component:CalcComponent},
  {path:'notepad', component:NotepadComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    NotepadComponent
  ],
  imports: [
    AppRoutingModule,RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,MatCardModule,
    MatIconModule,MatInputModule,
    MatListModule,TextFieldModule,MatFormFieldModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
