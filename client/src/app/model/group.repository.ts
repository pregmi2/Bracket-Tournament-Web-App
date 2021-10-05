import { Injectable } from '@angular/core';
import { group } from './group.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class groupRepository {
  private groups: group[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadgroups(): void {
    this.loaded = true;
    this.dataSource.getgroups().subscribe((group) => {
      this.groups = group;
    });
  }

  getgroups(): group[] {
    if (!this.loaded) {
      this.loadgroups();
    }
    return this.groups;
  }

  getActivegroups(): group[] {
    if (!this.loaded) {
      this.loadgroups();
    }
    return this.groups.filter(x => x.status == true);
  }

  getgroup(id: number): group {
    let q = this.groups.find((p) => p._id === id) as group;
    console.log(q);
    return q;
  }

  savegroup(group: group): void{
    //TODO - Change here after authentication
    group.userCreator = "Default User";
    if (
      group._id === null ||
      group._id === 0 ||
      group._id === undefined
    ) {
      this.dataSource.addgroup(group).subscribe((u) => {
        this.groups.push(group);
      });
    } else {
      this.dataSource.updategroup(group).subscribe((q) => {
        this.groups.splice(
          this.groups.findIndex((u) => u._id === group._id),
          1,
          group
        );
      });
    }
  }

  deletegroup(id: number): void {
    this.dataSource.deletegroup(id).subscribe((order) => {
      this.groups.splice(
        this.groups.findIndex((o) => id === o._id),
        1
      );
    });
  }
}
