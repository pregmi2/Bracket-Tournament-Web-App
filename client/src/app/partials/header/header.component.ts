import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { group } from 'src/app/model/group.model';
import { User } from 'src/app/model/user.model';
import { tournament } from 'src/app/model/tournament.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user!: User;
  group!: group;
  tournament!: tournament;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
    this.group = new group();
    this.tournament = new tournament();
  }

  onLogoutClick(): void {
    this.authService.logout().subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    const result = this.authService.authenticated;
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
    return result;
  }

  // This method check that the current user is admin or not
  isAdmin(): boolean {
    console.log(this.user);
    if (this.user.userType) {
      return true;
    } else {
      return false;
    }
  }
}