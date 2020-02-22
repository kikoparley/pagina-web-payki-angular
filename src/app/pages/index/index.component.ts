import { Component, OnInit, OnDestroy } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  tasa: any[] = [];
  restItems: any;
  restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/paykiwordpress.azurewebsites.net/posts';
  isCollapsed = true;
  amount: any;
  date = new Date();
  constructor(private http: HttpClient

  ) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    this.getRestItems();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

}



// consumerKey: 'ck_c00ba3bb3f36b034b8676cc4d5c1b974255e9d72';
// consumerSecret: 'cs_fe772daa7c863464124cf731a77d0ef89a343ea3';
