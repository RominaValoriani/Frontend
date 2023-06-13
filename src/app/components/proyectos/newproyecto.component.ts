import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;

  constructor(private proyectoS: ProyectoService, private router: Router){ }


  ngOnInit(): void {
      
  }
  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP);
    this.proyectoS.save(proyecto).subscribe({
      next: (data) => { 
        alert("Proyecto anadido correctamente");
        this.router.navigate(['']);
      }, error: err =>{
        alert("Error al guardar el proyecto");
        this.router.navigate(['']);
      }
    })
  } 
}
