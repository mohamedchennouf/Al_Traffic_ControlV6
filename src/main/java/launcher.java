

import javax.swing.JFrame;

public class launcher extends javax.swing.JFrame {

        public static void main(String args[]) {
            System.out.println("Notre projet traffic control");

            JFrame fenetre = new JFrame();

            //Définit un titre pour notre fenêtre
            fenetre.setTitle("Traffic Control V6");
            //Définit sa taille : 400 pixels de large et 100 pixels de haut
            fenetre.setSize(1400, 800);
            //Nous demandons maintenant à notre objet de se positionner au centre
            fenetre.setLocationRelativeTo(null);
            //Termine le processus lorsqu'on clique sur la croix rouge
            fenetre.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            //Et enfin, la rendre visible
            fenetre.setVisible(true);


        }



}



