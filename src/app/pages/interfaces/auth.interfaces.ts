export interface Authentication {
    nombres:       string;
    apellidos:     string;
    nombreUsuario: string;
    correo:        string;
    direcciones:   Direccion[];
    ordenes:       any[];
    wishlist:      any[];
    rol:           string;
    google:        boolean;
    fechaCreacion: Date;
    uid:           string;
}

export interface Direccion {
    calle:        string;
    ciudad:       string;
    estado:       string;
    codigoPostal: string;
    pais:         string;
}
