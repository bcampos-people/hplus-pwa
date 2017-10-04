import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";


@Component({
  selector: 'perto-min',
  templateUrl: 'perto-mim.html'
})
export class PertoPage {

  constructor(public nav: NavController) {
  }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
