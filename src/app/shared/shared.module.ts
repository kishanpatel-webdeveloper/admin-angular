import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatExpansionModule,
  MatRadioModule
} from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule, MatCheckboxModule,
    MatButtonToggleModule, MatChipsModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  exports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    FormsModule,
    FlexLayoutModule,
    FooterComponent, NavbarComponent, ToolbarComponent,
    RouterModule],
  declarations: [FooterComponent, NavbarComponent, ToolbarComponent],
  entryComponents: []
})
export class SharedModule {
  /*** This static forRoot block (provides and configures services) is
* used in case of when we want use some services in one or more components.
*/
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
