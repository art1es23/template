import * as PIXI from 'pixi.js';
/*
import 'pixi-filters';
*/
import {TimelineMax} from 'gsap';

let app = new PIXI.Application({
        width: window.innerWidth,         // default: 800
        height: window.innerHeight,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1,       // default: 1
        backgroundColor: 0xFFBB55
    }
);

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

loader
    .add("img/6.jpg")
    .load(setup);

function setup() {

        //INITIALIZATION
        let container = new PIXI.Container();
        let bgContainer = new PIXI.Container();
        let textContainer = new PIXI.Container();

        app.stage.addChild(container);
        container.addChild(bgContainer);
        container.addChild(textContainer);

        //BACKGROUND STAGE
        let bg = PIXI.Sprite.from("img/6.jpg");

        bg.width = window.innerWidth;
        bg.height = window.innerHeight;

        bgContainer.addChild(bg);

        //SHOCKWAVE
/*
        bgContainer.filters = [new PIXI.filters.ShockwaveFilter()];
*/


        //TEXT STAGE
        let basicText = new PIXI.Text('Basic text in pixi', {
                fontFamily: 'Arial Narrow',
                fontSize: 136,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: '#ffffff',
                wordWrap: true,
                wordWrapWidth: 440
        })

        basicText.x = -300;
        basicText.y = 100;
        basicText.alpha = 0;

        textContainer.addChild(basicText);

        //DISPLACEMENT STAGE
        let displacementSprite = PIXI.Sprite.from("img/displacement.png");
        let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        app.stage.addChild(displacementSprite);

        displacementFilter.scale.x = 200;
        displacementFilter.scale.y = 300;

        textContainer.filters = [displacementFilter];

        let tl = new TimelineMax();
        tl
/*            .to(shockWave, 3, {time: 1, amplitude: 10})*/
            .to( displacementFilter.scale, 1, {x: 0.1, y: 0.1})
            .to(basicText.position, 1, {x: 100}, 0)
            .to(basicText, 1, {alpha: 1}, 0);

        document.body.addEventListener('click', () => {
                let tl = new TimelineMax();
                tl
                    .to( displacementFilter.scale, 1, {x: 300, y: 200})
                    .to(basicText.position, 1, {x: 400}, 0)
                    .to(basicText, 1, {alpha: 0}, 0);
        });
}

app.ticker.add(function (delta) {
});



/*
let app = new PIXI.Application({
        width: window.innerWidth,         // default: 800
        height: window.innerHeight,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1,       // default: 1
        backgroundColor: 0xFFBB55
    }
);

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

loader
    .add("img/atlas.json")
    .load(setup);

function setup () {
        let id = loader.resources["img/atlas.json"].textures;
        let mino = new PIXI.Sprite(id["mino.png"]);

        mino.anchor.set(0.5, 0.5);
        mino.scale.set(0.5);

        mino.x = window.innerWidth / 2;
        mino.y = window.innerHeight / 2;
        app.stage.addChild(mino);

        let box = new PIXI.Graphics();
        box.beginFill(0xccff99);
        box.drawRect(0,0,75, 75);
        box.endFill();
        box.x = 250;
        box.y = 250;
        app.stage.addChild(box);

        app.ticker.add((delta) => {
                if (hitTestRectangle(mario, mino)) {
                        /!*box.tint = 0xff3300;*!/
                        mino.scale.set(0.6);
                } else {
                        mino.scale.set(0.5);
                }
        });


        let mario = new PIXI.Sprite(id["mario.png"]);

        mario.anchor.set(0.5, 0.5);
        mario.scale.set(0.25);

        mario.x = 300;
        mario.y = window.innerHeight / 2;
        app.stage.addChild(mario);

        app.ticker.add((delta) => {
                mario.rotation -= delta * 0.1;
        });
        app.stage.interactive = true;
        app.stage.on("pointermove", moveMario);

        function moveMario(e) {
                let pos = e.data.global;

                mario.x = pos.x;
                mario.y = pos.y;
        }

        document.addEventListener("keydown", function () {
                if (event.keyCode == 37) {
                        mino.x -= 15;
                }
                if (event.keyCode == 38) {
                        mino.y -= 15;
                }
                if (event.keyCode == 39) {
                        mino.x += 15;
                }
                if (event.keyCode == 40) {
                        mino.y += 15;
                }
        });

}

function hitTestRectangle(r1, r2) {

        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

                //A collision might be occurring. Check for a collision on the y axis
                if (Math.abs(vy) < combinedHalfHeights) {

                        //There's definitely a collision happening
                        hit = true;
                } else {

                        //There's no collision on the y axis
                        hit = false;
                }
        } else {

                //There's no collision on the x axis
                hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
}
*/
