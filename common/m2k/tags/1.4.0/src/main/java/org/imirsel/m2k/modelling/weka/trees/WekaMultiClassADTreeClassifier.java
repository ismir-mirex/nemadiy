/*
 * TrainWekaClassifier.java
 *
 * Created on 23 October 2006, 21:14
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package org.imirsel.m2k.modelling.weka.trees;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.imirsel.m2k.io.weka.Signal2Instance;
import org.imirsel.m2k.modelling.SignalClassifier;
import org.imirsel.m2k.util.Signal;
import org.imirsel.m2k.util.noMetadataException;
import weka.core.Attribute;
import weka.core.FastVector;
import weka.core.Instance;
import weka.core.Instances;
import weka.classifiers.meta.MultiClassClassifier;


/**
 * This has been motified to MultiClassClassifier to handle multiclass cases
 * @author kw
 */
public class WekaMultiClassADTreeClassifier implements SignalClassifier{
    
    weka.classifiers.meta.MultiClassClassifier theTree = null;
    String[] classnames = null;
    private String MultiClassADTreeOptions = "-M 0 -W weka.classifiers.trees.ADTree -S 1 -D";
    Attribute classAttribute = null;
    
    private boolean verbose = true;
    
//-M num 
//Sets the method to use. Valid values are 0 (1-against-all), 1 (random codes), 2 (exhaustive code), and 3 (1-against-1). (default 0) 
//
//-R num 
//Sets the multiplier when using random codes. (default 2.0)
//
//-W classname 
//Specify the full class name of a classifier as the basis for the multi-class classifier (required).
//
//-S seed 
//Random number seed (default 1).


    /** Creates a new instance of TrainWekaClassifier */
    public WekaMultiClassADTreeClassifier() {
    }
    
    /** Creates a new instance of TrainWekaClassifier */
    public WekaMultiClassADTreeClassifier(String options) {
        MultiClassADTreeOptions = options + " -W weka.classifiers.trees.ADTree";
    }
    
    /**
     * Returns a String representing the name of the classifier.
     * @return a String representing the name of the classifier
     */
    public String getClassifierName() {
        return "MultiClass ADTree Classifier";
    }
    
    
    /**
     * Returns a flag indicating whether the classifier has been trained or not.
     * @return a flag indicating whether the classifier has been trained or not.
     */
    public boolean isTrained(){
        if (theTree == null){
            return false;
        }else{
            return true;
        }
    }
    
    /**
     * Returns the number of classes that the classifier is trained on. Should
     * return -1 if untrained.
     * @return the number of classes that the classifier is trained on.
     */
    public int getNumClasses(){
        if (!isTrained()){
            return -1;
        }else{
            return this.classnames.length;
        }
    }
    
    /**
     * Returns a List of the class names found in the data that the classifier
     * was trained on. This List should be ordered such that the integers returned
     * from the classification methods index the correct class names. Should return
     * null if untrained.
     * @return a List containing the class names.
     */
    public List getClassNames(){
        return Arrays.asList(this.classnames);
    }
    
    /**
     * Sets the List of the class names in the data that the classifier
     * will be trained on. This List should be ordered such that the integers returned
     * from the classification methods index the correct class names. `
     * @param classNames a List containing the class names.
     */
    public void setClassNames(List classNames){
        //ignore
    }
    
    /**
     * Trains the classifier on the array of Signal objects. Implementations of
     * this method should also produce an ordered list of the class names which
     * can be returned with the <code>getClassNames</code> method.
     * @param inputData the Signal array that the model should be trained on.
     * @throws noMetadataException Thrown if there is no class metadata to train the Gaussian model with
     */
    public void train(Signal[] inputData) throws noMetadataException{
        
        List classNamesList = new ArrayList();
        for (int i = 0; i < inputData.length; i++) {
            String className = inputData[i].getStringMetadata(Signal.PROP_CLASS);
            if ((className != null) && (!classNamesList.contains(className))){
                classNamesList.add(className);
            }
        }
        Collections.sort(classNamesList);
        classnames = (String[])classNamesList.toArray(new String[classNamesList.size()]);
        
        FastVector classValues = new FastVector(classnames.length);
        for (int i = 0; i < classnames.length; i++) {
            classValues.addElement(classnames[i]);
        }
        classAttribute = new Attribute(Signal.PROP_CLASS, classValues);
        Instances trainingDataSet = new Instances(Signal2Instance.convert(inputData[0],classAttribute));
        
        if (inputData.length>1){
            for(int i=1; i<inputData.length; i++){
                Instances aSignalInstance = Signal2Instance.convert(inputData[i],classAttribute);
                for(int j=0; j<aSignalInstance.numInstances(); j++)
                    trainingDataSet.add(aSignalInstance.instance(j));
            }
        }
        
        trainingDataSet.setClass(classAttribute);
        
        
        inputData = null;
        theTree = new MultiClassClassifier();
        
        //parse options
        String[] options = this.MultiClassADTreeOptions.split(" ");
        
        try {
            theTree.setOptions(options);
        } catch (Exception ex) {
            throw new RuntimeException("Failed to set MultiClassADTree classifier options!",ex);
        }
        try {
            theTree.buildClassifier(trainingDataSet);
            System.out.println("WEKA: outputting a MultiClassADTree classifier.");
        } catch (Exception ex) {
            throw new RuntimeException("Failed to train classifier!",ex);
        }
    }
    
    /**
     * Classify a single vector. A RuntimeException should be thrown if the classifier is untrained.
     * @param input Vector to classify
     * @return Integer indicating the class.
     */
    public int classifyVector(double[] input) {
        Instance in = new Instance(1.0,input);
        try {
            return (int)theTree.classifyInstance(in);
        } catch (Exception ex) {
            System.out.println("Exception occured when classifying a vector!\n" + ex.getMessage());
            ex.printStackTrace();
            return -1;
        }
    }
    
    /**
     * Classify a single vector and return a class name.
     * @param input Vector to classify
     * @return A String indicating class.
     */
    public String classify(double[] input){
        return this.classnames[classifyVector(input)];
    }
    
    /**
     * Calculates the probability of class membership of a Signal Object.
     * @param inputSignal The Signal object to calculate the probabilities of
     * class membership for. This probabilities should be ordered such that the indexes
     * match the class names returned by <code>getClassNames</code>.
     * @return An array of the probabilities of class membership
     */
    public double[] probabilities(Signal inputSignal){
        
        Instances theData = Signal2Instance.convert(inputSignal,this.classAttribute);
        
        double[] probsAccum = new double[this.getNumClasses()];
        for (int i=0;i<theData.numInstances();i++) {
            double[] temp;
            try {
                temp = theTree.distributionForInstance(theData.instance(i));
//                if(this.verbose){
//                    System.out.print("distribution:" );
//                    for (int j=0;j<this.getNumClasses();j++) {
//                        System.out.print(" " + temp[j]);
//                    }
//                    System.out.println("");
//                }
             
                //Smooth probs using Lidstone's law
                for (int j = 0; j<this.classnames.length; j++) {
                    temp[j] = ((temp[j] * 1024) + 0.5) / (1024 + (0.5 * (double)this.classnames.length));
                }
                
//                if(this.verbose){
//                    System.out.print("smoothed dist:" );
//                    for (int j=0;j<this.getNumClasses();j++) {
//                        System.out.print(" " + temp[j]);
//                    }
//                    System.out.println("");
//                }
                
            } catch (Exception ex) {
                System.out.println("Exception occured when calculating distribution for a vector!\n" + ex.getMessage());
                ex.printStackTrace();
                return null;
            }
            for (int j=0;j<this.getNumClasses();j++) {
                probsAccum[j] += Math.log(temp[j]);
            }
        }
        
//        if(this.verbose){
//            System.out.print("Log Probs:" );
//            for (int j=0;j<this.getNumClasses();j++) {
//                System.out.print(" " + probsAccum[j]);
//            }
//            System.out.println("");
//        }
        
        //normalise to range 0:1
        double min = Double.POSITIVE_INFINITY;
        double max = Double.NEGATIVE_INFINITY;
        for (int j=0;j<this.getNumClasses();j++) {
            if(probsAccum[j] > max) {
                max = probsAccum[j];
            }
            if(probsAccum[j] < min) {
                min = probsAccum[j];
            }
        }
        for (int j=0;j<this.getNumClasses();j++) {
            probsAccum[j] -= min;
            probsAccum[j] /= (max - min);
        }
        //normalise to sum to 1
        double total = 0.0;
        for (int j=0;j<this.getNumClasses();j++) {
            total += probsAccum[j];
        }
        if(verbose){
            DecimalFormat dec = new DecimalFormat();
            dec.setMaximumFractionDigits(3);
            if(this.verbose){
                System.out.print("Probabilities:" );
            }
            
            for (int j=0;j<this.getNumClasses();j++) {
                probsAccum[j] /= total;
                if(verbose){
                    System.out.print(" " + dec.format(probsAccum[j]));
                }
            }
            if(verbose){
                try{
                    System.out.println("\t" + inputSignal.getStringMetadata(Signal.PROP_FILE_LOCATION));
                }catch(noMetadataException nme) {
                    
                }
            }
        }
        
        return probsAccum;
    }
    
    /**
     * Calculates the probability of class membership of a single data vector.
     * @param input The data vector to calculate the probabilities of
     * class membership for. This probabilities should be ordered such that the indexes
     * match the class names returned by <code>getClassNames</code> and should sum to 1.0.
     * @return An array of the probabilities of class membership
     */
    public double[] probabilities(double[] input){
        Instance in = new Instance(1.0,input);
        try {
            return theTree.distributionForInstance(in);
        } catch (Exception ex) {
            System.out.println("Exception occured when calculating distribution for a vector!\n" + ex.getMessage());
            ex.printStackTrace();
            return null;
        }
    }
    
    /**
     * Classifies the input Signal object and outputs the label of the output class
     * @param inputSignal The Signal object to classify
     * @return The String label of the output class
     */
    public String classify(Signal inputSignal){
        
        double[] probs = probabilities(inputSignal);
        int maxidx = -1;
        double max = Double.NEGATIVE_INFINITY;
        for (int i = 0; i < probs.length; i++) {
            if (probs[i]>max){
                max = probs[i];
                maxidx = i;
            }
        }
        
        return this.classnames[maxidx];
    }
    
    public String getMultiClassADTreeOptions() {
        return MultiClassADTreeOptions;
    }
    
    public void setMultiClassADTreeOptions(String MultiClassADTreeOptions) {
        this.MultiClassADTreeOptions = MultiClassADTreeOptions;
    }
    
    public boolean getVerbose() {
        return verbose;
    }
    
    public void setVerbose(boolean verbose) {
        this.verbose = verbose;
    }
    
}
