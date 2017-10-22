package metier;

import java.awt.*;

public class Street extends SimulationObject {

    private Light feuDebut;
    private Light feuFin;
    int longueur;
    DirectionStreet directionStreet;
    int largeurstreet;
    int taille_feux= 20;


    public Street(int x, int y, TypeObject type, int longueur, DirectionStreet directionStreet) {
        super(x, y, type);
        feuDebut = new Light(x,y,TypeObject.Light,Color.red,10);
        feuFin = new Light(x+longueur-taille_feux,y,TypeObject.Light,Color.red,15);
        this.longueur = longueur;
        this.directionStreet = directionStreet;
        this.largeurstreet = 20;
    }

    @Override
    public void tick() {
        feuDebut.tick();
        feuFin.tick();
    }

    @Override
    public void render(Graphics g) {
        g.setColor(Color.BLACK);
        if(directionStreet == DirectionStreet.EstOuest){
            g.fillRect(x,y,longueur,largeurstreet);
            feuFin.setX(x+longueur-taille_feux/2);
        }
        else{
            g.fillRect(x,y,largeurstreet,longueur);
            feuDebut.setY(y+taille_feux);
            feuFin.setX(x);
            feuFin.setY(y+longueur-taille_feux/2);
        }
        feuDebut.render(g);
        feuFin.render(g);
    }
}
