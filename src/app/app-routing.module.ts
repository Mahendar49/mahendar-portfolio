import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import { EducationComponent } from "./education/education.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { ProjectsComponent } from "./projects/projects.component";
import { InternshipComponent } from "./internship/internship.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";


const routes:Routes=[
     { path: '/', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'contact', component: ContactComponent },
  {path:'**', redirectTo:'/'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}