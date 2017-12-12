import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the ChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenge',
  templateUrl: 'challenge.html', 
})
export class ChallengePage {

 topics: string[];
 
  generateTopics() {
    this.topics = [
      '2.4KM Run',
      '500 Calories Run',  
    ];
  }
 
  getTopics(ev: any) {
    this.generateTopics();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.topics = this.topics.filter((topic) => {
        return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  constructor() {
  
  }



}
