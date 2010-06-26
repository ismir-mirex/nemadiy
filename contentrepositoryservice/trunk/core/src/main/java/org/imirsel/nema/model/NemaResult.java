package org.imirsel.nema.model;

import java.io.Serializable;


/**
 * @author kumaramit01
 *
 */
public class NemaResult  implements NemaResultMetadata,  Serializable{
	
	/** Version of this classs
	 * 
	 */
	private static final long serialVersionUID = -7037081933712410409L;
	private byte fileContent[];
	private String fileName;
	private String modelClass;
	private String resultPath;
	private String name;
	private String executionId;
	private ResultType resultType;
	private ResourcePath resourcePath;
	private String fileSeparator = System.getProperty("file.separator");

	static public enum ResultType {
	      FILE(-1), DIR(0);
	
	    private final int code;
	
	    private ResultType(int code) { this.code = code; }
	
	    public int getCode() { return code; }
	
	    @Override
		public String toString() {
	         String name = "file";
	         switch (code) {
	
	            case -1: {
	               name = "file";
	               break;
	            }
	            case 0: {
	               name = "dir";
	               break;
	            }
	
	         }
	         return name;
	      }
	
	 
	    
	      static public ResultType toResultType(int code) {
	    	  ResultType status = ResultType.FILE;
	         switch (code) {
	            case -1: {
	               status = ResultType.FILE;
	               break;
	            }
	            case 0: {
	               status = ResultType.DIR;
	               break;
	             }
	      }
	         return status;
	     }
	
	}

	
	
	public byte[] getFileContent() {
		return fileContent;
	}
	public void setFileContent(byte[] fileContent) {
		this.fileContent = fileContent;
	}
	


	public String getName() {
		return name;
	}



	public ResourcePath getResourcePath() {
		return resourcePath;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setResourcePath(ResourcePath resourcePath) {
		this.resourcePath = resourcePath;
	}
	public void setResultType(ResultType resultType) {
		this.resultType = resultType;
	}
	public ResultType getResultType() {
		return resultType;
	}
	public void setExecutionId(String executionId) {
		this.executionId = executionId;
	}
	public String getExecutionId() {
		return executionId;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileName() {
		return fileName;
	}
	public String getModelClass() {
		return modelClass;
	}
	public void setModelClass(String modelClass) {
		this.modelClass = modelClass;
	}
	public String getResultPath() {
		return resultPath;
	}
	public void setResultPath(String resultPath) {
		this.resultPath = resultPath;
	}
	public void setFileSeparator(String fileSeparator) {
		this.fileSeparator = fileSeparator;
	}
	public String getFileSeparator() {
		return fileSeparator;
	}
	public boolean equals(Object object){
		if(!(object instanceof NemaResult)){
			return false;
		}
		NemaResult result = (NemaResult)object;
		
		if(result.executionId.equals(executionId)  && result.fileContent.equals(fileContent)
				&& result.name.equals(name) && result.resourcePath.equals(resourcePath)
				&& result.resultType== this.resultType) {
			return true;
		}
		return false;
	}
	
	public int hashCode(){
		int hash = 31;
		hash = hash + executionId.hashCode()+ fileContent.hashCode() + name.hashCode() + resourcePath.hashCode() + resultType.code;
		return hash;
	}
	
	public String toString(){
		return this.name + ": " + this.executionId + ": " + this.resourcePath + ": " + this.resultType.toString();
	}
	

}
