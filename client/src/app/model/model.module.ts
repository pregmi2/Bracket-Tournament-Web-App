import { NgModule } from '@angular/core';
import { UserRepository } from './user.repository';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { groupRepository } from './group.repository';
import { tournamentRepository } from './tournament.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [UserRepository, groupRepository, tournamentRepository, RestDataSource, AuthService],
})
export class ModelModule {}
