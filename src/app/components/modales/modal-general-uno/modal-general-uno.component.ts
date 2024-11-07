import { Component, EventEmitter, HostBinding, inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faAdd, faClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListasMaestrasService } from '../../../services/listasMaestras/listas-maestras.service';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { ValidadoresService } from '../../../services/validadores/validadores.service';

@Component({
  selector: 'app-modal-general-uno',
  standalone: false,
  templateUrl: './modal-general-uno.component.html',
  styleUrl: './modal-general-uno.component.scss'
})
export class ModalGeneralUnoComponent implements OnInit {

  formBuild = inject(FormBuilder);
  usuariosService = inject(UsuariosService);
  listasMaestrasService = inject(ListasMaestrasService);
  serviciosValidacion = inject(ValidadoresService);

  @Output() cerrar: EventEmitter<Boolean> = new EventEmitter();

  @HostBinding('style.--principal') principalColor: any;
  @HostBinding('style.--textos') textoColor: any;
  @HostBinding('style.--secundario') secundariosColor: any;
  @HostBinding('style.--textos_secundarios') textosSecundariosColor: any;
  @HostBinding('style.--texto_presentacion_modelo_uno') textoPresentacionModeloUno: any;
  @HostBinding('style.--texto_presentacion_modelo_dos') textoPresentacionModeloDos: any;

  formularioRegistro!: FormGroup;

  tituloHeader: string = 'Registro';
  tituloBody: string = 'Usuario';
  subtitulo: string = 'Ubicación';
  preguntaTipoDeUsuario: string = '¿Deseas crear una pagina web con nosotros?';
  preguntaTipoPagina: string = '¿Que tipo de pagina quieres crear?';
  preguntaColoresPagina: string = '¿Que colores llevara tu pagina?';
  afirmacionTipoUsuarioPlaceHolder: string = 'Escoge una opción';

  modalRegistro: boolean = false;
  direcciones: boolean = false;

  rolesDeUsuarios:any[] = [];
  listaDePaginas:any[] = [
    { etiqueta: 'Ecommerse', id: 1 }
  ];

  faClose = faClose;
  faAdd = faAdd;
  faTrash = faTrash;

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario() {
    this.formularioRegistro = this.formBuild.group({
      nombres: [null, [Validators.required]],
      apellidos: [null, [Validators.required]],
      nombreUsuario: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmado: [null, [Validators.required]],
      confirmarContrasenia: [null, [Validators.required]],
      tipoPagina: [null, [Validators.required]],
      colorUno: ['#ce5555', [Validators.required]],
      colorDos: ['#7788df', [Validators.required]],
      colorTres: ['#ffffff', [Validators.required]],
      direcciones:  this.formBuild.array([])
    }, {
      validators: [
        this.serviciosValidacion.validarContrasenia('password', 'confirmarContrasenia')
      ]
    }
    );
  }

  get listadoDirecciones() {
    return this.formularioRegistro.get('direcciones') as FormArray;
  }

  guardarDireccion(direcciones: any = null) {
    this.listadoDirecciones.push(this.nuevaDireccion(direcciones))
  }
  

  nuevaDireccion(direcciones: any = null) {

    let calle = null;
    let ciudad = null;
    let estado = null;
    let codigoPostal = null;
    let pais = null;

    if (direcciones) {
      if (direcciones.calle) calle = direcciones.calle;
      if (direcciones.ciudad) ciudad = direcciones.ciudad;
      if (direcciones.estado) estado = direcciones.estado;
      if (direcciones.codigoPostal) codigoPostal = direcciones.codigoPostal;
      if (direcciones.pais) pais = direcciones.pais;
    }

    return this.formBuild.group({
      calle: [calle, [Validators.required]],
      ciudad: [ciudad, [Validators.required]],
      estado: [estado, [Validators.required]],
      codigoPostal: [codigoPostal, [Validators.required]],
      pais: [pais, [Validators.required]]
    })

  }

  eliminarDireccion(indice: number) {
    this.listadoDirecciones.removeAt(indice);
  }

  obtenerListasMaestras() {
    this.listasMaestrasService.obtenerListasMaestras().subscribe(res => {
      this.rolesDeUsuarios = res;
    })
  }

  registrarUsuario() {

    const body = {
      nombres: this.formularioRegistro.get('nombres')?.value,
      apellidos: this.formularioRegistro.get('apellidos')?.value,
      nombreUsuario: this.formularioRegistro.get('nombreUsuario')?.value,
      correo: this.formularioRegistro.get('correo')?.value,
      password: this.formularioRegistro.get('password')?.value,
      direcciones: this.listadoDirecciones.value
    };

    this.usuariosService.guardarUsuario(body).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta);
        this.cerrarModal();
      },
      error: (error: any) => {
        console.log(error);
      }
    })

  }


  cambioDeColores(){
    this.principalColor = this.formularioRegistro.get('colorUno')?.value;
    this.secundariosColor = this.formularioRegistro.get('colorDos')?.value;
    this.textoColor = this.formularioRegistro.get('colorTres')?.value;
  }

  cerrarModal() {
    this.cerrar.emit(true);
  }

}
