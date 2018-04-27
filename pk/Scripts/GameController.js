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
                debugger;
                currentEnemy.style.animationName = "enemy-dead-animation";
                currentEnemy.style.animationDuration = "1s";
                currentEnemy.style.display = "none";    //To-Do : comment and check
                Player.killEnemy++;
                setTimeout(function (currentEnemy) {
                    currentEnemy.parentNode.removeChild(currentEnemy);
                }, 1000);
            }
            else if (whoDie == "pk") {
                debugger;
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
            Player.inSpace = false;
            var blockPosition = GameController.getPosition(blocks[i]);
            if (GameController.detectBlockDownCollision(pkPosition, blockPosition) || pkPosition.y <= 2) {
                GameController.canJump = false;
                Player.inSpace = true;
                break;
            } else if (GameController.detectCollision(pkPosition, blockPosition)) {
                GameController.currentBlock = blocks[i];
                GameController.collision = true;
                GameController.gravity = false;
                GameController.canJump = true;
                Player.inSpace = false;
                if (blocks[i].classList.contains('blockmovevertically')) {
                    GameController.pk.style.top = blockPosition.y - 50 + "px";
                }
                if (blocks[i].classList.contains('blockmovehorizontally')) {
                    if (Player.horizontalSlider) {
                        debugger;
                        Player.posInhorizontalSlider = pkPosition.x - blockPosition.x;
                    }
                    Player.horizontalSlider = false;
                    GameController.pk.style.left = blockPosition.x + Player.posInhorizontalSlider + "px";  //To-Do
                }
                break;
            }
        }
        if (GameController.keys && GameController.keys[37] && pkPosition.x >= 2) {  //to left
            pk.style.left = (pkPosition.left - 2) + "px";
        }
        if (GameController.keys && GameController.keys[39] && pkPosition.x <= 1550) {   // to right
            pk.style.left = pkPosition.left + 2 + "px";
        }
        if (GameController.canJump && !Player.inSpace && GameController.keys && GameController.keys[38]) {
            var time = 0;
            GameController.gravity = false;
            Player.inSpace = true;
            //GameController.canJump = false;
            //pk.classList.add('pk-jump');  //one approach
            //setTimeout(function () {
            //    pk.classList.remove('pk-jump');
            //}, 1000);
            //pk.classList.remove('pk-jump');

            //var pkJump = setInterval(jump, 20);   // second approach
            //function jump() {
            //    if (time == 2) {
            //        clearInterval(pkJump);
            //        time = 0;
            //    } else {
            pk.style.top = pkPosition.top - 4 + "px";
            //time++;
            // }
            // }
        }
        if (GameController.gravity && !GameController.collision) {
            pk.style.top = pkPosition.top + 4 + "px";
        }

        GamePlatform.updateScore();
    },


};