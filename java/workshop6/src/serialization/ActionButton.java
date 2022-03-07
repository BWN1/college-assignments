package serialization;

import java.awt.Color;

import javax.swing.JButton;
import javax.swing.JLabel;

/** Reusable custom component for buttons with actions */
public class ActionButton extends GridPanel {
	
	/** Components that make up this custom component */
	private JButton button = new JButton();
	private JLabel actionLabel = new JLabel();
	
	/**
	 * One argument constructor
	 * @param buttonText A string for the text of the button
	 * */
	public ActionButton(String buttonText) {
		super();
		button.setText(buttonText);
		add(button);
	}
	
	/**
	 * Get the label of the component
	 * @return JLabel Returns the label of the component 
	 * */
	public JLabel getActionLabel() {
		return actionLabel;
	}
	
	/**
	 * Get the button of the component
	 * @return JButton Returns the button of the component
	 * */
	public JButton getButton() {
		return button;
	}
	
	/**
	 * Set the button text
	 * @param text A string for the Button text
	 * */
	public void setButton(String text) {
		button.setText(text);
	}
	
	/**
	 * Add a message to the component if the action is successful
	 * @param message A string for the success message to be displayed
	 * */
	public void addSuccessMessage(String message) {
		actionLabel.setText(message);
		actionLabel.setForeground(Color.GREEN.darker());
		add(actionLabel);
	}
	
	/**
	 * Add a message to the component if the action is unsuccessful
	 * @param message A string for the error message to be displayed
	 * */
	public void addErrorMessage(String message) {
		actionLabel.setText(message);
		actionLabel.setForeground(Color.RED);
		add(actionLabel);
	}
	
	/**
	 * Removes the action message from the component
	 * */
	public void removeActionMessage() {
		remove(actionLabel);
	}
}