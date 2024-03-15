import { SelectItem } from 'primeng/api';

export enum Game {
  Factorio = 'Factorio',
  CaptainOfIndustry = 'CaptainOfIndustry',
  DysonSphereProgram = 'DysonSphereProgram',
  Custom = 'Custom',
  FinalFactory = 'FinalFactory',
  Satisfactory = 'Satisfactory',
  Techtonica = 'Techtonica',
}

export const gameOptions: SelectItem<Game>[] = [
  { value: Game.Factorio, label: 'options.game.factorio' },
  { value: Game.DysonSphereProgram, label: 'options.game.dysonSphereProgram' },
  { value: Game.Custom, label: 'options.game.custom' },
  { value: Game.Satisfactory, label: 'options.game.satisfactory' },
  { value: Game.CaptainOfIndustry, label: 'options.game.captainOfIndustry' },
  { value: Game.Techtonica, label: 'options.game.techtonica' },
  { value: Game.FinalFactory, label: 'options.game.finalFactory' },
];
