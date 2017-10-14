package BusinessPart;

import java.awt.*;

public class Car extends  Thread{
    private int id;
    private boolean roule = true;
    private Color color;
    private int vitesse;
    private int posX,posY;


    public Car(int id,Color color,int vitesse , int posX,int posY){
        this.id = id;
        this.color = color;
        this.vitesse = vitesse;
        this.posX = posX;
        this.posY = posY;
    }


    public void move(){
        posX = posX + vitesse;
    }


    public boolean isRoule(){
        return roule;
    }

    public void setRoule(boolean roule){
        this.roule = roule;
    }


    public int getPosY() {
        return posY;
    }

    public void setPosY(int posY) {
        this.posY = posY;
    }

    public int getPosX() {

        return posX;
    }

    public void setPosX(int posX) {
        this.posX = posX;
    }

    public Color getColor() {

        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public void run(){
        while(true){
            try{
                sleep(100);
            }catch (InterruptedException e){
                e.printStackTrace();
            }
            if(isRoule())
                move();

            System.out.println(posX);
        }

    }


}
