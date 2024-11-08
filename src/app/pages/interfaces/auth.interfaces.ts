export interface Authentication {
    nombres: string;
    apellidos: string;
    nombreUsuario: string;
    correo: string;
    direcciones: Direccion[];
    ordenes: any[];
    wishlist: any[];
    rol: string;
    pagina: Paginas;
    google: boolean;
    fechaCreacion: Date;
    uid: string;
}

export interface Direccion {
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    pais: string;
}

export interface Paginas {
    nombre: string;
    colorUno: string;
    colorDos: string;
    colorTres: string;
    colorCuatro: string;
    tipoPagina: string;
}
