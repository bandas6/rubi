import { Component, EventEmitter, HostBinding, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faAdd, faClose, faExclamationCircle, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Authentication } from '../../../pages/interfaces/auth.interfaces';
import { AuthService } from '../../../services/auth/auth.service';
import { ListasMaestrasService } from '../../../services/listasMaestras/listas-maestras.service';
import { TokenService } from '../../../services/token/token.service';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { OtrosLocalStorageService } from '../../../services/utils/otros-local-storage.service';
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
  authService = inject(AuthService);
  tokenService = inject(TokenService);
  otrosLocalService = inject(OtrosLocalStorageService);
  listasMaestrasService = inject(ListasMaestrasService);
  serviciosValidacion = inject(ValidadoresService);

  @Input() direcciones: boolean = true;
  @Input() modoEdicion: boolean = false;

  @Output() cerrar: EventEmitter<Boolean> = new EventEmitter();

  @HostBinding('style.--principal') principalColor: any;
  @HostBinding('style.--secundario') secundariosColor: any;
  @HostBinding('style.--textos') textoColor: any;
  @HostBinding('style.--textos_secundarios') textosSecundariosColor: any;
  @HostBinding('style.--texto_presentacion_modelo_uno') textoPresentacionModeloUno: any;
  @HostBinding('style.--texto_presentacion_modelo_dos') textoPresentacionModeloDos: any;

  formularioRegistro!: FormGroup;

  // Textos de la pagina web
  tituloHeader: string = 'Registro';
  tituloBody: string = 'Usuario';
  subtitulo: string = 'Ubicación';
  preguntaTipoDeUsuario: string = '¿Deseas crear una pagina web con nosotros?';
  preguntaNombrePagina: string = '¿Cual sera el nombre de tu pagina?';
  preguntaTipoPagina: string = '¿Que tipo de pagina quieres crear?';
  preguntaColoresPagina: string = '¿Que colores llevara tu pagina?';
  preguntaEresDesarollador: string = '¿Eres Desarrollador y quieres verder tus servicios o compartir tus plantillas a terceros?';
  preguntaQuieresAgregarUbicacion: string = '¿Deseas agregar datos de ubicación?';
  afirmacionTipoUsuarioPlaceHolder: string = 'Escoge una opción';
  seleccionasteEresDesarrollador: string = 'Al guardar se creara un perfil tipo desarrollador, este te permitira agregar plantillas y solicitar plantillas de otros usuarios como prestamo tambien prodras prestar tus servicios de desarrollador';
  seleccionasteNoEresDesarrollador: string = 'Se creara el perfil como moderador del sitio o administrador este debe ser aprobado para poder acceder a dotas sus funciones';
  descipcionCabeceraVisorDeColores: string = 'Cabecera de pruebas, segun los colores que elijas.';

  usuarioAuth!: Authentication;
  
  modalRegistro: boolean = false;
  mostrarPover: boolean = true;

  rolesDeUsuarios:any[] = [];
  tipoPaginas:any[] = [];

  faClose = faClose;
  faAdd = faAdd;
  faTrash = faTrash;
  faUserCircle = faUserCircle;
  faExclamationCircle = faExclamationCircle;

  ngOnInit(): void {
    this.construirFormulario();
    this.obtenerListasMaestras();
    this.obtenerUsuarioLogueado();
    console.log(this.usuarioAuth)
    if(this.modoEdicion){
      this.formularioRegistro.patchValue({
        nombres: this.usuarioAuth.nombres,
        apellidos: this.usuarioAuth.apellidos,
        nombreUsuario: this.usuarioAuth.nombreUsuario,
        correo: this.usuarioAuth.correo,
        confirmarCliente: this.usuarioAuth.pagina?'true':'false',
        nombrePagina: this.usuarioAuth.pagina.nombre,
        tipoPagina: this.usuarioAuth.pagina.tipoPagina,
        colorUno: this.usuarioAuth.pagina.colorUno,
        colorDos: this.usuarioAuth.pagina.colorDos,
        colorTres: this.usuarioAuth.pagina.colorTres,
        colorCuatro: this.usuarioAuth.pagina.colorCuatro,
      });
    }
  }


  construirFormulario() {
    this.formularioRegistro = this.formBuild.group({
      nombres: [null, [Validators.required]],
      apellidos: [null, [Validators.required]],
      nombreUsuario: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmarCliente: [null, [Validators.required]],
      confirmarDesarrollador: [null, [Validators.required]],
      confirmarContrasenia: [null, [Validators.required]],
      tipoPagina: [null, [Validators.required]],
      nombrePagina: [null, [Validators.required]],
      confirmarDatosUbicacion: [false, [Validators.required]],
      colorUno: ['#ce5555', [Validators.required]],
      colorDos: ['#7788df', [Validators.required]],
      colorTres: ['#ffffff', [Validators.required]],
      colorCuatro: ['#00000', [Validators.required]],
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

  obtenerUsuarioLogueado() {
    const usuarioAuth: any = this.authService.obtenerUsuario();
    this.usuarioAuth = JSON.parse(usuarioAuth);
  }

  obtenerListasMaestras() {

    this.listasMaestrasService.obtenerListasMaestrasRoles().subscribe(res => {
      this.rolesDeUsuarios = res;
    });

    this.listasMaestrasService.obtenerListasMaestrasPaginas().subscribe(res => {
      this.tipoPaginas = res;
      console.log(res);
    });

  }

  registrarUsuario() {

    const body = {
      nombres: this.formularioRegistro.get('nombres')?.value,
      apellidos: this.formularioRegistro.get('apellidos')?.value,
      nombreUsuario: this.formularioRegistro.get('nombreUsuario')?.value,
      correo: this.formularioRegistro.get('correo')?.value,
      password: this.formularioRegistro.get('password')?.value,
      pagina: {
        nombre: this.formularioRegistro.get('nombrePagina')?.value,
        colorUno: this.formularioRegistro.get('colorUno')?.value,
        colorDos: this.formularioRegistro.get('colorDos')?.value,
        colorTres: this.formularioRegistro.get('colorTres')?.value,
        colorCuatro: this.formularioRegistro.get('colorCuatro')?.value,
        tipoPagina: this.formularioRegistro.get('tipoPagina')?.value,
      },
      direcciones: this.listadoDirecciones.value
    };

    if(!this.modoEdicion){

      this.usuariosService.guardarUsuario(body).subscribe({
        next: (respuesta: any) => {
          this.authService.guardarUsuario(respuesta.data.usuario);
          this.tokenService.guardarToken(respuesta.data.token);
          this.otrosLocalService.storageSubject.next({ recargar: true });
          this.cerrarModal();
        },
        error: (error: any) => {
          console.log(error);
        }
      });

    }else{

      this.usuariosService.actualizarUsuario(body, this.usuarioAuth.uid).subscribe({
        next: (respuesta: any) => {
          this.authService.guardarUsuario(respuesta.data.usuario);
          this.tokenService.guardarToken(respuesta.data.token);
          this.otrosLocalService.storageSubject.next({ recargar: true });
          this.cerrarModal();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
      
    }

  }

  cambioDeColores(){
    this.principalColor = this.formularioRegistro.get('colorUno')?.value;
    this.secundariosColor = this.formularioRegistro.get('colorDos')?.value;
    this.textoColor = this.formularioRegistro.get('colorTres')?.value;
    this.textosSecundariosColor = this.formularioRegistro.get('colorCuatro')?.value;
  }

  cerrarModal() {
    this.cerrar.emit(true);
  }

}
