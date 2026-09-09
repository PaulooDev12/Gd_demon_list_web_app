import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { AdminReqDto, AdminResponse, ResponseDto, Page} from '../models/admin.model';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class GdListService {
    private http = inject(HttpClient);

    private readonly ADMIN_URL = 'http://localhost:8080/admin';
    private readonly LEVELS_URL = 'http://localhost:8080/levels';

   salvarLevel(dto: AdminReqDto): Observable<any>{
    return this.http.post<any>(`${this.ADMIN_URL}/post`, dto);
   } 
   salvarLista(dto: AdminReqDto[]): Observable<ResponseDto[]>{
    return this.http.post<ResponseDto[]>(`${this.ADMIN_URL}/lote`, dto);
   }
   listarAdmin(): Observable<AdminResponse[]>{
    return this.http.get<AdminResponse[]>(`${this.ADMIN_URL}/listaradm`);
   }
   deletarLevel(id: string): Observable<void>{
    return this.http.delete<void>(`${this.ADMIN_URL}/${id}`);
   }
   editarLevel(id: string, dto: AdminReqDto): Observable<void>{
    return this.http.put<void>(`${this.ADMIN_URL}/level/{id}`, dto);
   }

   getMainPage(): Observable<ResponseDto[]>{
   return this.http.get<ResponseDto[]>(`${this.LEVELS_URL}/mainpage`);
   }
   getMainList(page: number = 0, size: number = 10): Observable<Page<ResponseDto>>{
        const params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());
        return this.http.get<Page<ResponseDto>>(`${this.LEVELS_URL}/mainlist`, {params});
   }
}
