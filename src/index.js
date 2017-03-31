import 'pixi.js';
import 'p2';
import Phaser from 'phaser';

const options = {
	preload,
	create,
	update,
	render,
};

const game = new Phaser.Game(800,600, Phaser.AUTO, 'mainContent', options);

let deadpool, captainAmerica;

let sprites;

function preload() {
	game.load.spritesheet('sadako', '/images/sadako.png', 32, 47, 18)
	game.load.atlasJSONHash('deadpool', 'images/deadpool.png', 'images/deadpool.json');
	game.load.atlasJSONHash('captainAmerica', 'images/captainamerica_shield.png', 'images/captainamerica_shield.json');
}	

function create() {
	deadpool = game.add.sprite(0,0, 'deadpool');
	deadpool.animations.add('walkFront', ['front1', 'front2', 'front3', 'front4'], 5, true, false);
	deadpool.animations.play('walkFront');

	captainAmerica = game.add.sprite(50, 0, 'captainAmerica');
	captainAmerica.animations.add('walkLeft', ['left1', 'left2', 'left3', 'left4'], 5, true, false);
	captainAmerica.animations.play('walkLeft');

	sprites = game.add.group();
	game.time.events.loop(100, () => {
		let sadako = sprites.create(0, game.world.randomY, 'sadako');
		sadako.animations.add('sulong', [4,5,6,7]);
		sadako.play('sulong', 10, true);
	}, this);
}

function update() {

    sprites.setAll('x', 10, true, true, 1);

    // sprites.forEach(checkSprite, this, true);

}

function checkSprite(sprite) {
	
}

function render() {

}