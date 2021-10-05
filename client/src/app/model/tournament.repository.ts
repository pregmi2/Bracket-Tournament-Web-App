import { Injectable } from '@angular/core';
import { tournament } from './tournament.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class tournamentRepository{
  private tournaments: tournament[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadtournaments(): void {
    this.loaded = true;
    this.dataSource.gettournaments().subscribe((tournament) => {
      this.tournaments = tournament;
    });
  }

  gettournaments(): tournament[] {
    if (!this.loaded) {
      this.loadtournaments();
    }
    return this.tournaments;
  }

  getActivetournaments(): tournament[] {
    if (!this.loaded) {
      this.loadtournaments();
    }
    return this.tournaments.filter(x => x.status == true);
  }

  gettournament(id: number): tournament {
    let q = this.tournaments.find((p) => p._id === id) as tournament;
    console.log(q);
    return q;
  }

  savetournament(tournament: tournament): void{
    //TODO - Change here after authentication
    tournament.userCreator = "Default User";
    if (
      tournament._id === null ||
      tournament._id === 0 ||
      tournament._id === undefined
    ) {
      this.dataSource.addtournaments(tournament).subscribe((u) => {
        this.tournaments.push(tournament);
      });
    } else {
      this.dataSource.updatetournaments(tournament).subscribe((q) => {
        this.tournaments.splice(
          this.tournaments.findIndex((u) => u._id === tournament._id),
          1,
          tournament
        );
      });
    }
  }

  deletetournament(id: number): void {
    this.dataSource.deletetournaments(id).subscribe((order) => {
      this.tournaments.splice(
        this.tournaments.findIndex((o) => id === o._id),
        1
      );
    });
  }
}