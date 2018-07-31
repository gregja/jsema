(function () {
    // le mode strict permet d'écrire un code plus robuste 
    'use strict';

    // Création d'une "vue-modèle" définissant les données à gérer au sein du formulaire
    function AppViewModel() {
        // créer une référence sur this, appelée "self"
        var self = this;

        self.legende = "Calculer les naturels de la suite 3A + 1";

        // données en saisie
        self.val1 = ko.observable(71); // initialisée à 71 par défaut
        self.val2 = ko.observable(100);  // initialisée à 100 par défaut

        // tableau contenant le résultat des calculs (vide au départ)
        self.datas = ko.observableArray([]);

        // fonction de calcul et de remplissage du tableau "datas"
        self.calculus = function () {
            var min = parseInt(self.val1()); // conversion saisie en type "int"
            var max = parseInt(self.val2()); // conversion saisie en type "int"

            self.datas.removeAll(); // vidage complet du tableau

            var a, z, s, m;
            var leap1 = false;
            var leap2 = false;

            z = min;
            while (z <= max) {
                if (leap1 == false) {
                    a = z;
                    s = m = 0;
                } else {
                    leap1 = false;
                }

                if (leap2 == false) {
                    if (m < a) {
                        m = a;
                    }
                } else {
                    leap2 = false;
                }                

                if (a == 1) {
                    self.datas.push({z:z, s:s, m:m});
                    z = z + 1; 
                } else {
                    leap1 = true;
                    s = s + 1;
                    if (a/2 == Math.floor(a/2)) {
                        a = a / 2; 
                        leap2 = true;   
                    } else {
                        a = 3 * a + 1;
                    }
                                                     
                } 
                           
            }
            console.log(self.datas());
        };

    }

    // Activation du data binding piloté par knockout.js
    ko.applyBindings(new AppViewModel());
}());
