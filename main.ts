let colonne_droite_vers_gauche = 0
basic.forever(function () {
    for (let Ligne = 0; Ligne <= 4; Ligne++) {
        for (let Colonne = 0; Colonne <= 4; Colonne++) {
            colonne_droite_vers_gauche = 4 + Colonne
            if (Ligne % 2 == 0) {
                led.plot(Colonne, Ligne)
                basic.pause(300)
                led.unplot(Colonne, Ligne)
            } else {
                led.plot(colonne_droite_vers_gauche, Ligne)
                basic.pause(300)
                led.unplot(colonne_droite_vers_gauche, Ligne)
            }
        }
    }
})
