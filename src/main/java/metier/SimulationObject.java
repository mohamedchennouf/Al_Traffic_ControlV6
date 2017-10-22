package metier;

import java.awt.*;

public abstract class SimulationObject {


    protected int x,y;
    protected TypeObject type;

    public SimulationObject(int x,int y,TypeObject type){
        this.x = x;
        this.y = y;
        this.type = type;
    }


    public abstract void tick();
    public abstract void render(Graphics g);


    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public TypeObject getType() {
        return type;
    }

    public void setType(TypeObject type) {
        this.type = type;
    }
}
