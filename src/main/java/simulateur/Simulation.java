package simulateur;

import metier.City;
import metier.Handler;
import metier.TypeObject;

import java.awt.*;
import java.awt.image.BufferStrategy;

public class Simulation extends Canvas implements Runnable{


    public static final int WIDTH = 1200, HEIGHT = 900;
    private Thread thread;
    private  boolean running = false;

    private Handler handler;

    public Simulation(){
        new Fenetre(WIDTH,HEIGHT,"Traffic Simulation",this);
        handler = new Handler();
    }

    public synchronized void start(){
        thread = new Thread(this);
        thread.start();
        running = true;

    }


    public synchronized void stop(){
        try {
            thread.join();
            running = false;
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void run() {
        long lasTime = System.nanoTime();
        double amountOfTicks = 60.0;
        double ns = 1000000000 / amountOfTicks;
        double delta = 0;
        long timer = System.currentTimeMillis();
        int frames = 0;
        while (running){
            long now = System.nanoTime();
            delta += (now - lasTime) /ns;
            lasTime = now;
            while (delta >= 1 ){
                tick();
                delta--;
            }
            if(running){
                render();
            }
            frames++;
            if(System.currentTimeMillis() - timer > 1000){
                timer += 1000;
                System.out.println("FPS: "+ frames);
                frames = 0;
            }
        }
        stop();
    }

    private void tick(){
        handler.tick();
    }

    private void render(){
        BufferStrategy bs = this.getBufferStrategy();
        if(bs ==null){
            this.createBufferStrategy(3);
            return;
        }

        Graphics g = bs.getDrawGraphics();
        g.setColor(Color.white);
        g.fillRect(0,0,WIDTH,HEIGHT);

        handler.render(g);
        handler.addObject(new City(0,0, TypeObject.Car,5,6));
        //handler.addObject(new Street(100,100,TypeObject.Street,100,DirectionStreet.EstOuest));
        //handler.addObject(new Street(100,200,TypeObject.Street,150,DirectionStreet.NordSud));
        //handler.addObject(new Light(200,200,TypeObject.Street,Color.red,20));

        g.dispose();
        bs.show();

    }


    public static void main(String args[]){
        new Simulation();
    }
}
