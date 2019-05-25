import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-older",
  templateUrl: "./older.component.html",
  styleUrls: ["./older.component.less"]
})
export class OlderComponent implements OnInit {
  name = "Valentina";
  surname = "Stepanovna";
  subtitle = "Donskogo 37 dom 2";
  description =
    "Hello I am Valentina Stepanovna. Here you need add some  information";
  constructor() {}

  ngOnInit() {}
}
