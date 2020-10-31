import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    /*this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/
    this.form = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    // console.log(this.form.value);
    this.http.post("https://sshttpbin.org/post", JSON.stringify(this.form.value))
    .subscribe( data => {
      console.log(data);

      this.form.reset();
    },(err: any) => alert('erro')
    );
  }

  reset(){
    this.form.reset();
  }

}
