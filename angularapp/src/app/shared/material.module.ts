import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule {}
