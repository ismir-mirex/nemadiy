/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package org.imirsel.nema.repository;

import java.sql.SQLException;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author kriswest
 */
public class RepositoryClientConnectionPool {
    private static final int DEFAULT_POOL_SIZE = 10;
    private static final String LOG_CLASS_NAME = RepositoryClientConnectionPool.class.getName();
    private int poolSize = DEFAULT_POOL_SIZE;
    private LinkedBlockingQueue<RepositoryClientInterface> pool;
    
    private static RepositoryClientConnectionPool instance = new RepositoryClientConnectionPool();

    public static RepositoryClientConnectionPool getInstance() {
        return instance;
    }

    /**
     * Generates the pool (making all required DB connections), with the 
     * default pool size.
     */
    private RepositoryClientConnectionPool() {
        try{
            initPool();
        }catch(SQLException e){
            Logger.getLogger(LOG_CLASS_NAME).log(Level.SEVERE, "Failed to initialise RepositoryClientConnectionPool!",e);
        }
    }
    
    /**
     * Generates the pool (making all required DB connections), with the 
     * specified pool size.
     * @param poolSize_ The number of instances to put in the pool.
     */
    public RepositoryClientConnectionPool(int poolSize_) throws SQLException{
        initPool();
        poolSize = poolSize_;
    }

    /**
     * Returns the size of the pool.
     * @return the size of the pool.
     */
    public int getPoolSize() {
        return poolSize;
    }

    public void destroy(){
        close();
    }
    
    public void close(){
        RepositoryClientInterface[] utils = pool.toArray(new RepositoryClientInterface[pool.size()]);
        for (int i = 0; i < utils.length; i++){
            synchronized(utils[i]){
                utils[i].close();
            }
        }
    }
    
    //--------------------------------------------------------------------------
    // Private service methods for operating the pool
    //--------------------------------------------------------------------------
    /**
     * Initializes the pool.
     */
    private void initPool() throws SQLException{
        pool = new LinkedBlockingQueue<RepositoryClientInterface>();
        for (int i = 0; i < poolSize; i++) {
            pool.add(new RepositoryClientImpl());
        }
    }
    
    /** Gets a RepositoryClientImpl from the pool, blocking until one is available.
     * 
     * @return A RepositoryClientImpl Object from the pool.
     */
    public RepositoryClientInterface getFromPool(){
        RepositoryClientInterface util = null;
        try {
            util = pool.poll(30, TimeUnit.SECONDS);
        } catch (InterruptedException ex) {
            Logger.getLogger(LOG_CLASS_NAME).log(Level.WARNING, null, ex);
        }
        return util;
    }
    
    /**
     * Returns a RepositoryClientImpl Object to the pool. RepositoryClientImpl Objects
     * must always be returned to the pool or replaced after use or the pool 
     * will be depleted.
     * @param util A RepositoryClientImpl Object to return to the pool.
     */
    public void returnToPool(RepositoryClientInterface util){
        pool.add(util);
    }
    
}
