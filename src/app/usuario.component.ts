import { Component  } from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'
})

export class UsuarioComponent {
    visible: boolean = false;
    usuarios = ['Helen', 'David', 'Ibrahim'];

    usuarioNombre = '';

    constructor(){
        setTimeout(()=>{
            this.visible = true;
        },3000)
    }

    agregarUsuario(){
        this.usuarios.push(this.usuarioNombre);
    }
}