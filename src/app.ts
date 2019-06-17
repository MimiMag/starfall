import 'phaser'
import { GameScene } from './gameScene';
import { WelcomeScene } from './welcomeScene';
import { ScoreScene } from './scoreScene';


// Any because phaser types are not up to date yet...
// Type GameConfig is unknown,  
// Phaser.IConfig, Phaser.Types.Core.GameConfig don't have the properties we need
const config: any = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [WelcomeScene, GameScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: { debug: false }
  },
  backgroundColor: "#000033"
};

export class StarfallGame extends Phaser.Game { 
  constructor(config: any) { 
    super(config); 
  } 
}

window.onload = () => { var game = new StarfallGame(config); };

