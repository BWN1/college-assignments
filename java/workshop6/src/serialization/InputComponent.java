package serialization;

import javax.swing.JLabel;
import javax.swing.JTextField;

/** Reusable custom component for inputs */
public class InputComponent extends GridPanel {
	
	/** Components that make up this custom component */
	private JLabel label = new JLabel();
	private JTextField textField = new JTextField();
	
	/**
	 * Two argument constructor
	 * @param labelText A string for the Label text
	 * @param int An int for the number of columns for the TextField
	 * */
	public InputComponent(String labelText, int textFieldColumns) {
		super();
    	label.setText(labelText);
    	textField.setColumns(textFieldColumns);
    	add(label);
    	add(textField);
	}
	
	/**
	 * Get the label
	 * @return JLabel Returns the label of the component 
	 * */
	public JLabel getLabel() {
		return label;
	}
	
	/**
	 * Get the text field
	 * @return JTextField Returns the text field of the component
	 * */
	public JTextField getTextField() {
		return textField;
	}
	
	/**
	 * Get the text in the text field
	 * @return String Returns the text inside the text field
	 * */
	public String getTextFieldText() {
		return textField.getText();
	}
	
	/**
	 * Set the label text
	 * @param text A string for the Label text
	 * */
	public void setLabel(String text) {
		label.setText(text);
	}
	
	/**
	 * Set the number of columns for the TextField
	 * @param int An int for the number of columns in the text field
	 * */
	public void setTextField(int columns) {
		textField.setColumns(columns);
	}
	
	/**
	 * Clears the text field input
	 * */
	public void clearTextField() {
		textField.setText("");
	}
}
