import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {

initForm={
  producto:'Celular note',
  precio:1000,
  existencia:10

}
  constructor() {}
  ngOnInit(): void {}
 @ViewChild('miFormulario')miFormulario!:NgForm;

nombreValido():boolean{
  return this.miFormulario?.controls['producto']?.invalid &&this.miFormulario?.controls['producto']?.touched ;
}

precioValido():boolean{
return this.miFormulario?.controls['precio']?.value<0 &&this.miFormulario?.controls['precio']?.touched ;
}

 /*  guardar(miFormulario:NgForm){ */
 guardar(){
  /*   console.log('submit hecho',this.miFormulario.controls['producto'].invalid);
   */
    this.miFormulario.resetForm(
      {precio:0,
      existencia:0},
    );


  }
}
