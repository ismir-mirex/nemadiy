package org.imirsel.nema.dao;

import java.util.List;

import org.imirsel.nema.model.Job;

/**
 * Interface for {@link Job} Data Access Objects.
 * 
 * @author shirk
 * @since 0.4.0
 */
public interface JobDao extends GenericDao<Job, Long> {

    /**
     * Return all jobs that are owned by a particular user.
     *
     * @param userId Unique ID of the user for whom jobs should be returned.
     * @return List of {@link Job}s that are owned by the specified user.
     */
    public abstract List<Job> getJobsByOwnerId(long userId);

    /**
     * Return all jobs that are have a certain status.
     *
     * @param status Status of the jobs to be fetched.
     * @return List of {@link Job}s that are of the same status.
     */
    public abstract List<Job> getJobsByStatus(Job.JobStatus status);

    /**
     * Return all jobs that are owned by a particular user and
     *          for specified taskId.
     *
     * @param userId Unique ID of the user for whom jobs should be returned.
     * @return List of {@link Job}s that are owned by the specified user and
     *          for specified taskId.
     */
    public List<Job> getJobsByOwnerIdAndTaskId(long userId, long taskId);

    /**
     * Return all jobs that are owned by a particular user with specified keyword.
     *
     * @param userId Unique ID of the user for whom jobs should be returned.
     */
    public List<Job> getJobsByOwnerIdAndKeyword(long userId, String keyword);
}
