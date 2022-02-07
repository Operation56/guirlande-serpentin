def on_forever():
    for Ligne in range(5):
        for Colonne in range(5):
            if Ligne % 2 == 0:
                led.plot(Colonne, Ligne)
                basic.pause(300)
                led.unplot(Colonne, Ligne)
            else:
                colonne_droite_vers_gauche = 0
                led.plot(colonne_droite_vers_gauche, Ligne)
                basic.pause(300)
                led.unplot(Colonne, Ligne)
basic.forever(on_forever)
