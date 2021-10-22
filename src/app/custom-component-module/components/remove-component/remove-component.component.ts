import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-component',
  templateUrl: './remove-component.component.html',
  styleUrls: ['./remove-component.component.css']
})
export class RemoveComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveComponentComponent>) { }

  ngOnInit(): void {
  }

  action(action:any){
    this.dialogRef.close(action);
  }

}
