import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.css'],
  providers:  [QuestionService]
})
export class DynamicFormPageComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
