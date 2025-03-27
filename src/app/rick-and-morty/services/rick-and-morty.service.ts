import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import {
  Respuesta,
  RespuestaMap,
  Character,
  Location,
  Episode,
} from '../interfaces/rick-and-morty.interface';
import { RickMapper } from '../mappers/rick-and-morty.mapper';

const URL_BASE_API = 'https://rickandmortyapi.com/api';

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  private http = inject(HttpClient);

  //* Metodo para Obtener los personajes con las pagias obtenidas, ya que esta api maneja paginacion, y tambien para obtener los personajes por su nombre
  getAllCharacters(
    page: number,
    query: string
  ): Observable<RespuestaMap<Character>> {
    if (!query) {
      query = '';
    }

    return this.http
      .get<Respuesta<Character>>(`${URL_BASE_API}/character`, {
        params: {
          page: page,
          name: query,
        },
      })
      .pipe(
        map((resp) => {
          return {
            info: RickMapper.mapInfoResp(resp.info),
            results: resp.results,
          };
        }),
        delay(2000),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                'Hubo un error al intentar Obtener los personajes' + error
              )
          );
        })
      );
  }

  //* Metodo para obtener los personajes por su Id
  searchCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${URL_BASE_API}/character/${id}`).pipe(
      delay(3000),
      catchError((error) => {
        return throwError(
          () =>
            new Error('Hubo un error al intentar Obtener el personaje' + error)
        );
      })
    );
  }

  //* Metodo para Obtener los personajes con las pagias obtenidas, ya que esta api maneja paginacion, y tambien para obtener las locaciones por su nombre
  getAllLocations(
    page: number,
    query: string
  ): Observable<RespuestaMap<Location>> {
    if (!query) {
      query = '';
    }

    return this.http
      .get<Respuesta<Location>>(`${URL_BASE_API}/location`, {
        params: {
          page: page,
          name: query,
        },
      })
      .pipe(
        map((resp) => {
          return {
            info: RickMapper.mapInfoResp(resp.info),
            results: resp.results,
          };
        }),
        delay(2000),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                'Hubo un error al intentar Obtener las Ubicaciones' + error
              )
          );
        })
      );
  }

  //* Metodo para obtener las locaciones por su ID
  searchLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(`${URL_BASE_API}/character/${id}`).pipe(
      catchError((error) => {
        return throwError(
          () =>
            new Error('Hubo un error al intentar Obtener la locacion' + error)
        );
      })
    );
  }

  getAllEpisodes(
    page: number,
    query: string
  ): Observable<RespuestaMap<Episode>> {
    if (!query) {
      query = '';
    }

    return this.http
      .get<Respuesta<Episode>>(`${URL_BASE_API}/episode`, {
        params: {
          page: page,
          name: query,
        },
      })
      .pipe(
        map((resp) => {
          return {
            info: RickMapper.mapInfoResp(resp.info),
            results: resp.results,
          };
        }),
        delay(2000),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                'Hubo un error al intentar Obtener los episodios' + error
              )
          );
        })
      );
  }

  //* Metodo para obtener los episodios por la url
  searchEpisodeByUrl(url: string): Observable<Episode> {
    return this.http.get<Episode>(url).pipe(
      catchError((error) => {
        return throwError(
          () =>
            new Error('Hubo un error al intentar Obtener el episodio' + error)
        );
      })
    );
  }
}
