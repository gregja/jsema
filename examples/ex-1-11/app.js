(function () {
    // le mode strict permet d'écrire un code plus robuste 
    'use strict';

    // Création d'une "vue-modèle" définissant les données à gérer au sein du formulaire
    function AppViewModel() {
        // créer une référence sur this, appelée "self"
        var self = this;

        self.legende = "Calculer tous les naturels impairs compris dans la fourchette saisie," +
            " qui ne sont divisibles ni par 3, ni par 5, ni par 7, " +
            "c'est à dire les naturels premiers de l'intervalle";

        // données en saisie
        self.val1 = ko.observable(11); // initialisée à 11 par défaut
        self.val2 = ko.observable(119);  // initialisée à 119 par défaut

        // tableau contenant le résultat des calculs (vide au départ)
        self.datas = ko.observableArray([]);

        // fonction de calcul et de remplissage du tableau "datas"
        self.calculus = function () {
            var i = parseInt(self.val1()); // conversion saisie en type "int"
            var max = parseInt(self.val2()); // conversion saisie en type "int"

            self.datas.removeAll(); // vidage complet du tableau

            while (i <= max) {

                if (i / 3 == Math.floor(i / 3) ||
                    i / 5 == Math.floor(i / 5) ||
                    i / 7 == Math.floor(i / 7)) {
                    // rien à faire 
                } else {
                    self.datas.push(i);
                }
                /*            
                if (i/3 != Math.floor(i/3) &&
                    i/5 != Math.floor(i/5) &&
                    i/7 != Math.floor(i/7)) 
                {
                    self.datas.push(i);
                } 
                */
                i += 2; // equivalent to =>  i = i + 2
            }
            
        };

    }

    // Activation du data binding piloté par knockout.js
    ko.applyBindings(new AppViewModel());
}());
