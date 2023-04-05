import IRoles from "./IRoles";

export default interface IUsuarios {
  id:          number;
  nombre:      string;
  descripcion: string;
  estado:      string;
  ruta:        number;
  createdAt:   Date;
  updatedAt:   Date;
}