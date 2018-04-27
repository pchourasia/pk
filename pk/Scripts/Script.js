$(document).ready(function () {
    var Player = {
        level: 1,
        inSpace: true,
        coinsTaken: 0,
        killEnemy: 0,
        cupTaken: 0,
        keyTaken: 0,
        levelCleared: 0,
        totalPoints: 0,
        calculatePoints: function () {
            Player.totalPoints = Player.coinsTaken * 10 + Player.killEnemy * 20 + Player.cupTaken * 50 + Player.keyTaken * 50 + Player.levelCleared * 100;
        },
        horizontalSlider: true,
        posInhorizontalSlider: 0
    };

    var GamePlatform = {
        score: document.getElementById('score'),
        gameMusic: new Audio("Sounds/main.mp3"),
        coinSound: new Audio("Sounds/coin.mp3"),
        playerKillMusic: new Audio("Sounds/gameover.mp3"),

        levels: [
            {
                0: {
                    door: [
                        { left: "1500", top: "580" }
                    ],

                    enemies: [
                        { left: "650", top: "325" }
                    ],

                    smallEnemies: [
                       { left: "1100", top: "475" }
                    ],

                    cup: [
                        { left: "150", top: "350" }
                    ],

                    key: [
                        { left: "1350", top: "220" }
                    ],

                    coins: [
                        { left: "300", top: "120" },
                        { left: "350", top: "120" },
                        { left: "450", top: "350" },
                        { left: "450", top: "300" },
                        { left: "450", top: "250" },
                        { left: "500", top: "100" },
                        { left: "900", top: "600" }
                    ],

                    blocks: [
                        { left: "8", top: "58" },
                        { left: "250", top: "180" },
                        { left: "100", top: "400" },
                        { left: "400", top: "500" },
                        { left: "650", top: "350" },
                        { left: "900", top: "250" },
                        { left: "1250", top: "300" },
                        { left: "850", top: "650" },
                        { left: "1350", top: "650" }
                    ],

                    smallBlocks: [
                        { left: "1100", top: "500" }
                    ]
                },

                1: {
                    door: [
                        { left: "1500", top: "100" }
                    ],

                    enemies: [
                      //  { left: "650", top: "275" }
                    ],

                    smallEnemies: [
                      // { left: "1100", top: "475" }
                    ],

                    cup: [
                        { left: "875", top: "600" }
                    ],

                    key: [
                        { left: "100", top: "550" }
                    ],

                    coins: [
                        { left: "100", top: "300" },
                        { left: "150", top: "350" },
                        { left: "100", top: "400" },
                        { left: "150", top: "450" },
                        { left: "650", top: "250" },
                        { left: "800", top: "400" },
                        { left: "1100", top: "450" }
                    ],

                    blocks: [
                        { left: "8", top: "650" },
                    ],

                    smallBlocks: [
                        { left: "1000", top: "550", cssClass: "blockmovehorizontally" },
                        { left: "300", top: "550", cssClass: "" },
                        { left: "425", top: "450", cssClass: "" },
                        { left: "650", top: "350", cssClass: "blockmovevertically" },
                        { left: "850", top: "650", cssClass: "" },
                        { left: "1270", top: "250", cssClass: "blockmovevertically" },
                        { left: "1450", top: "170", cssClass: "" }
                    ]
                },

                2: {
                    door: [
                        { left: "1500", top: "100" }
                    ],

                    enemies: [
                      //  { left: "650", top: "275" }
                    ],

                    smallEnemies: [
                      // { left: "1100", top: "475" }
                    ],

                    cup: [
                        { left: "825", top: "200" }
                    ],

                    key: [
                        { left: "50", top: "550" }
                    ],

                    coins: [
                        { left: "50", top: "300" },
                        { left: "100", top: "350" },
                        { left: "50", top: "400" },
                        { left: "100", top: "450" },
                        { left: "650", top: "250" },
                        { left: "1100", top: "450" }
                    ],

                    blocks: [
                        //{ left: "8", top: "650" },
                    ],

                    smallBlocks: [
                        { left: "25", top: "650", cssClass: "" },
                        { left: "200", top: "370", cssClass: "blockmovevertically" },
                        { left: "1270", top: "250", cssClass: "blockmovevertically" },
                        { left: "625", top: "350", cssClass: "blockmovevertically" },
                        { left: "400", top: "400", cssClass: "blockmovevertically" },
                        { left: "800", top: "250", cssClass: "" },
                        { left: "800", top: "650", cssClass: "blockmovehorizontally" },
                        { left: "975", top: "525", cssClass: "blockmovehorizontally" },
                        { left: "1450", top: "170", cssClass: "" }
                    ]
                },

                3: {
                    door: [
                        { left: "1500", top: "100" }
                    ],

                    enemies: [
                      //  { left: "650", top: "275" }
                    ],

                    smallEnemies: [
                      // { left: "1100", top: "475" }
                    ],

                    cup: [
                        { left: "825", top: "200" }
                    ],

                    key: [
                        { left: "50", top: "550" }
                    ],

                    coins: [
                        { left: "50", top: "300" },
                        { left: "100", top: "350" },
                        { left: "50", top: "400" },
                        { left: "100", top: "450" },
                        { left: "650", top: "250" },
                        { left: "1100", top: "450" }
                    ],

                    blocks: [
                        //{ left: "8", top: "650" },
                    ],

                    smallBlocks: [
                        { left: "25", top: "650", cssClass: "" },
                        { left: "200", top: "370", cssClass: "blockmovevertically blockmovevertically-showhide" },
                        { left: "1270", top: "250", cssClass: "blockmovevertically blockmovevertically-showhide" },
                        { left: "625", top: "350", cssClass: "blockmovevertically blockmovevertically-showhide" },
                        { left: "400", top: "400", cssClass: "blockmovevertically blockmovevertically-showhide" },
                        { left: "800", top: "250", cssClass: "" },
                        { left: "800", top: "650", cssClass: "blockmovehorizontally blockmovehorizontally-showhide" },
                        { left: "975", top: "525", cssClass: "blockmovehorizontally blockmovehorizontally-showhide" },
                        { left: "1450", top: "170", cssClass: "" }
                    ]
                }

            }],

        draw: function () {
            var objects = "<div id='level'>";
            var level = Player.levelCleared;
            for (var i = 0; i < this.levels[0][level].blocks.length; i++) {
                objects += "<div id='block" + i + "' class='block' style='left:" + this.levels[0][level].blocks[i].left + "px;top:" + this.levels[0][level].blocks[i].top + "px';></div>";
            }
            for (var i = 0; i < this.levels[0][level].smallBlocks.length; i++) {
                objects += "<div id='smallblock" + i + "' class='block block-sm " + this.levels[0][level].smallBlocks[i].cssClass + "' style='left:" + this.levels[0][level].smallBlocks[i].left + "px;top:" + this.levels[0][level].smallBlocks[i].top + "px';></div>";
            }
            for (var i = 0; i < this.levels[0][level].coins.length; i++) {
                objects += "<div id='coin" + i + "' class='coin' style='left:" + this.levels[0][level].coins[i].left + "px;top:" + this.levels[0][level].coins[i].top + "px';></div>";
            }
            for (var i = 0; i < this.levels[0][level].enemies.length; i++) {
                objects += "<div id='enemy" + i + "' class='enemy' style='left:" + this.levels[0][level].enemies[i].left + "px;top:" + this.levels[0][level].enemies[i].top + "px';></div>";
            }
            for (var i = 0; i < this.levels[0][level].smallEnemies.length; i++) {
                objects += "<div id='enemy" + i + "' class='enemy enemy-sm' style='left:" + this.levels[0][level].smallEnemies[i].left + "px;top:" + this.levels[0][level].smallEnemies[i].top + "px';></div>";
            }
            objects += "<div id='cup" + "' class='cup' style='left:" + this.levels[0][level].cup[0].left + "px;top:" + this.levels[0][level].cup[0].top + "px';></div>";
            objects += "<div id='key" + "' class='key' style='left:" + this.levels[0][level].key[0].left + "px;top:" + this.levels[0][level].key[0].top + "px';></div>";
            objects += "<div id='door" + "' class='door' style='left:" + this.levels[0][level].door[0].left + "px;top:" + this.levels[0][level].door[0].top + "px';></div>";

            var width = 0;
			
            while (width < window.screen.width - 50) {
                objects += "<div class='fire' style='left:" + width + "px;'></div>";
                width += 60;
            }
            objects += "</div>";
            $('#level').remove();
            $('body').append(objects);
            $('#pk').css({ left: '8px', top: '10px' });
            
            var animatedBlocks = $('.blockmovevertically');
            var sec = 0;
            for (var i = 0; i < animatedBlocks.length; i++) {
                sec += 0.35;
                animatedBlocks[i].style.animationDelay = sec + 's';
            }
            var animatedBlocks = $('.blockmovehorizontally');
            sec = 0;
            for (var i = 0; i < animatedBlocks.length; i++) {
                animatedBlocks[i].style.animationDelay = sec + 's';
                sec += 0.5;
            }
			GamePlatform.gameMusic.play();
        },

        updateScore: function () {
            Player.calculatePoints();
            score.textContent = "Score: " + Player.totalPoints;
        },

        moveLeft: function(pk, pkPosition){
            pk.style.left = (pkPosition.left - 3) + "px";
        },

        moveRight: function(pk, pkPosition){
            pk.style.left = pkPosition.left + 3 + "px";
        },

        playerJump: function(pk){
            var time = 0;
            GameController.gravity = false;
            Player.inSpace = true;
            //   GameController.canJump = false;
            if (!pk.classList.contains("pk-jump")) {
                pk.classList.add('pk-jump');  //one approach
                setTimeout(function () {
                    pk.classList.remove('pk-jump');
                    //Player.inSpace = false;
                }, 1000);
            }
        },

        

    };

    GamePlatform.draw();
    //GamePlatform.gameMusic.play();

    var GameController = {

        pk: document.getElementById('pk'),
        fire: document.getElementsByClassName("fire"),
        enemies: document.getElementsByClassName("enemy"),
        coins: document.getElementsByClassName("coin"),
        cup: document.getElementById('cup'),
        key: document.getElementById('key'),
        door: document.getElementById('door'),
        collision: false,
        gravity: false,

        start: function () {
            GameController.pk = document.getElementById('pk'),
            GameController.fire = document.getElementsByClassName("fire"),
            GameController.enemies = document.getElementsByClassName("enemy"),
            GameController.coins = document.getElementsByClassName("coin"),
            GameController.cup = document.getElementById('cup'),
            GameController.key = document.getElementById('key'),
            GameController.door = document.getElementById('door'),
            GameController.collision = false,
            GameController.gravity = false,

            this.interval = setInterval(this.updateGameArea, 20);

            $(document).keydown(function (e) {
                e.preventDefault();
                GameController.keys = (GameController.keys || []);
                GameController.keys[e.keyCode] = (e.type == "keydown");
            });
            $(document).keyup(function (e) {
                GameController.keys[e.keyCode] = (e.type == "keydown");
            });
        },

        stop: function () {
            clearInterval(this.interval);
        },

        getPosition: function (ele) {
            var position = ele.getBoundingClientRect();
            return {
                x: position.x,
                y: position.y,
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,
                width: ele.offsetWidth,
                height: ele.offsetHeight
            }
        },

        detectCollision: function (player, box) {   //condition is correct for coin or key
            return (player.x <= box.x + box.width && box.x <= player.x + player.width && player.y <= box.y + box.height && box.y <= player.y + player.height)
        },

        detectEnemyCollision: function (player, enemy) {
            if (player.x + player.width >= enemy.x && player.x <= enemy.x + enemy.width && player.y + player.height + 4 >= enemy.y && player.y + player.height <= enemy.y + 4) {
                return "enemy";
            }
            else if (player.x + player.width >= enemy.x && player.x <= enemy.x + enemy.width && player.y + player.height >= enemy.y - 4 && player.y + player.height <= enemy.y + enemy.height + 4) {
                return "pk";
            }
        },

        collisionWithFire: function (pkPosition) {
            for (var i = 0; i < GameController.fire.length; i++) {
                var firePosition = GameController.getPosition(GameController.fire[i]);
                if (GameController.detectCollision(pkPosition, firePosition)) {
					GamePlatform.gameMusic.pause();
                    GamePlatform.playerKillMusic.play();
                    GameController.stop();
                    //setTimeout(function () {
                    //    document.getElementByTagName('body')[0].innerHtml = "";
                    //    GamePlatform.draw();
                    //    GameController.start();
                    //},1000);
                    return;
                }
            }
        },

        collisionWithCoin: function (pkPosition) {
            for (var i = 0; i < GameController.coins.length; i++) {
                var currentCoin = GameController.coins[i];
                var coinPosition = GameController.getPosition(currentCoin);
                if (GameController.detectCollision(pkPosition, coinPosition)) {
                    Player.coinsTaken++;
					//GamePlatform.coinSound.pause();
                    GamePlatform.coinSound.play();
                    currentCoin.parentNode.removeChild(currentCoin);
                }
            }
        },

        collisionWithEnemy: function (pkPosition) {
            for (var i = 0; i < GameController.enemies.length; i++) {
                var currentEnemy = GameController.enemies[i];
                var enemyPosition = GameController.getPosition(currentEnemy);
                var whoDie = GameController.detectEnemyCollision(pkPosition, enemyPosition);
                if (whoDie == "enemy") {
                    currentEnemy.style.animationName = "enemy-dead-animation";
                    currentEnemy.style.animationDuration = "1s";
                    currentEnemy.style.display = "none";    //To-Do : comment and check
                    Player.killEnemy++;
                    setTimeout(function (currentEnemy) {
                        currentEnemy.parentNode.removeChild(currentEnemy);
                    }, 1000);
                }
                else if (whoDie == "pk") {
                    GamePlatform.gameMusic.pause();
                    GamePlatform.playerKillMusic.play();
                    GameController.stop();
                }
            }
        },

        collisionWithCup: function (pkPosition) {

            if (GameController.cup) {
                var cupPosition = GameController.getPosition(GameController.cup);
                if (GameController.detectCollision(pkPosition, cupPosition)) {
                    Player.cupTaken++;
                    GameController.key.style.display = "block";
                    GameController.cup.parentNode.removeChild(GameController.cup);
                    GameController.cup = null;
                }
            }
        },

        collisionWithKey: function (pkPosition) {
            if (GameController.key) {
                var keyPosition = GameController.getPosition(GameController.key);
                if (GameController.detectCollision(pkPosition, keyPosition)) {
                    Player.keyTaken++;
                    GameController.key.parentNode.removeChild(GameController.key);
                    GameController.key = null;
                    GameController.door.classList.add("door-open");
                }
            }
        },

        detectBlockDownCollision: function (player, box) {
            return (player.x <= box.x + box.width && box.x <= player.x + player.width && player.y >= box.y - box.height && player.y <= box.y + box.height);
        },

        collisionWithDoor: function (pkPosition) {
            var doorPosition = GameController.getPosition(GameController.door);
            if (GameController.detectCollision(pkPosition, doorPosition) && GameController.door.classList.contains("door-open")) {
                Player.levelCleared++;
                alert("level cleared"); //To-Do
                GameController.stop();
                setTimeout(function () {
                    GamePlatform.draw();
                    GameController.keys = [];
                    GameController.start();
                }, 5000);
            }
        },

        updateGameArea: function () {
            var pkPosition = GameController.getPosition(GameController.pk);
            GameController.collisionWithFire(pkPosition);
            GameController.collisionWithCoin(pkPosition);
            GameController.collisionWithEnemy(pkPosition);
            GameController.collisionWithCup(pkPosition);
            GameController.collisionWithKey(pkPosition);
            GameController.collisionWithDoor(pkPosition);
            var blocks = document.getElementsByClassName("block");
            for (var i = 0; i < blocks.length; i++) {
                GameController.collision = false;
                GameController.gravity = true;
                Player.inSpace = true;
                var blockPosition = GameController.getPosition(blocks[i]);
                if (GameController.detectBlockDownCollision(pkPosition, blockPosition) || pkPosition.y <= 2) {
                   // GameController.canJump = false;
                    Player.inSpace = true;
                    break;
                } else if (GameController.detectCollision(pkPosition, blockPosition)) {
                    GameController.currentBlock = blocks[i];
                    GameController.collision = true;
                    GameController.gravity = false;
                   // GameController.canJump = true;
                    Player.inSpace = false;
                    if (blocks[i].classList.contains('blockmovevertically')) {
                        GameController.pk.style.top = blockPosition.y - 50 + "px";
                    }
                    if (blocks[i].classList.contains('blockmovehorizontally')) {
                        if (Player.horizontalSlider) {
                            
                            Player.posInhorizontalSlider = pkPosition.x - blockPosition.x;
                        }
                        Player.horizontalSlider = false;
                        GameController.pk.style.left = blockPosition.x + Player.posInhorizontalSlider + "px";  //To-Do
                    }
                    break;
                }
            }
            $('#leftBtn').bind('touchstart touch touchend mousedown mouseover mousedown', GamePlatform.moveLeft.bind(GameController, pk, pkPosition));

           
            $('#rightBtn').on('click touchstart touch touchend', GamePlatform.moveRight.bind(GameController, pk, pkPosition));

            if(!Player.inSpace){
                $('#jumpBtn').on('click', GamePlatform.playerJump.bind(GameController,pk));
            }

            if (GameController.keys && GameController.keys[37] && pkPosition.x >= 2) {  //to left
               GamePlatform.moveLeft(pk, pkPosition);
            }
            if (GameController.keys && GameController.keys[39] && pkPosition.x <= 1550) {   // to right
               GamePlatform.moveRight(pk, pkPosition);
            }
            if (!Player.inSpace && GameController.keys && GameController.keys[38]) {    //to jump
               GamePlatform.playerJump(pk);
            }
            if (GameController.gravity && !GameController.collision) {
                pk.style.top = pkPosition.top + 6 + "px";
            }

            GamePlatform.updateScore();
        },


    };


    GameController.start();
});