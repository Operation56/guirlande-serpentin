basic.forever(function () {
    for (let Ligne = 0; Ligne <= 4; Ligne++) {
        for (let Colonne = 0; Colonne <= 4; Colonne++) {
            led.plot(Colonne, Ligne)
            basic.pause(300)
            led.unplot(Colonne, Ligne)
        }
    }
})
