import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoListComponent } from './pinguino-list/pinguino-list.component';
import { PinguinoComponent } from './pinguino.component';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PinguinoListComponent,PinguinoComponent, PinguinoDetailComponent],
  exports:[PinguinoListComponent,PinguinoComponent, PinguinoDetailComponent]
})
export class PinguinoModule { }
