import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { GdListService } from '../../services/gd-list-service';
import { ResponseDto } from '../../models/admin.model';
import { ObserverVisibilty } from "../../directives/observer-visibilty";

@Component({
  imports: [ObserverVisibilty],
  selector: 'app-main-list',
  styleUrl: './main-list.scss',
  templateUrl: './main-list.html',
})
export class MainList implements OnInit{
  private service = inject(GdListService);
  private cdr = inject(ChangeDetectorRef);
  isVisible: boolean = false;
  onElementVisible(visible:boolean){
    if(visible && !this.isVisible){
      this.isVisible = true;
    }
  }
  levels = signal<ResponseDto[]>([]);
  
  ngOnInit(): void {
    this.cdr.detectChanges();
    this.carregarLevels();
  }

  carregarLevels(): void{
    this.service.getMainPage().subscribe({
      next: (data) => this.levels.set(data),
      error: () => console.log("nenhum level carregado")
    })
  }
}
