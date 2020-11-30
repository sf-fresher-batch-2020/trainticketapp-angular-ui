import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrains',
  templateUrl: './viewtrains.component.html',
  styleUrls: ['./viewtrains.component.css']
})
export class ViewtrainsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headers = ["TrainNumber", "TrainName", "Source", "Destination", "Duration"];
  rows = [
    {
      "TrainNumber": "1872",
      "TrainName": "Express",
      "Source": "Chennai",
      "Destination": "madurai",
      "Duration": "6 hrs"

    },
    {
      "TrainNumber": "2819",
      "TrainName": "bangalore Express",
      "Source": "bangalore",
      "Destination": "mumbai",
      "Duration": "16 hrs"
    },
    {
      "TrainNumber": "8514",
      "TrainName": "rajdhani",
      "Source": "Delhi",
      "Destination": "madurai",
      "Duration": "6 hrs"
    },
    {
      "TrainNumber":"1285",
      "TrainName": "hyderabad express",
      "Source": "mumbai",
      "Destination": "hyderabad",
      "Duration": "10 hrs"
    }
  ] 
  bookTicket(data) {
    console.log(data);
    let obj = { "trainName": data.TrainName, "trainNumber": data.TrainNumber };
    localStorage.setItem("TRAIN_DETAILS", JSON.stringify(obj));
  }
}