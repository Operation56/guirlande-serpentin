let colonne_droite_vers_gauche = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    for (let Ligne = 0; Ligne <= 4; Ligne++) {
        for (let colonne_gauche_vers_droite = 0; colonne_gauche_vers_droite <= 4; colonne_gauche_vers_droite++) {
            colonne_droite_vers_gauche = 4 - colonne_gauche_vers_droite
            if (Ligne % 2 == 0) {
                led.plot(colonne_gauche_vers_droite, Ligne)
                basic.pause(300)
                led.unplot(colonne_gauche_vers_droite, Ligne)
            } else {
                led.plot(0, colonne_droite_vers_gauche)
                basic.pause(300)
                led.unplot(colonne_droite_vers_gauche, Ligne)
            }
        }
    }
})
