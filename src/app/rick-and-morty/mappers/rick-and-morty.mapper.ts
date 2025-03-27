import { Info, InfoMap, Respuesta } from '../interfaces/rick-and-morty.interface';


export class RickMapper{

  // Metodo para mapear el objeto info a nuestro infomap, para manejar las paginas siguiente y previa de manera numerica y no con links
  static mapInfoResp(info: Info): InfoMap{
    return {
      count: info.count,
      pages: info.pages,
      next:  info.next ? parseInt(new URL(info.next).searchParams.get('page') ?? '', 10) : null,
      prev:  info.prev ? parseInt(new URL(info.prev).searchParams.get('page') ?? '', 10) : null,
    }
  }
}
