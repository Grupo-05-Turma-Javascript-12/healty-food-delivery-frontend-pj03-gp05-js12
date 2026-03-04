import type Usuario from "./Usuario";


export default interface UsuarioLogin extends Usuario {
  token: string;
}