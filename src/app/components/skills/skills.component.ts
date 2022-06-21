import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [CommonModule],
})
export class SkillsComponent implements OnInit {
  public skills = [
    { name: 'HTML5', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'CSS3', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'JavaScript', color: 'bg-yellow-400', hover: 'bg-slate-600' },
    { name: 'TypeScript', color: 'bg-blue-600', hover: 'bg-blue-700' },
    { name: 'Angular', color: 'bg-red-500', hover: 'bg-red-600' },
    { name: 'React', color: 'bg-blue-500', hover: 'bg-slate-600' },
    { name: 'NodeJS', color: 'bg-green-600', hover: 'bg-emerald-700' },
    { name: 'ExpressJS', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'MongoDB', color: 'bg-emerald-500', hover: 'bg-green-700' },
    { name: 'MySQL', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'PostgreSQL', color: 'bg-blue-600', hover: 'bg-blue-700' },
    { name: 'Tailwindcss', color: 'bg-teal-500', hover: 'bg-teal-600' },
    { name: 'Bootstrap', color: 'bg-purple-600', hover: 'bg-purple-600' },
    { name: 'SASS', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'NextJS', color: 'bg-cyan-400', hover: 'bg-cyan-700' },
    { name: 'Git', color: 'bg-orange-400', hover: 'bg-orange-600' },
    { name: 'GitHub', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Csharp', color: 'bg-violet-600', hover: 'bg-violet-700' },
    { name: 'Dotnet', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Redwoodjs', color: 'bg-red-800', hover: 'bg-red-900' },
    { name: 'Visualstudio', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Visualstudiocode', color: 'bg-slate-400', hover: 'bg-slate-600' },
    {
      name: 'Figma',
      color: 'bg-rose-500',
      hover: 'bg-slate-600',
    },
    { name: 'Illustrator', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Photoshop', color: 'bg-indigo-500', hover: 'bg-indigo-600' },
    { name: 'XD', color: 'bg-rose-500', hover: 'bg-rose-700' },
    { name: 'Python', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Dart', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Nestjs', color: 'bg-rose-500', hover: 'bg-rose-600' },
    { name: 'Prisma', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Sanity', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Postman', color: 'bg-orange-400', hover: 'bg-slate-600' },
    { name: 'Testing', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Jest', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Mocha', color: 'bg-slate-400', hover: 'bg-slate-600' },
    { name: 'Storybook', color: 'bg-slate-400', hover: 'bg-slate-600' },

  ];
  constructor() {}

  ngOnInit(): void {}
}
