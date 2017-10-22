package metier;

import java.awt.*;

public class Light extends SimulationObject {

    private Color color;
    private int duree;
    int timer;

    public Light(int x, int y, TypeObject type, Color color, int duree) {
        super(x, y, type);
        this.color = color;
        this.duree = duree;
        timer = 0;
    }



    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }


    @Override
    public void tick() {
        timer ++;
        if(timer % duree == 0) {
            if (color == Color.red) {
                color = Color.green;
            } else {
                color = Color.red;
            }
        }

    }

    @Override
    public void render(Graphics g) {
        g.setColor(color);
        g.fillRect(x,y,10,10);
    }
}
