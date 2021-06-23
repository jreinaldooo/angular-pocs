import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'MGMT',
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {code: 1,  name: 'Solid'},
          {code: 2,  name: 'Great'},
          {code: 3,   name: 'Good'},
          {code: 4, name: 'Unproven'}
        ],
        order: 3
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
