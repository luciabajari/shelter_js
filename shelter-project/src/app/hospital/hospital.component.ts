import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  private hospitals
  public hospitalsLoading = true
  constructor(
    private hospitalService: HospitalService
  ) { }

  ngOnInit() {
    this.hospitalService.getHospitals()
    .then(hospitals=>{
      this.hospitalsLoading=false;
      this.hospitals=hospitals;
    })
  }

}
