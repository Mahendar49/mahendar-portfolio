import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
 skills = [
    { name: 'Angular', icon: 'assets/angular.webp' },
    { name: 'ReactJS', icon: 'assets/react.jpeg' },
    { name: 'Java', icon: 'assets/java.jpeg' },
    { name: 'Spring Boot', icon: 'assets/springboot.webp' },
    { name: 'JavaScript', icon: 'assets/js.jpeg' },
    { name: 'MySQL', icon: 'assets/mysql.webp' },
    { name: 'HTML5', icon: 'assets/html.jpeg' },
    { name: 'CSS3', icon: 'assets/css.webp' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.webp' }
  ];
}
