var VendingMachine = require("../src/vendingmachine.js").createVendingMachine;

describe("Vending Machine", function () {

    describe("なにも投入されてない状態", function () {

        it("総額が0円になっている", function () {
            var vm = VendingMachine();
            expect(vm.totalAmount()).toBe(0);
        });
    });

    describe("10円投入", function () {
        it("総額が10円になっている", function () {
            var vm = VendingMachine();
            vm.insert(10);
            expect(vm.totalAmount()).toBe(10);
        });
    });

    describe("10円投入、50円投入", function () {
        var vm;

        beforeEach(function () {
            vm = VendingMachine();
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
        var vm;

        it("不正なコインはすぐ帰ってくる", function () {
            vm = VendingMachine();
            var coin = vm.insert(1);
            expect(coin).toBe(1);
        });
	
        it("総額が10円になっている", function () {
            vm = VendingMachine();
            vm.insert(1);
            vm.insert(5);
            vm.insert(10);

            expect(vm.totalAmount()).toBe(10);
        });
    });

    describe("120円のコーラが5本入っている初期在庫状態", function () {
        it('在庫を確認する', function() {
            vm = VendingMachine();
            var drinks = vm.checkDrinks();
            expect(drinks).toEqual({
                name : "コーラ",
                price : 120,
                num : 5
            });
        });
    });

});
