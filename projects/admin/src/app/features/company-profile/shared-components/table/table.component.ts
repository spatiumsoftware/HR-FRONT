import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule , CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() headers:any ={
    code: '#',
    name: 'Name',
    department: 'Department',
    occupation : 'Occupation',
    jobposition: 'Jobposition',
    performance : 'Performance'
  }
  @Input() data: any[] = [];

  ngOnInit(){
    this.data = [{
      code: '1',
      name: 'John Doe',
      img :'../../../../../assets/images/company/Ava (PNG).png',
      deptimg :'../../../../../assets/images/company/Ava (PNG).png',
      id : 'ID 1',
      Department: 'Department 1',
      Occupation : 'Occupation 1',
      Jobposition: 'Job position 1',
      Performance : 'Performance 1' 
    },
    {
      code: '2',
      name: 'John Doe2',
      img :'../../../../../assets/images/company/Ava (PNG).png',
      deptimg :'../../../../../assets/images/company/Ava (PNG).png',
      id : 'ID 2',
      Department: 'Department 1',
      Occupation : 'Occupation 1',
      Jobposition: 'Job position 1',
      Performance : 'Performance 1' 
    },
    
    {
      code: '3',
      name: 'John Doe3',
      img :'../../../../../assets/images/company/Ava (PNG).png',
      deptimg :'../../../../../assets/images/company/Ava (PNG).png',
      id : 'ID 3',
      Department: 'Department 1',
      Occupation : 'Occupation 1',
      Jobposition: 'Job position 1',
      Performance : 'Performance 1' 
    },
    
    {
      code: '4',
      name: 'John Doe',
      img :'../../../../../assets/images/company/Ava (PNG).png',
      deptimg :'../../../../../assets/images/company/Ava (PNG).png',
      id : 'ID 4',
      Department: 'Department 1',
      Occupation : 'Occupation 1',
      Jobposition: 'Job position 1',
      Performance : 'Performance 1' 
    }
]
  }

  onSort(content:any){
    console.log(content);
    
  }
 
}
