import { ChangeDetectionStrategy, Component } from "@angular/core";
import { DropdownFilterOptions } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
@Component({
  selector: "app-headof-company",
  standalone: true,
  imports: [DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./headof-company.component.html",
  styleUrl: "./headof-company.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadofCompanyComponent {
  selectedCountry: { image: string; lang: string } = {
    image: "../../../../assets/images/languages/uk-flag.svg",
    lang: "Mortada",
  };
  countries = [
    {
      image: "../../../../assets/images/languages/uk-flag.svg",
      lang: "arabic",
    },
    {
      image: "../../../../assets/images/languages/sudi.svg",
      lang: "english",
    },
  ];
}
