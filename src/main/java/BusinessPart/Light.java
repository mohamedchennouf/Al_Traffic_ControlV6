package BusinessPart;

import java.awt.*;

import static java.lang.Thread.sleep;

public class Light {
    private int id;
    private Color color;
    private int duree;
    private int posX,posY;

    public Light(int id,Color color,int duree,int posX,int posY){
        this.id = id;
        this.color = color;
        this.duree = duree;
        this.posX = posX;
        this.posY = posY;
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
            try{
                sleep(duree);
            }catch(InterruptedException e){
                e.printStackTrace();
            }
            if(color == Color.red)
                color = Color.green;
            else
                color = Color.red;

            System.out.println(color);
    }

}
