import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GdListService } from '../../services/gd-list-service';
import { AdminReqDto, ResponseDto } from '../../models/admin.model';
import { ObserverVisibilty } from "../../directives/observer-visibilty";

@Component({
  imports: [CommonModule, FormsModule, ObserverVisibilty],
  selector: 'app-admin-panel',
  styleUrl: './admin-panel.scss',
  templateUrl: './admin-panel.html',
})

export class AdminPanel implements OnInit{
  isVisible: boolean = false;
  private cdr = inject(ChangeDetectorRef);

  novoLevel: AdminReqDto = {
      name: 'Acheron',
      description: 'Extreme Demon top list level',
      position: 1,
      image: '/acheron.jpg',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    };

  private service = inject(GdListService);
  levels = signal<ResponseDto[]>([]);
  ngOnInit(): void {
    this.carregarLevels();
    
  }
  onElementVisible(visible: boolean){
    if(visible && !this.isVisible){
      this.isVisible = true;
      this.cdr.detectChanges();
    }
  }

  carregarLevels(): void{
    this.service.getMainPage().subscribe({
     next: (data) => this.levels.set(data),
     error: (err) => console.log("Ocoreu um erro ao carregar os levels", err)
    });
  }
  cadastrarLevel(): void{
    this.service.salvarLevel(this.novoLevel).subscribe({
      next: () => {
        alert("level salvo!");
        this.carregarLevels();
      },
      error: (err) => console.log("um erro inseperado ocorreu: ", err)
    })
  }
  excluirLevel(id: string): void{
    this.service.deletarLevel(id).subscribe({
      next: () => {
        alert("level deletado com sucesso");
        this.carregarLevels();
      },
      error: (err) => console.log("Erro: ", err)
    })
  }
  
}
