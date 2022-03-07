package serialization;

import java.awt.GridLayout;

import javax.swing.BorderFactory;
import javax.swing.JPanel;

/** Creates a panel with the GridLayout and a border */
public class GridPanel extends JPanel {
	
	/**
	 * Default constructor
	 * Sets the layout to GridLayout and sets the border
	 * */
	public GridPanel() {
		super();
		setLayout(new GridLayout(0,1));
    	setBorder(BorderFactory.createEmptyBorder(5, 10, 5, 10)); 
	}
}