package BusinessPart;

import java.util.Vector;

public class street {

    private int id;
    private int posX;
    private int posY;
    public Direction direction;
    private Vector<Light> myLights;
    private Vector<Car> myCars;
    private int height;
    private int width;




    public street(int id,int posX,int posY,Direction direct,int width,int height){
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.direction = direct;
        myLights = new Vector<Light>();
        myCars = new Vector<Car>();
        this.height = height;
        this.width =  width;
    }


    public Vector<Car> getMyCar() {
        return myCars;
    }

    public Vector<Light> getMyLight() {
        return myLights;
    }

    public void addLight(Light l){
        myLights.add(l);
    }

    public void addCar(Car c){
        myCars.add(c);
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

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }
}