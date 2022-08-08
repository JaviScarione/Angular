import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.scss']
})
export class AbautComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

}
