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
                    { left: "650", top: "275" }
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
                    { left: "650", top: "300" },
                    { left: "900", top: "150" },
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
                    { left: "400", top: "450", cssClass: "" },
                    { left: "625", top: "350", cssClass: "blockmovevertically" },
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
            }

        }],

    draw: function () {
        var objects = "<div id='level'>";
        var level = 2;//Player.levelCleared;
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
        debugger;
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
    },

    updateScore: function () {
        Player.calculatePoints();
        score.textContent = "Score: " + Player.totalPoints;
    }
};