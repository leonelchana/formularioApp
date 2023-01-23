import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Xp',
      precio:1600,
    })
  }
/*   miFormulario:FormGroup=new FormGroup({
    nombre:     new FormControl('XP'),
    precio:     new FormControl(1500),
    existencia: new FormControl(10),
  }) */

  miFormulario:FormGroup=this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    precio:[,[Validators.required,Validators.min(0)]],
    existencia:[,[Validators.required,Validators.min(0)]],
  })

  constructor(private fb:FormBuilder){}
 
 campoEsValido(campo:string){
  return this.miFormulario.controls[campo]?.errors
        && this.miFormulario.controls[campo]?.touched;
 }
  
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
