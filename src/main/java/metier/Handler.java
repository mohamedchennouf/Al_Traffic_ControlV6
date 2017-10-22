package metier;

import java.awt.*;
import java.util.LinkedList;

public class Handler {

    LinkedList<SimulationObject> object  = new LinkedList<SimulationObject>();

    public void tick(){
        for(int i=0; i < object.size();i++){
            SimulationObject myObject = object.get(i);
            myObject.tick();
        }
    }

    public void render(Graphics g){
        for(int i=0; i < object.size();i++){
            SimulationObject myObject = object.get(i);
            myObject.render(g);
        }
    }

    public void addObject(SimulationObject object){
        this.object.add(object);
    }

    public void removeObject(SimulationObject object){
        this.object.remove(object);
    }
}
