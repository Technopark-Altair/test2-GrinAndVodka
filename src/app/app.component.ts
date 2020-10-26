import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstOp:number;
  secondOp:number;
  op:string;
  result:number;
  errorMes:string;
  
  doCalc() {
  if (this.firstOp != null && this.secondOp != null && this.op != null) {
      if (this.op == "-") {
        this.result = this.firstOp - this.secondOp;
        this.errorMes = "Ошибок нет";
      } else if (this.op =="+") { 
        this.result = this.firstOp + this.secondOp;
        this.errorMes = "Ошибок нет";
      } else if(this.op =="/") {
        if (this.secondOp == 0) {
          this.errorMes ="На ноль нельзя делить";
          this.result == null;
        }else {
          this.result = this.firstOp / this.secondOp;
          this.errorMes = "Ошибок нет";
        }
      } else if(this.op =="*") {
        this.result = this.firstOp * this.secondOp;
        this.errorMes = "Ошибок нет";
      }
    }else{
      if(this.firstOp == null){
        this.errorMes =" Нет 1 операнда";
      }else if (this.secondOp == null){
        this.errorMes = "Нет 2 операнда";
      }else if (this.op == null){
        this.errorMes = "Нет оператора действия";
      }
    }
  }
}