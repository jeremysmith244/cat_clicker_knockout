var ViewModel = function() {

    self = this;
    self.clickCount = ko.observable(0);
    self.name = ko.observable('Tabby');
    self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    self.nickNames = ko.observableArray([
        {nick:'Tabitha'},
        {nick:'Tabberella'},
        {nick:'Tabytron Prime'},
        {nick:'Holy Tabyrnacle'},
    ]);

    self.incrementCounter = function() {
        self.clickCount(self.clickCount() + 1);
    };

    self.level = ko.computed(function() {
        if (self.clickCount() < 10) {
            return 'Baby';
        } else if (self.clickCount() < 20) {
            return 'Teeny';
        } else if (self.clickCount() < 30) {
            return 'Meeny';
        } else if (self.clickCount() < 40) {
            return 'Goldy';
        } else if (self.clickCount() < 60) {
            return 'Oldy';
        } else {
            return 'Moldy';
        };
    });
};
ko.applyBindings(new ViewModel());