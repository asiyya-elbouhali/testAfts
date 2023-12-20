import { Component, OnInit } from '@angular/core';
import { Fish } from '../../Model/fish';
import { FishService } from '../../Service/fish.service';

@Component({
  selector: 'fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  fishList: Fish[] = [];
  selectedFish: Fish = new Fish();
  isEditing = false;

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    this.fetchFish();
  }

  fetchFish(): void {
    this.fishService.fetchFish().subscribe((fish: Fish[]) => {
      this.fishList = fish;
    });
  }

  createFish(): void {
    const newFish: Fish = {
      name:'',
      averageWeight: 0
    };
  
    this.fishService.createFish(newFish).subscribe(() => {
      this.fetchFish();
      this.selectedFish = new Fish();
    });
  }
  

  editFish(fish: Fish): void {
    this.selectedFish = { ...fish };
    this.isEditing = true;
  }

  updateFish(): void {
    this.fishService.updateFish(this.selectedFish.name, this.selectedFish).subscribe(() => {
      this.fetchFish();
      this.selectedFish = new Fish();
      this.isEditing = false;
    });
  }

  deleteFish(name: string): void {
    this.fishService.deleteFish(name).subscribe(() => {
      this.fetchFish();
    });
  }

  cancelEdit(): void {
    this.selectedFish = new Fish();
    this.isEditing = false;
  }
}
