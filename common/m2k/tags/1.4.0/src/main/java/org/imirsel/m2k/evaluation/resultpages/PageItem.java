/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package org.imirsel.m2k.evaluation.resultpages;

/**
 * Abstract super class for items to display on a page.
 * 
 * @author kriswest
 */
public abstract class PageItem {
    protected String name;
    protected String caption;

    public PageItem(String name, String caption){
        this.name = name;
        this.caption = caption;

        if(this.name.contains("\\s")){
            throw new IllegalArgumentException("The item name should be suitable for use as an identifier in html and should not contain reserved characters or spaces");
        }
    }

    /**
     * @return the name
     */
    public String getName(){
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name){
        this.name = name;
    }

    /**
     * @return the caption
     */
    public String getCaption(){
        return caption;
    }

    /**
     * @param caption the caption to set
     */
    public void setCaption(String caption){
        this.caption = caption;
    }

    /**
     * Returns data to add to the head tag of the page.
     * @return HTML head tag data.
     */
    public abstract String getHeadData();

    /**
     * Returns data to add to the body tag of the page.
     * @param topLink A flag that determines whether a link is added to scroll
     * to the top of the page from the item.
     * @return Returns the HTML for the item.
     */
    public abstract String getBodyData(boolean topLink);

}
