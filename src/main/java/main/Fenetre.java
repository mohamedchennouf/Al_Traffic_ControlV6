package main;

import BusinessPart.*;


import java.awt.*;
import java.util.Vector;
import javax.swing.*;

public class Fenetre extends JFrame {
    private static final int RECT_WIDTH = 1300;
    private static final int RECT_HEIGHT = 1300;
    private City city = new City();


    public Fenetre(){

        this.setTitle("Traffic Control V6");
        this.setSize(RECT_WIDTH,RECT_HEIGHT);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setContentPane(city);
        this.setVisible(true);
        go();

    }

    private void go(){
        GenerateBasicStreets(5,6);

        System.out.println(city.getStreets().size());


        while (true){



            for(int i=0;i<city.getStreets().size();i++)
            {
                Vector<Light> mesLight  = city.getStreets().get(i).getMyLight();
                for(int z =0 ; z<mesLight.size();z++){
                    mesLight.get(z).run();
                }
            }


            city.revalidate();
            city.repaint();

        }


    }

    public void GenerateBasicStreets(int numberofStreetX,int numberofStreetY){
        Vector<street> streets = new Vector<street>();
        int x=0;
        int y=0;
        int separation_x=150;
        int seperation_y=150;
        int height = 150;
        int width = 10;
        int height2 = 140;
        int decalage = 10;
        for(int i=0;i<numberofStreetY;i++)
        {

            for(int z=0;z<numberofStreetX;z++) {
                x = x + separation_x;

                street newstreetvertical = new street(z+i*z, x, y, Direction.VERTICALE, width, height);
                Light light = new Light(z+i*z,Color.red,4000,x,y);
                newstreetvertical.addLight(light);
                street newstreethorizontal = new street(z+i*z, y+decalage, x, Direction.HORIZONTAL, height2, width);

                streets.add(newstreetvertical);
                streets.add(newstreethorizontal);
            }
            x=0;
            y  = y + seperation_y;
        }
        city.setStreets(streets);
    }













        public static void main(String args[]) {
            Fenetre f = new Fenetre();

        }



}



