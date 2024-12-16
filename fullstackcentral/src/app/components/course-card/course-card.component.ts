import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  isPremium: boolean;
  lessonCount: number;
  duration: string;
  level: string;
  price: number;
  updatedAt: string;
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class CourseCardComponent {
  @Input() course!: Course;
}
