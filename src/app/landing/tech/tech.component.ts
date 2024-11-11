import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  techstack = [
    { key: "Angular", value: "Angular", color: "#dd1b16" },
    { key: "React", value: "React", color: "#61dafb" },
    { key: "Redux", value: "Redux", color: "red" },
    { key: "NgRx", value: "NgRx", color: "#f9a828" },
    { key: "RxJS", value: "RxJS", color: "#00796b" },
    { key: "JavaScript", value: "JavaScript", color: "#f0db4f" },
    { key: "TypeScript", value: "TypeScript", color: "#3178c6" },
    { key: "HTML", value: "HTML", color: "#e34f26" },
    { key: "CSS", value: "CSS", color: "#2965f1" },
    { key: "Bootstrap", value: "Bootstrap", color: "#563d7c" },
    { key: "Tailwind CSS", value: "Tailwind CSS", color: "#06b6d4" },
    { key: "Java", value: "Java", color: "#007396" },
    { key: "CI/CD", value: "CI/CD", color: "#00bfae" },
    { key: "Azure", value: "Azure", color: "#0083b0" },
    { key: "AWS", value: "AWS", color: "#ff9900" },
    { key: "SASS", value: "SASS", color: "#cc6699" },
    { key: "Angular Material", value: "Angular Material", color: "#e25d5d" },
    { key: "Jest", value: "Jest", color: "#94405b" },
    { key: "Karma", value: "Karma", color: "#8d48d7" },
    { key: "Jasmine", value: "Jasmine", color: "#8b9f9c" },
    { key: "Git", value: "Git", color: "#f1502f" },
    { key: "GitHub", value: "GitHub", color: "#181717" },
    { key: "Webpack", value: "Webpack", color: "#8dd6f9" },
    { key: "NPM", value: "NPM", color: "#cb3837" },
    { key: "Docker", value: "Docker", color: "#2496ed" },
    { key: "Postman", value: "Postman", color: "#f7b924" },
    { key: "JIRA", value: "JIRA", color: "#0062ff" },
    { key: "Slack", value: "Slack", color: "#36c5f0" },
    { key: "GraphQL", value: "GraphQL", color: "#e535ab" },
    { key: "Firebase", value: "Firebase", color: "#ffca28" },
    { key: "Contentful", value: "Contentful", color: "#ffb200" },
    { key: "Elasticsearch", value: "Elasticsearch", color: "#005d6f" },
    { key: "Axios", value: "Axios", color: "#5a29e3" },
    { key: "Chart.js", value: "Chart.js", color: "#f6b323" },
    { key: "D3.js", value: "D3.js", color: "#f2a900" },
    { key: "Angular CLI", value: "Angular CLI", color: "#41a2f1" },
    { key: "Responsive Design", value: "Responsive Web Design", color: "#00b8a9" },
    { key: "Agile", value: "Agile Methodology", color: "#5a2f96" },
    { key: "UI/UX Design", value: "UI/UX Design", color: "#fe6d73" },
    { key: "SonarQube", value: "SonarQube", color: "#4e9b9e" }
  ];
}
