import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Subscription } from 'rxjs';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    NgIf,
    FormsModule,
    TranslateModule,
    DropdownComponent,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  visible = false;
  translateServ = inject(TranslateService);
  actRoute = inject(ActivatedRoute);
  subscription: Subscription;
  lang!: string;

  selectedCountry!: { image: string; lang: string };
  countries = [
    {
      image: '../../../../assets/images/languages/uk-flag.svg',
      lang: 'en',
    },
    {
      image: '../../../../assets/images/languages/sudi.svg',
      lang: 'ar',
    },
  ];
  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    if (this.lang === 'en') {
      document.body.dir = 'ltr';
      this.selectedCountry = this.countries[0];
    } else {
      document.body.dir = 'rtl';
      this.selectedCountry = this.countries[1];
    }
    this.translateServ.use(this.lang);
    this.selectOptionTranslate();
  }

  onChange(e) {
    this.lang =
      e.value.lang === 'English' || e.value.lang === 'إنجليزي' ? 'en' : 'ar';

    this.lang === 'en'
      ? (document.body.dir = 'ltr')
      : (document.body.dir = 'rtl');

    // store the selected language in local storage
    localStorage.setItem('lang', this.lang);
    this.translateServ.use(this.lang);
    this.selectOptionTranslate();
  }

  selectOptionTranslate() {
    this.subscription = this.translateServ.get('header').subscribe((res) => {
      this.selectedCountry.lang = this.translateServ.instant('header.eng');
      this.countries[0].lang = this.translateServ.instant('header.eng');
      this.countries[1].lang = this.translateServ.instant('header.ar');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
