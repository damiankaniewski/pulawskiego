// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageIndex = 1;
  totalImages = 36;
  private intervalId: any;

  rotateLeft() {
    this.imageIndex--;
    if (this.imageIndex < 1) {
      this.imageIndex = this.totalImages;
    }
  }

  rotateRight() {
    this.imageIndex++;
    if (this.imageIndex > this.totalImages) {
      this.imageIndex = 1;
    }
  }

  startRotation(direction: 'left' | 'right') {
    this.stopRotation();
    this.intervalId = setInterval(() => {
      direction === 'left' ? this.rotateLeft() : this.rotateRight();
    }, 50);
  }

  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
