import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  jobList: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.jobList = data._embedded.jobResponseList;
      console.log(this.jobList);
    });
  }

}
