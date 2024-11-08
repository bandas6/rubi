import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Authentication } from '../../../pages/interfaces/auth.interfaces';
import { AuthService } from '../../../services/auth/auth.service';
import { ListasMaestrasService } from '../../../services/listasMaestras/listas-maestras.service';
import { TokenService } from '../../../services/token/token.service';
import { OtrosLocalStorageService } from '../../../services/utils/otros-local-storage.service';

@Component({
  selector: 'app-modelo-general',
  standalone: false,
  templateUrl: './modelo-general.component.html',
  styleUrl: './modelo-general.component.scss'
})
export class ModeloGeneralComponent implements OnInit {

  formBuilder = inject(FormBuilder);

  authService = inject(AuthService);
  tokenService = inject(TokenService);
  otrosLocalService = inject(OtrosLocalStorageService);
  listasMaestrasService = inject(ListasMaestrasService);

  faUserCircle = faUserCircle; // Importando el icono de usuario de Font Awesome

  mostrarPover: boolean = true;
  modalRegistro: boolean = false;
  modoEdicion: boolean = false;

  usuarioAuth!: Authentication;
  rolesDeUsuarios: any[] = [];
  rolEncontrado: any;

  formLogin!: FormGroup;

  ngOnInit(): void {
    this.construirFormulario();

    this.obtenerUsuarioLogueado(); // Aquí se obtiene el usuario logueado para mostrarlo en el header
    this.obtenerListasMaestras(); // Aquí se obtienen las listas maestras para mostrarlas en el header
  }

  construirFormulario() {
    // Aquí se construiría el formulario de login
    this.formLogin = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  obtenerUsuarioLogueado() {
    const usuarioAuth: any = this.authService.obtenerUsuario();
    this.usuarioAuth = JSON.parse(usuarioAuth);
  }

  obtenerListasMaestras() {
    this.listasMaestrasService.obtenerListasMaestrasRoles().subscribe(res => {
      this.rolesDeUsuarios = res;
      const rolFiltrado = this.filtroGeneral('rol', this.rolesDeUsuarios);
      this.rolEncontrado = rolFiltrado;
    })
  }

  filtroGeneral(tipo: string, array: any[]) {
    switch (tipo) {
      case 'rol':
          return array.find(r => r.rol === this.usuarioAuth.rol);
        break;
      default:
        break;
    }
  }

  iniciarSession() {
    this.authService.login(this.formLogin.value).subscribe({
      next: (respuesta: any) => {

        this.authService.guardarUsuario(respuesta.data.usuario);
        this.tokenService.guardarToken(respuesta.data.token);

        // Se envía el evento para recargar la lista cuando se inicia sesión
        this.otrosLocalService.storageSubject.next({ recargar: true });
        this.mostrarPover = false;
        this.obtenerUsuarioLogueado();
        this.obtenerListasMaestras();
      },
      error: (error: any) => {
        console.error('Error al iniciar sesión:', error);
        this.mostrarPover = true;
      }
    })
  }

  editarUsuario(){
    this.modalRegistro = true;
    this.modoEdicion = true;
  }

  cerrarSession() {
    this.otrosLocalService.storageSubject.next({ sesionCerrada: true });
    this.authService.eliminarUsuario();
    this.tokenService.eliminarToken();
    this.obtenerUsuarioLogueado();
  }

  abrirModalRegistro() {
    this.modalRegistro = true
    this.modoEdicion = false;
  }

  cerrarModal(cerrar: any) {
    if (cerrar) this.modalRegistro = false;
  }


}
