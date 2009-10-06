package edu.illinois.gslis.imirsel.probes;

import java.util.HashMap;
import java.util.logging.Logger;

import org.meandre.client.MeandreClient;
import org.meandre.client.TransmissionException;

public class ProbeIntegrationTest {
	
	
	public static void main(String args[]){
		Logger logger = Logger.getAnonymousLogger();
	//	http://test.org/helloworld/
		String sFlowUrl ="http://test.org/helloworld/";
		MeandreClient meandreClient  = new MeandreClient("127.0.0.1", 1714);
		meandreClient.setLogger(logger);
		meandreClient.setCredentials("admin", "admin");
		try {
			HashMap<String,String> hmap = new HashMap<String,String>();
			hmap.put("nema","true");
			meandreClient.runFlow(sFlowUrl, hmap);
			//meandreClient.runFlow(sFlowUrl, true);
		} catch (TransmissionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}

}
