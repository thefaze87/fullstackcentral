import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CourseCardComponent, CommonModule]
})
export class AppComponent {
  isScrolled = false;
  logoLoaded = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  onLogoLoad() {
    this.logoLoaded = true;
  }

  featuredCourses = [
    {
      id: '1',
      title: 'Angular Mastery Workshop',
      description: 'Build production-ready applications with Angular',
      image: 'assets/courses/angular-mastery.jpg',
      isPremium: true,
      lessonCount: 42,
      duration: '12h 30m',
      level: 'Intermediate',
      updatedAt: '2024-02-15',
      price: 199
    },
    // Add more courses...
  ];
}
