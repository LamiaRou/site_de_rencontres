import { NgModule } from  '@angular/core';
 
import {MatButtonModule,MatToolbarModule} from  '@angular/material';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],
exports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],

})
 
export  class  MyMaterialModule { }


