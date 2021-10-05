import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { group } from 'src/app/model/group.model';
import { groupRepository } from 'src/app/model/group.repository';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.component.html'
})
export class groupEditorComponent implements OnInit {
  editing = false;
  group: group = new group();

  constructor(private repository: groupRepository,
              private router: Router, 
              activateRoute: ActivatedRoute) 
  { 
    this.editing = activateRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      Object.assign(
        this.group,
        repository.getgroup(activateRoute.snapshot.params.id)
      );
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm):void{
    this.repository.savegroup(this.group);
    this.router.navigateByUrl('/admin/main/group')
  }
}
