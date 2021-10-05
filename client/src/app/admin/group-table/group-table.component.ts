import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { group } from 'src/app/model/group.model';
import { groupRepository } from 'src/app/model/group.repository';

@Component({
  templateUrl: './group-table.component.html'
})
export class groupTableComponent implements OnInit {

  constructor(private router: Router, private repository: groupRepository) { }

  ngOnInit(): void {
  }

  getgroups(): group[]{
    return this.repository.getgroups();
  }

  deletegroup(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deletegroup(id);
    } else {
      this.router.navigateByUrl('/admin/main/group');
    }
  }

  addgroup():void{
    this.router.navigateByUrl('/admin/main/group/add')
  }

  editgroup(id: number):void{
    this.router.navigateByUrl(`/admin/main/group/edit/${id}`)
  }
}
