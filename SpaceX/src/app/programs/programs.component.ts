import { Component, OnInit } from '@angular/core';
import { Filter } from './models/filter';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  filterApplied: Filter = new Filter();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   *  @param [filterValues] gives the emitted value from 
   * @Output() variable which is filters in filters
   * components.
   *  
  */
  getFilters(filterValues: Filter) {
    this.filterApplied = { ...filterValues };
  }

}
