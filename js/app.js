var Cat = function (data) {

    that = this;
    that.clickCount = ko.observable(0);
    that.name = ko.observable(data.name);
    that.imgSrc = ko.observable(data.src);

    that.nickNames = ko.observableArray(data.nickNames);

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
    thiz.currentCat = ko.observable( new Cat({
        name: 'Tabby',
        src: 'img/22252709_010df3379e_z.jpg',
        nickNames: [
            {nick:'Tabitha'},
            {nick:'Tabberella'},
            {nick:'Tabytron Prime'},
            {nick:'Holy Tabyrnacle'},
        ]
    }) );

    thiz.incrementCounter = function() {
        thiz.currentCat().clickCount(thiz.currentCat().clickCount() + 1);
    };

};
ko.applyBindings(new ViewModel());