import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Output() public outputToMain = new EventEmitter();
  
  fb:FormBuilder;
  myForm:FormGroup;
  pattern = "[0-9]*[.]?[0-9]*";
  constructor(fb:FormBuilder) { 
    this.myForm = fb.group({
      x0:['', [Validators.required, Validators.pattern(this.pattern)]],
      h:['', [Validators.required, Validators.pattern(this.pattern)]]
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.outputToMain.emit(this.myForm.value);
  }

}
