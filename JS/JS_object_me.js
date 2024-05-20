const me = {

    name : '최의현',
    address : '대명까치맨션',
    phoneNum : '010-3073-7232',
    tftTier : 'master',
    canDoGame : function (user) {
        user.pointUp();
    }

}

const user = {

    point: 190,
    pointUp: function() {
        this.point = this.point + 30;
    }

}

me.canDoGame(user);
console.log(user.point)