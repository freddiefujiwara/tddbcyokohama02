var vendingMachine = require("../src/vendingmachine.js").createVendingMachine;

describe("Vending Machine", function () {
    var vm;

    beforeEach(function () {
        vm = vendingMachine();
    });

    describe("初期状態", function () {

        it("総額が0円になっている", function () {
            expect(vm.totalAmount()).toBe(0);
        });
        it("売上金額が0円になっている" , function(){
            expect(vm.salesAmount()).toBe(0);
        });

        it('在庫を確認する', function() {
            var drinks = vm.checkDrinks();
            expect(drinks).toEqual({
                name : "コーラ",
                price : 120,
                num : 5
            });
        });
    });

    describe("10円投入", function () {
        it("総額が10円になっている", function () {
            vm.insert(10);
            expect(vm.totalAmount()).toBe(10);
        });
    });

    describe("10円投入、50円投入", function () {

        beforeEach(function () {
            vm.insert(10);
            vm.insert(50);
        });

        it("総額が60円になっている", function () {

            expect(vm.totalAmount()).toBe(60);
        });

        describe("払い戻し", function () {
            it("総額が0円になっている", function () {
                var refundAmount = vm.refund();
                expect(refundAmount).toEqual([10,50]);
                expect(vm.totalAmount()).toBe(0);
            });

        });
    });
    describe("1円投入、5円投入、10円投入", function () {
        it("不正なコインはすぐ帰ってくる", function () {
            var coin = vm.insert(1);
            expect(coin).toBe(1);
        });
	
        it("総額が10円になっている", function () {
            vm.insert(1);
            vm.insert(5);
            expect(vm.insert(10)).toBeNull();

            expect(vm.totalAmount()).toBe(10);
        });
    });

    describe("コーラ購入可能な状態", function () {
        it("購入できるか", function(){
            vm.insert(100);
            vm.insert(50);
            expect(vm.purchasable()).toBeTruthy();
        });
        it("購入", function(){
            vm.insert(100);
            vm.insert(50);
            vm.purchase();
            var drinks = vm.checkDrinks();
            expect(drinks.num).toBe(4);
            expect(vm.salesAmount()).toBe(120);
            expect(vm.refund()).toEqual([10, 10, 10]);
        });
    });

    describe("コーラ購入可能でない状態", function () {
        it("投入金額が足りなくて購入できない", function(){
            vm.insert(50);
            expect(vm.purchasable()).toBeFalsy();
        });
        it("在庫が足りなくて購入できない", function(){
            vm.insert(100);
            vm.insert(50);
            vm.drinks.num = 0;
            expect(vm.purchasable()).toBeFalsy();
        });
        it("購入しても状態が変化しない", function(){
            vm.insert(50);
            vm.purchase();
            var drinks = vm.checkDrinks();
            expect(drinks.num).toBe(5);
            expect(vm.salesAmount()).toBe(0);
        });
    });

    describe("コーラ購入可能でない状態", function () {

    });

});
