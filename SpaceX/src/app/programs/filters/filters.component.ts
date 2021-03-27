import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FILTER_TYPES } from '../constants/FILTER_TYPES';
import { LAUNCH_YEARS } from '../constants/LAUNCH_YEARS';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  LAUNCH_YEARS: string[] = LAUNCH_YEARS;
  FILTER_TYPES = FILTER_TYPES;
  @Output() filters: EventEmitter<Filter> = new EventEmitter<Filter>();
  filter: Filter = {
    launch_success: undefined,
    land_success: undefined,
    launch_year: undefined
  };
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emitts event of selection and deselection of filters
   *
   *  @param [filterType] Checks the type of filter selected to
   * get the data accordingly.
   * 
   * @param [filterValue] Chatches the value of filter which is
   * selected and emitts it to parent.
   * 
  */
  emitValueToFilter(filterType: string, filterValue: any) {
    if (filterType == FILTER_TYPES.LAUNCH_YEAR) {
      this.filter.launch_year == filterValue ? this.filter.launch_year = undefined : this.filter.launch_year = filterValue;
    } else if (filterType == FILTER_TYPES.LAUNCH_SUCCESS) {
      this.filter.launch_success == filterValue ? this.filter.launch_success = undefined : this.filter.launch_success = filterValue;
    } else if (filterType == FILTER_TYPES.LAND_SUCCESS) {
      this.filter.land_success == filterValue ? this.filter.land_success = undefined : this.filter.land_success = filterValue;
    }
    this.filters.next(this.filter);
  }

  /**
   * Checks the slected button and toggle between active
   * and inactive of filter selected.
   *
   *  @param [className] Take all elements from that class of
   *  selected filter and remove the active css if filter is not 
   *  active. 
   * 
   * @param [id] Take id of specific element to add or remove
   * active filter on that.
   * 
   * @param [filterType] Checks the type of filter selected to
   * put active class accordingly.
  */
  activateSelectedBtn(className: string, id: string, filterType: string) {
    let ele: any = document.getElementsByClassName(className);
    for (let i = 0; i < ele.length; i++) {
      ele[i].className = ele[i].className.replace(' active', '');
    }
    if (filterType == FILTER_TYPES.LAUNCH_YEAR) {
      if (!this.filter.launch_year || this.filter.launch_year != id) {
        let ele: any = document.getElementById(id)
        ele.classList.add('active');
      }
    } else if (filterType == FILTER_TYPES.LAND_SUCCESS) {
      if (!this.filter.land_success || 'land_' + this.filter.land_success != id) {
        let ele: any = document.getElementById(id)
        ele.classList.add('active');
      }
    } else if (filterType == FILTER_TYPES.LAUNCH_SUCCESS) {
      if (!this.filter.launch_success || 'launch_' + this.filter.launch_success != id) {
        let ele: any = document.getElementById(id)
        ele.classList.add('active');
      }
    }
  }
}
