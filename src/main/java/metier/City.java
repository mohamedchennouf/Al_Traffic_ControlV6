package metier;

import java.awt.*;
import java.util.Vector;

public class City extends SimulationObject {
    int separation=150;

    Vector<Street> AllStreet;

    public City(int x, int y, TypeObject type, int numberofStreetX, int numberofStreetY) {
        super(x, y, type);
        AllStreet = new Vector<Street>();
        int decalage = 20;

        for(int i=0;i<numberofStreetY;i++)
        {

            for(int z=0;z<numberofStreetX;z++) {
                x = x + separation;
                AllStreet.add(new Street(x,y,TypeObject.Street,150, DirectionStreet.NordSud));
                AllStreet.add(new Street(x + decalage,y,TypeObject.Street,130,DirectionStreet.EstOuest));
            }
            x=0;
            y  = y + separation;
        }
    }

    @Override
    public void tick() {
        for(int i=0;i<AllStreet.size();i++)
        {
            AllStreet.get(i).tick();

        }

    }

    @Override
    public void render(Graphics g) {
        for(int i=0;i<AllStreet.size();i++)
        {
            AllStreet.get(i).render(g);
        }

    }
}
