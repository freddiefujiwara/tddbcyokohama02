exports.createVendingMachine = function() {
    return {
        coins : [],

        drinks : {
            name : "コーラ",
            price : 120,
            num : 5
        },

        totalAmount : function(){
          var sum = 0;
          this.coins.forEach(function(coin){
              sum += coin;
          });
          return sum;
        },

        insert : function (coin) {
            var allowedCoins =[10,50,100,500,1000];

            if(allowedCoins.indexOf(coin) != -1){
                this.coins.push(coin);
            } else {
                return coin;
            }

        },
        refund : function(){
            var currentCoins = this.coins;
            this.coins = [];
            return currentCoins;
        },
        checkDrinks : function() {
            return this.drinks;
        }
    };
};
