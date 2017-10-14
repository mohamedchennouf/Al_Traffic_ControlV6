package visual;

import java.awt.*;

public interface IDrawable {

	public Color getColor();

	public int getSize();

	public void paint(Graphics2D g2);

}