package org.imirsel.nema.contentrepository.client;


/**Exception class encapsulates the Login and Repository Access exceptions
 * 
 * @author kumaramit01
 * @since 0.0.1
 */
public class ContentRepositoryServiceException extends Exception {

	/**Version of this class
	 * 
	 */
	private static final long serialVersionUID = 6368349324314224732L;
	
	
	public ContentRepositoryServiceException(Exception e){
		super(e);
	}
	
	
	public ContentRepositoryServiceException(String message){
		super(message);
	}
	
	
}
