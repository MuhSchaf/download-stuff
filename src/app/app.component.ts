import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

// @Injectable
export class AppComponent {
  name = "Angular";
  private picture = "https://upload.wikimedia.org/wikipedia/commons/d/da/Coat_of_arms_of_Germany.svg";

  constructor(private http: HttpClient) {}

  downloadStuff(): void {
    console.log("downloaded something");
    // var a = document.createElement("a");
    // a.href = this.picture;
    // a.download = this.picture;
    // // start download
    // a.click();
    // const url= window.URL.createObjectURL();
    // window.location.href= this.picture;
    // window.open(this.picture);

    this.http.get(this.picture, { responseType: "blob" }).subscribe(res => {
      this.methodeEins(res);
      // this.methodeZwei(res);
      // this.methodeDrei(res);
      // this.methodeVier(res);
      // this.methodeFuenf(res);
      // this.methodeSechs(res);
    });
  }

  methodeEins(res: any): void {
    console.log("res1");
    console.log(res);
    var a = document.createElement("a");
    a.href = URL.createObjectURL(res);
    a.download = "res";
    // start download
    a.click();
  }

  methodeZwei(res: any): void {
    console.log("res2");
    console.log(res);
    const blob = new Blob([res], { type: "image/svg" });
    const url = window.URL.createObjectURL(blob);
    window.open(url, 'downlaod');
  }

  methodeDrei(res: any): void {
    window.location.href = res;
  }

  methodeVier(res: any): void {
    const blob = new Blob([res], { type: "image/svg" });
    const url = window.URL.createObjectURL(blob);
    window.location.assign(url);
  }

  methodeFuenf(res: any): void {
    var save = document.createElement('a');
    save.href = URL.createObjectURL(res);
    save.target = '_blank';
    var filename = this.picture.substring(this.picture.lastIndexOf('/')+1);
    save.download = filename;
    var evt = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': false
    });
    save.dispatchEvent(evt);
   
  }

  methodeSechs(res: any): void {
    var filename = this.picture.substring(this.picture.lastIndexOf('/')+1);
    var _window = window.open(this.picture, '_blank');
    _window.document.close();
    _window.document.execCommand('saveAs', true, filename || this.picture)
    _window.close();
  }
}
