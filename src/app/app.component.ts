import { Component } from '@angular/core';

const script = {
  'INITIAL': {
    'question': 'Which mode are you in?',
    'responses': [
      {
        'text': 'Normal',
        'nextState': 'USER_MODE_NORMAL'
      },
      {
        'text': 'Insert/Replace/Visual',
        'nextState': 'USER_MODE_NOT_NORMAL'
      },
      {
        'text': 'What does mode mean?',
        'nextState': 'USER_MODE_DONT_KNOW'
      }
    ]
  },
  'USER_MODE_NORMAL': {
    'question': 'Do you want to save your changes to disk?',
    'responses': [
      {
        'text': 'Yes',
        'nextState': 'USER_WANTS_TO_SAVE_CHANGES'
      },
      {
        'text': 'No',
        'nextState': 'USER_DOES_NOT_WANT_TO_SAVE_CHANGES'
      }
    ]
  },
  'USER_MODE_NOT_NORMAL': {
    'question': 'We need the “normal” mode first. Press Escape to do that.',
    'responses': [
      {
        'text': 'Done!',
        'nextState': 'USER_MODE_NORMAL'
      }
    ]
  },
  'USER_MODE_DONT_KNOW': {
    'question': 'What does the bottom line say?',
    'responses': [
      {
        'text': '-- INSERT --',
        'nextState': 'USER_MODE_NOT_NORMAL'
      },
      {
        'text': '-- REPLACE --',
        'nextState': 'USER_MODE_NOT_NORMAL'
      },
      {
        'text': '-- VISUAL --',
        'nextState': 'USER_MODE_NOT_NORMAL'
      },
      {
        'text': 'Nothing',
        'nextState': 'USER_MODE_NORMAL'
      }
    ]
  },
  'USER_WANTS_TO_SAVE_CHANGES': {
    'question': 'OK! Type :wqa',
    'responses': [
      {
        'text': 'Done!',
        'nextState': 'USER_DONE'
      }
    ]
  },
  'USER_DOES_NOT_WANT_TO_SAVE_CHANGES': {
    'question': 'OK! Type :qa !',
    'responses': [
      {
        'text': 'Done!',
        'nextState': 'USER_DONE'
      }
    ]
  },
  'USER_DONE': {
    'question': 'You made it! Wasn’t that fun? :)',
    'responses': [
      {
        'text': 'Start over!',
        'nextState': 'INITIAL'
      }
    ]
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  state = 'INITIAL';

  get question() {
    return script[this.state].question;
  }

  get responses() {
    return script[this.state].responses;
  }

  get responseColumnWidth() {
    return 'col-lg-' + 12 / this.responses.length;
  }

}
