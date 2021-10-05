import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { group } from 'src/app/model/group.model';
import { groupRepository } from 'src/app/model/group.repository';
import { tournament } from 'src/app/model/tournament.model';
import { tournamentRepository } from 'src/app/model/tournament.repository';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BasePageComponent implements OnInit {
  constructor(
    route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private repository: groupRepository,
    private tournamentRepository: tournamentRepository
  ) {
    super(route);

    //return to login page if is not authenticat
    if (!auth.authenticated) {
      this.router.navigateByUrl('admin/auth');
    }
  }

  ngOnInit(): void {}

  getActivegroups(): group[]{
    return this.repository.getActivegroups();
  }

  getActivetournaments(): tournament[]{
    return this.tournamentRepository.getActivetournaments();
  }
}
