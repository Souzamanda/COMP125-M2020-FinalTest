"use strict";
let Game = (function () {
    // variable declarations
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let assets;
    let rollButton;
    let leftReel;
    let rightReel;
    let leftLabel;
    let rightLabel;
    // Number tallies
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let assetManifest = [
        { id: "1", src: "./Assets/images/1.png" },
        { id: "2", src: "./Assets/images/2.png" },
        { id: "3", src: "./Assets/images/3.png" },
        { id: "4", src: "./Assets/images/4.png" },
        { id: "5", src: "./Assets/images/5.png" },
        { id: "6", src: "./Assets/images/6.png" },
        { id: "backButton", src: "./Assets/images/startButton.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "blank", src: "./Assets/images/blank.png" },
        { id: "button", src: "./Assets/images/button.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "resetButton", src: "./Assets/images/resetButton.png" },
        { id: "rollButton", src: "./Assets/images/rollButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "startOverButton", src: "./Assets/images/startOverButton.png" }
    ];
    function Preload() {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config
        Main();
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        stage.update();
    }
    function Reels() {
        let betDice = [" ", " "];
        let outcome = [0, 0];
        for (let spin = 0; spin < 2; spin++) {
            outcome[spin] = Math.floor(Util.Mathf.RandomRange(1, 6));
            switch (outcome[spin]) {
                case Util.Mathf.Clamp(outcome[spin], 1, 1):
                    betDice[spin] = "1";
                    one++;
                    break;
                case Util.Mathf.Clamp(outcome[spin], 2, 2):
                    betDice[spin] = "2";
                    two++;
                    break;
                case Util.Mathf.Clamp(outcome[spin], 3, 3):
                    betDice[spin] = "3";
                    three++;
                    break;
                case Util.Mathf.Clamp(outcome[spin], 4, 4):
                    betDice[spin] = "4";
                    four++;
                    break;
                case Util.Mathf.Clamp(outcome[spin], 5, 5):
                    betDice[spin] = "5";
                    five++;
                    break;
                case Util.Mathf.Clamp(outcome[spin], 6, 6):
                    betDice[spin] = "6";
                    six++;
                    break;
            }
        }
        return betDice;
    }
    /**
     * This function is builds the interface
     * Puts every thing in place
     */
    function BuildInterface() {
        // Buttons
        rollButton = new UIObjects.Button("rollButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 150, true);
        stage.addChild(rollButton);
        // Labels
        leftLabel = new UIObjects.Label("1", "40px", "Consolas", "#000000", Config.Game.CENTER_X - 130, Config.Game.CENTER_Y + 50, true);
        stage.addChild(leftLabel);
        rightLabel = new UIObjects.Label("1", "40px", "Consolas", "#000000", Config.Game.CENTER_X + 130, Config.Game.CENTER_Y + 50, true);
        stage.addChild(rightLabel);
        // Reel GameObjects
        leftReel = new Core.GameObject("1", Config.Game.CENTER_X - 130, Config.Game.CENTER_Y - 90, true);
        stage.addChild(leftReel);
        rightReel = new Core.GameObject("1", Config.Game.CENTER_X + 130, Config.Game.CENTER_Y - 90, true);
        stage.addChild(rightReel);
    }
    /**
     * This function is controls items in the interface
     *
     */
    function InterfaceControl() {
        rollButton.on("click", () => {
            let reels = Reels();
            //Replace the images in the reels
            leftReel.image = assets.getResult(reels[0]);
            rightReel.image = assets.getResult(reels[1]);
            //leftLabel.text = 
        });
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");
        BuildInterface();
        InterfaceControl();
        Util.Mathf.RandomRange;
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map