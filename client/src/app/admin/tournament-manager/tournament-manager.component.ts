import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tournament } from 'src/app/model/tournament.model';
import { tournamentRepository } from 'src/app/model/tournament.repository';

@Component({
  templateUrl: './tournament-manager.component.html'
})
export class tournamentManagerComponent implements OnInit {

  constructor(private router: Router, private repository: tournamentRepository) { }

  ngOnInit(): void {
  }

  gettournament(): tournament[]{
    return this.repository.gettournaments();
  }

  deletetournament(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deletetournament(id);
    } else {
      this.router.navigateByUrl('/admin/main/tournaments');
    }
  }

  edittournament(id: number):void{
    this.router.navigateByUrl(`/admin/main/tournaments/edit/${id}`)
  }

  addtournament():void{
    this.router.navigateByUrl('/admin/main/tournaments/add')
  }

  addtournaments():void{
    this.router.navigateByUrl('/home')
  }
}
