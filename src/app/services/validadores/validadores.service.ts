import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }


  validarContrasenia(contrasenia:any, confirmarContrasenia:any){
    return (formGroup: FormGroup)=> {
      const controlContrasenia = formGroup.controls[contrasenia];
      const controlCContrasenia = formGroup.controls[confirmarContrasenia];
      let errors = null;
      if(controlContrasenia.value==controlCContrasenia.value){ 
        controlCContrasenia.setErrors(null);        
      }else{              
        controlCContrasenia.setErrors({noIgual:true});        
      }
      return errors;
    }
  }

  validarMayorCero(control: FormControl):{[s:string]: boolean | null}{    
    let valor = control.value?.toString().replace(/\,/g, '');    
    if(!(valor>0)){
      return {
        mayorCero: true
      }
    }
    return {};
  }
}
