import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dtnote } from '../dtnote';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newnote : Dtnote;
  txtJudul = "";
  txtIsi = "";
  txtTgl: Date;
  statusAdd = "";

  constructor(private router: Router, public globalvar: GlobalvarService) {}

  AddNote() {
    if (this.txtJudul != "" && this.txtIsi != "" && this.txtTgl != null) {
      alert(this.txtJudul + this.txtIsi + this.txtTgl.toString().substring(0,10));

      this.globalvar.addNew(new Dtnote(this.txtJudul, this.txtIsi, this.txtTgl.toString().substring(0,10), 0));
      this.statusAdd = "Sukses Add New Note !";
      this.txtJudul = "";
      this.txtIsi = "";
      alert(this.globalvar.arrNotes.length);
    } else {
      alert("Input tidak boleh kosong !");
    }
  }

  GoToDetail(){
    this.router.navigate(["detailnote"]);
  }

  GoToFav(){
    this.router.navigate(["favorite"]);
  }
}
