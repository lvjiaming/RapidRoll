// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        bestScore: 0,
    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        var bestScore = cc.sys.localStorage.getItem("bestScore");
        if(bestScore){
            this.bestScore = bestScore;
        }
    },

    updateScore: function (score) {
        if(score > this.bestScore){
            this.bestScore = score;
        }
        //cc.log(score);
    },

    save () {
        cc.sys.localStorage.setItem('bestScore',this.bestScore);
    },
});
