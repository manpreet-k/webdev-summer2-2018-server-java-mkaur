package webdev.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Widget {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int position;
	private String text;
	private String className;
	private String style;
	private String width;
	private String height;
	@ManyToOne
	@JsonIgnore
	private Topic topic;

	public Widget() {
		super();
	}

	public Widget(String name, int position, String text, String className, String style, String width, String height,
			Topic topic) {
		this.name = name;
		this.position = position;
		this.text = text;
		this.className = className;
		this.style = style;
		this.width = width;
		this.height = height;
		this.topic = topic;
	}

	public void set(Widget newWidget) {
		this.name = newWidget.name != null ? newWidget.name : this.name;
		this.position = newWidget.position != 0 ? newWidget.position : this.position;
		this.text = newWidget.text != null ? newWidget.text : this.text;
		this.className = newWidget.className != null ? newWidget.className : this.className;
		this.style = newWidget.style != null ? newWidget.style : this.style;
		this.width = newWidget.width != null ? newWidget.width : this.width;
		this.height = newWidget.height != null ? newWidget.height : this.height;
		this.name = newWidget.name != null ? newWidget.name : this.name;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the position
	 */
	public int getPosition() {
		return position;
	}

	/**
	 * @param position
	 *            the position to set
	 */
	public void setPosition(int position) {
		this.position = position;
	}

	/**
	 * @return the text
	 */
	public String getText() {
		return text;
	}

	/**
	 * @param text
	 *            the text to set
	 */
	public void setText(String text) {
		this.text = text;
	}

	/**
	 * @return the className
	 */
	public String getClassName() {
		return className;
	}

	/**
	 * @param className
	 *            the className to set
	 */
	public void setClassName(String className) {
		this.className = className;
	}

	/**
	 * @return the style
	 */
	public String getStyle() {
		return style;
	}

	/**
	 * @param style
	 *            the style to set
	 */
	public void setStyle(String style) {
		this.style = style;
	}

	/**
	 * @return the width
	 */
	public String getWidth() {
		return width;
	}

	/**
	 * @param width
	 *            the width to set
	 */
	public void setWidth(String width) {
		this.width = width;
	}

	/**
	 * @return the topic
	 */
	public Topic getTopic() {
		return topic;
	}

	/**
	 * @param topic
	 *            the topic to set
	 */
	public void setTopic(Topic topic) {
		this.topic = topic;
	}

}