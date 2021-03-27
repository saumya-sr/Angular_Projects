import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../models/filter';
import { HttpRequestParams } from '../models/http-request-params';
import { SpacexResponse } from '../models/spacex-response';
import { SpacexDataService } from '../services/spacex-data.service';

@Component({
  selector: 'app-spacex-programs',
  templateUrl: './spacex-programs.component.html',
  styleUrls: ['./spacex-programs.component.scss']
})
export class SpacexProgramsComponent implements OnInit {

  filters: Filter = new Filter();
  @Input() set filterApplied(value: Filter) {
    this.filters = value;
    this.getSpaceXPrograms();
  };
  httpRequestParams: HttpRequestParams = new HttpRequestParams();
  subscription: Subscription = new Subscription;
  spaceXPrograms!: SpacexResponse[];
  constructor(private spacexDataService: SpacexDataService) { }

  ngOnInit(): void {
    this.getSpaceXPrograms();
  }

  /**
  * Get all the spaceX-programs data from the api call
  * according to the applied filters.
  *
 */
  getSpaceXPrograms() {
    this.httpRequestParams.land_success = this.filters.land_success;
    this.httpRequestParams.launch_success = this.filters.launch_success;
    this.httpRequestParams.launch_year = this.filters.launch_year;
    this.subscription = this.spacexDataService.getSpaceXData(this.httpRequestParams).subscribe(response => {
      this.spaceXPrograms = response;
    });
  }

  /**
   * Returns the images for every data.
   *
   *  @param [program] Contains single object of
   * SpaceXResponse array list.
   *  
  */
  getImage(program: SpacexResponse) {
    return program?.links?.flickr_images[0]
  }

  /**
  * Returns the Land_success value for every data.
  *
  *  @param [program] Contains single object of
  * SpaceXResponse array list.
  *  
 */
  getLandSuccessStatus(program: SpacexResponse) {
    return program?.rocket?.first_stage?.cores[0]?.land_success
  }

  /**
  * Destroys the created subscription from getting API
  * response.
  *
 */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
