import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DogsService } from '../../service/dogs.service';
import { NgIf, NgFor } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dogslist',
  standalone: true,
  imports: [NgIf,NgFor,ReactiveFormsModule],
  templateUrl: './dogslist.component.html',
  styleUrl: './dogslist.component.css',
  providers:[DogsService]
})
export class DogslistComponent {
 

  // searchForm: FormGroup;
  // dogData: any;
  // allDogs: any[] = [];
  // filteredDogs: any[] = [];
  // errorMessage: string | null = null;

  // constructor(private fb: FormBuilder, private dogService: DogsService) {
  //   this.searchForm = this.fb.group({
  //     statusCode: ['', [Validators.required, Validators.pattern('^[0-9x]*$')]]
  //   });
  // }

  // ngOnInit(): void {
  //   this.dogService.getAllDogs().subscribe(dogs => {
  //     this.allDogs = dogs;
  //     this.filteredDogs = dogs;
  //   });
  // }

  // onSearch(): void {
  //   if (this.searchForm.valid) {
  //     const statusCode = this.searchForm.value.statusCode;
  //     if (statusCode.includes('x')) {
  //       this.filteredDogs = this.allDogs.filter(dog => 
  //         new RegExp(`^${statusCode.replace(/x/g, '\\d')}$`).test(dog.status_code)
  //       );
  //     } else {
  //       this.filteredDogs = this.allDogs.filter(dog => dog.status_code === +statusCode);
  //     }
  //   }
  // }

  // onSave(): void {
  //   // Handle save functionality
  //   alert('Filtered list saved successfully!');
  // }
  searchForm: FormGroup;
  filteredDogs: any[] = [];
  errorMessage: string | null = null;
  savedDogs: any[] = [];
  showSavedList: boolean = false;

  constructor(private fb: FormBuilder, private dogService: DogsService) {
    this.searchForm = this.fb.group({
      statusCode: ['', [Validators.required, Validators.pattern('^[0-9x]*$')]]
    });
  }

  onSearch(): void {
    // if (this.searchForm.valid) {
    //   const statusCode = this.searchForm.value.statusCode;

    //   if (statusCode.includes('x')) {
    //     this.filteredDogs = [];
    //     const regex = new RegExp('^' + statusCode.replace(/x/g, '\\d') + '$');
    //     for (let i = 100; i < 600; i++) {
    //       if (regex.test(i.toString())) {
    //         this.fetchDogData(i.toString());
    //       }
    //     }
    //   } else {
    //     this.fetchDogData(statusCode);
    //   }
    // }
    if (this.searchForm.valid) {
      const statusCode = this.searchForm.value.statusCode;

      this.filteredDogs = [];
      if (statusCode.includes('x')) {
        if(statusCode<100 || statusCode>=600){
          alert("Please,enter valid status code");
        }
        const regex = new RegExp('^' + statusCode.replace(/x/g, '\\d') + '$');
        for (let i = 100; i < 600; i++) {
          // if(statusCode)
          if (regex.test(i.toString()) ) {
            this.addDogData(i.toString());
          }
        }
      } else {
        if(statusCode<100 || statusCode>=600){
          alert("Please,enter valid status code");
          this.searchForm.reset();
        }else{
        this.addDogData(statusCode);
      }}
    }
  }
  addDogData(statusCode: string): void {
    this.dogService.getDogByStatusCode(statusCode).subscribe(data => {
      if (data) {
        console.log(data);
        
        this.filteredDogs.push(data);
      }
      if (data) {
        console.log(data);
        this.filteredDogs.push({
          status: data.status,
          image: {
            jpg: data.url
          },
          json: data.json,
          // data: data.data
          
        });
        // console.log(data.data);
      } else {
        this.errorMessage = `Could not find dog image for status code ${statusCode}.`;
      }
    });
  }

  fetchDogData(statusCode: string): void {
    this.dogService.getDogByStatusCode(statusCode).pipe(
      catchError(error => {
        this.errorMessage = `Could not find dog image for status code ${statusCode}.`;
        console.log(error);
        
        return of(null);
      })
    ).subscribe(data => {
      if (data) {
        // if(data.status_code===200){
        console.log(data);
        

          this.filteredDogs.push({
            title: `Status Code ${statusCode}`,
            status_code: statusCode,
            image: {
              jpg: `${this.dogService.baseUrl}/${statusCode}.jpg`,
              json:`${this.dogService.baseUrl}/${statusCode}.json`,
            }
          });
        // }
      }
    });
  }
  saveDog(dog: any): void {
    if (!this.savedDogs.includes(dog)) {
      this.savedDogs.push(dog);
    }
  }
  deleteDog(dog: any): void {
    const index = this.savedDogs.indexOf(dog);
    if (index !== -1) {
      this.savedDogs.splice(index, 1);
    }
  }

  toggleList(): void {
    this.showSavedList = !this.showSavedList;
  }
}
