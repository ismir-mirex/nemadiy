package org.imirsel.nema.analytics.evaluation.chord;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.imirsel.nema.analytics.util.io.DeliminatedTextFileUtilities;

/**
 * Utility to convert chord representations.
 * 
 * @author mert.bay@gmail.com
 * @author kris.west@gmail.com
 * @since 0.1.0
 */
public class ChordConversionUtil {
	
	private static ChordConversionUtil instance = null;
	
	private Map<String,int[]> shorthandToNoteNumbers;
	private Map<String,String> noteNumbersToShorthand;
	
	private Map<String,int[]> intervalsToNoteNumbers;
	private Map<String,String> NoteNumbersToIntervals;
	
	private Map<String,int[]> chordNumberToNoteNumbers;
	private Map<String,String> NoteNumbersToChordNumbers;
	
	public final String INTERVAL_DICTIONARY_CLASSPATH = "/home/mertbay/Documents/workspace-sts-2.3.2.RELEASE/nema-analytics/src/main/resources/org/imirsel/nema/analytics/evaluation/chord/IntervalDictionary.txt";
	public final String SHORTHAND_DICTIONARY_CLASSPATH = "src/main/resources/org/imirsel/nema/analytics/evaluation/chord/ShorthandDictionary.txt";
	public final String CHORDNUMBERS_DICTIONARY_CLASSPATH = "src/main/resources/org/imirsel/nema/analytics/evaluation/chord/NoteNumbersDictionary.txt";

	public static ChordConversionUtil getInstance(){
		if (instance == null){
			instance = new ChordConversionUtil();
		}
		return instance;
	}
	
	public ChordConversionUtil(){
		//read dictionaries

		try {
			intervalsToNoteNumbers = readChordDictionary(INTERVAL_DICTIONARY_CLASSPATH);
			NoteNumbersToIntervals = reverseMap(intervalsToNoteNumbers);
		} catch (Exception e) {
			File newFile = new File(INTERVAL_DICTIONARY_CLASSPATH);
			if (newFile.isFile()){
				System.out.println("File Exists " + INTERVAL_DICTIONARY_CLASSPATH);
			}
			else{
				System.out.println("File DOES NOT Exists " + INTERVAL_DICTIONARY_CLASSPATH);
			}
			throw new IllegalArgumentException(
					"Failed to read chord dictionary from classpath: "
							+ INTERVAL_DICTIONARY_CLASSPATH, e);
		}
		try {
			shorthandToNoteNumbers = readChordDictionary(SHORTHAND_DICTIONARY_CLASSPATH);
			noteNumbersToShorthand = reverseMap(shorthandToNoteNumbers);
		} catch (Exception e) {
			throw new IllegalArgumentException(
					"Failed to read chord dictionary from classpath: "
							+ SHORTHAND_DICTIONARY_CLASSPATH, e);
		}
		
		try {
			chordNumberToNoteNumbers = readChordDictionary(CHORDNUMBERS_DICTIONARY_CLASSPATH);
			NoteNumbersToChordNumbers = reverseMap(chordNumberToNoteNumbers);
		} catch (Exception e) {
			throw new IllegalArgumentException(
					"Failed to read chord dictionary from classpath: "
							+ CHORDNUMBERS_DICTIONARY_CLASSPATH, e);
		}
		
	}

	
	public int[] convertIntervalsToNotenumbers(String intervalString) throws IllegalArgumentException{
		int[] out = intervalsToNoteNumbers.get(intervalString);
		if (out == null){
			throw new IllegalArgumentException("Could not interpret '" + intervalString + "' as notes!");
		}		
		return out; 
	}
	
	public String convertNotenumbersToIntervals(int[] notes) throws IllegalArgumentException{
		String key = createKey(notes);
		String out = NoteNumbersToIntervals.get(key);
		if (out == null){
			String msg = "Could not interpret notes: " + notes[0];
			for (int i = 1; i < notes.length; i++) {
				msg+= "," + notes[i];
			}
			msg += " as an interval!";
			throw new IllegalArgumentException(msg);
		}	
		return out;
	}

	
	public int[] convertShorthandToNotenumbers(String shorthandChordLabel){
		int[] out = shorthandToNoteNumbers.get(shorthandChordLabel);
		if (out == null){
			throw new IllegalArgumentException("Could not interpret '" + shorthandChordLabel + "' as notes!");
		}		
		return out; 
	}
	
	public String convertNoteNumbersToShorthand(int[] notes){
		String key = createKey(notes);
		String out = noteNumbersToShorthand.get(key);
		if (out == null){
			String msg = "Could not interpret notes: " + notes[0];
			for (int i = 1; i < notes.length; i++) {
				msg+= "," + notes[i];
			}
			msg += " as an interval!";
			throw new IllegalArgumentException(msg);
		}	
		return out;		
	}
	
	
	
	
	public int[] convertChordNumbersToNoteNumbers(String no){
		int[] out = chordNumberToNoteNumbers.get(no) ;
		if (out == null){
			throw new IllegalArgumentException("Could not interpret '" + no + "' as notes!");
		}		
		return out; 		
	}
	public String convertNotenumbersToChordnumbers(int[] notes){
		
		String key = createKey(notes);
		String out = NoteNumbersToChordNumbers.get(key);
		if (out == null){
			String msg = "Could not interpret notes: " + notes[0];
			for (int i = 1; i < notes.length; i++) {
				msg+= "," + notes[i];
			}
			msg += " as an interval!";
			throw new IllegalArgumentException(msg);
		}	
		return out;		
		
		
	}
//	
	public static Map<String,int[]> readChordDictionary(String classpath) throws IOException{
		String[][] chordMappings = DeliminatedTextFileUtilities.loadDelimTextData(classpath, ",", -1);
		try{
			return produceChordMap(chordMappings);
		}catch(Exception e){
			throw new IllegalArgumentException(
					"Failed to read chord dictionary from classpath: " + classpath + "\nPlease check the file format.",e);
		}
	}
	
	public static Map<String,int[]> readChordDictionary(File file) throws IOException{
		String[][] chordMappings = DeliminatedTextFileUtilities.loadDelimTextData(file, ",", -1);
		try{
			return produceChordMap(chordMappings);
		}catch(Exception e){
			boolean exists = file.exists();
			String msg = "Failed to read chord dictionary from file: " + file.getAbsolutePath();
			if (exists){
				msg += "\nFile does exist, hence please check format";
			}else{
				msg += "\nFile does not exist!";
			}
			throw new IllegalArgumentException(msg,e);
		}
	}

	private static Map<String, int[]> produceChordMap(String[][] chordMappings) {

		int nrows = chordMappings.length;
		Map<String,int[]> map = new HashMap<String, int[]>(nrows);
		for(int r = 0; r < nrows; r++) {
			String key = chordMappings[r][0];
			String val = chordMappings[r][1];
			String[] comps = val.split("\\s+");
			int[] valArray = new int[comps.length];
			for (int i = 0; i < valArray.length; i++) {
				valArray[i] = Integer.valueOf(comps[i]);
			}
			map.put(key, valArray);
		}
		return map;
		
	}	
	
	private static String createKey(int[] arr){
		try{
			String key = "" + arr[0];
			for (int i = 1; i < arr.length; i++) {
				key += "|" + arr[i];
			}
			return key;
		}catch(Exception e){
			throw new IllegalArgumentException("Received null or zero length array of notes to create key from!");
		}
	}
	
	private static Map<String,String> reverseMap(Map<String,int[]> map){
		Map<String,String> revMap = new HashMap<String, String>();
		for (Iterator<String> iterator = map.keySet().iterator(); iterator.hasNext();) {
			String key = iterator.next();
			int[] val = map.get(key);
			String newKey = createKey(val);
			revMap.put(newKey, key);
		}
		return revMap;
	}
}
