let colonne_droite_vers_gauche = 0
basic.forever(function () {
    for (let Ligne = 0; Ligne <= 4; Ligne++) {
        for (let colonne_gauche_vers_droite = 0; colonne_gauche_vers_droite <= 4; colonne_gauche_vers_droite++) {
            colonne_droite_vers_gauche = 4 - colonne_gauche_vers_droite
            if (Ligne % 2 == 0) {
                led.plot(colonne_gauche_vers_droite, Ligne)
                basic.pause(300)
                led.unplot(colonne_gauche_vers_droite, Ligne)
            } else {
                led.plot(colonne_droite_vers_gauche, Ligne)
                basic.pause(300)
                led.unplot(colonne_droite_vers_gauche, Ligne)
            }
        }
    }
})
