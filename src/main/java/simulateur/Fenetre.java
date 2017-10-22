package simulateur;

import javax.swing.*;
import java.awt.*;

public class Fenetre extends Canvas{

    public Fenetre(int width, int height, String title, Simulation simulation){
        JFrame frame = new JFrame(title);
        frame.setPreferredSize(new Dimension(width,height));
        frame.setMaximumSize(new Dimension(width,height));
        frame.setMinimumSize(new Dimension(width,height));

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(true);
        frame.setLocationRelativeTo(null);
        frame.add(simulation);
        frame.setVisible(true);
        simulation.start();

    }
}
