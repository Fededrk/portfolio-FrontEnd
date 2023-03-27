import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { GeneralService } from '../../core/services/profile.service';
import { Skills } from '../models/Skills';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent implements OnInit {

  constructor(generalService: GeneralService) {
      this.generalService = generalService;
  }

    ngOnInit(): void {
      this.generalService.me()
      .subscribe(data => this.profile = data);

      this.generalService.skills()
      .subscribe(data => this.skills = data);
    }
  
    generalService: GeneralService;
    profile: Profile | undefined;
    skills!: Array<Skills>;
    
}
