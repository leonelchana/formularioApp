import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit{


  //temporal
  nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';

constructor( private fb:FormBuilder){

}
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Leonel Chana'
    })
  }
  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
  }
}
