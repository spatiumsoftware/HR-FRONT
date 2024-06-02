import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyServiceService } from '../../Services/company-service.service';
CompanyServiceService

@Component({
  selector: 'app-my-component',
  templateUrl: './read.company.component.html',
  styleUrls: ['./read.company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  standalone: true,
})
export class MyComponentComponent implements OnInit {

  companies: any[] = [];

  constructor(private _CompanyServiceService:CompanyServiceService) {}

  ngOnInit() {
   
    
    

  }
}
