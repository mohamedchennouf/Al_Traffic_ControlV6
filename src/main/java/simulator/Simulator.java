package simulator;

import java.util.List;

public class Simulator<T extends IActionable> {
	

	protected final List<T> actionables;
	
	public Simulator(List<T> actionables) {
		this.actionables = actionables;
	}


}
