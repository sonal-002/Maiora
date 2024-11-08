import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
})
export class ApplyLeaveComponent {
  class!: string;
  section!: string;
  student!: string;
  reason!: string;
  days!: string;
  startDate!: string;
  endDate!: string;
  status!: string;

  constructor(private dialogRef: MatDialogRef<ApplyLeaveComponent>) {}

  closeWithData() {
    this.dialogRef.close('testData');
  }
}
