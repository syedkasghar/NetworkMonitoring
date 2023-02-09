import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { IncidentService } from '../_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  incidents = null;

  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.incidentService
      .getAll()
      .pipe(first())
      .subscribe((incidents) => (this.incidents = incidents));
  }

  deleteDevice(id: string) {
    const device = this.incidents.find((x) => x.id === id);
    device.isDeleting = true;
    this.incidentService
      .delete(id)
      .pipe(first())
      .subscribe(
        () => (this.incidents = this.incidents.filter((x) => x.id !== id))
      );
  }
}
