package visual;

import BusinessPart.street;

import javax.swing.*;
import java.awt.*;
import java.util.Vector;

import static java.awt.Color.red;

public class City extends JPanel{

    Vector<street> streets = new Vector<street>();


    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.setColor(Color.white);
        g.fillRect(0, 0, this.getWidth(), this.getHeight());


        for(int i=0;i<streets.size();i++)
        {

            g.setColor(Color.black);
            g.fillRect(streets.get(i).getPosX(),streets.get(i).getPosY(),streets.get(i).getWidth(),streets.get(i).getHeight());

            for(int y=0;y<streets.get(i).getMyLight().size();y++){
                g.setColor(streets.get(i).getMyLight().get(y).getColor());
                g.fillRect(streets.get(i).getMyLight().get(y).getPosX(),streets.get(i).getMyLight().get(y).getPosY(),10,10);

            }
        }

    }




    public void setStreets(Vector<street> s) {
        streets = s;
    }

    public Vector<street> getStreets() {
        return streets;
    }


}
