import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule, CommonModule, MenuModule ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  items: any[] | undefined;

  selectedUser: { image: string; name: string }={
    image:'../../../../assets/images/languages/uk-flag.svg',
    name:'Mortada'
  };

  _Route = inject(Router);

  ngOnInit() {

    this.items = [
      {
          label: 'Options',
          items: [
            {
                label: 'Profile',
                command:()=>{
                  this._Route.navigate(['/companies'])
                }
            },
              {
                  label: 'Settings',
                 
              },
          ]
      },
  ];
   
  }
 
}
