exports.createVendingMachine = function() {
    var money = [];
    var salseAmount = 0;
    var allowedMoneys = [10,50,100,500,1000];

    return {
        drinks : {
            name : "コーラ",
            price : 120,
            num : 5
        },

        totalAmount : function(){
          var sum = 0;
          money.forEach(function(coin){
              sum += coin;
          });
          return sum;
        },

        insert : function (localMoney) {
            if(allowedMoneys.indexOf(localMoney) == -1){
                return localMoney;
            }
            money.push(localMoney);
            return null;
        },

        refund : function(){
            var currentCoins = money;
            money = [];
            return currentCoins;
        },
        checkDrinks : function() {
            return this.drinks;
        },

        salesAmount : function() {
            return salseAmount;
        },

        purchasable : function () {
            return this.totalAmount() >= this.drinks.price && this.drinks.num > 0;
        },
        purchase : function () {
            if(!this.purchasable()){
                return;
            }
            this.drinks.num--;
            salseAmount += this.drinks.price;
        }
    };
};
