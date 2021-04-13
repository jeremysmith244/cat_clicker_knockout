var Cat = function () {

    that = this;
    that.clickCount = ko.observable(0);
    that.name = ko.observable('Tabby');
    that.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    that.nickNames = ko.observableArray([
        {nick:'Tabitha'},
        {nick:'Tabberella'},
        {nick:'Tabytron Prime'},
        {nick:'Holy Tabyrnacle'},
    ]);

    that.level = ko.computed(function() {
        if (that.clickCount() < 10) {
            return 'Baby';
        } else if (that.clickCount() < 20) {
            return 'Teeny';
        } else if (that.clickCount() < 30) {
            return 'Meeny';
        } else if (that.clickCount() < 40) {
            return 'Goldy';
        } else if (that.clickCount() < 60) {
            return 'Oldy';
        } else {
            return 'Moldy';
        };
    });

};

var ViewModel = function() {

    thiz = this;
    thiz.currentCat = ko.observable( new Cat() );

    thiz.incrementCounter = function() {
        thiz.currentCat().clickCount(thiz.currentCat().clickCount() + 1);
    };

};
ko.applyBindings(new ViewModel());