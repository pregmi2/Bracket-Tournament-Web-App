import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { groupTableComponent } from '../admin/group-table/group-table.component';
import { tournamentManagerComponent } from '../admin/tournament-manager/tournament-manager.component';

@Injectable()
export class tournamentFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== groupTableComponent ) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
