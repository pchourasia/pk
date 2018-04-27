var Player = {
    level: 1,
    inSpace: false,
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