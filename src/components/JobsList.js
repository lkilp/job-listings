import React from 'react';
import './JobsList.scss';
import jobsArray from '../assets/data.json';
import JobCard from './JobCard';

const JobsList = () => {
    return (
        <div className="JobsList">
            { jobsArray.map(job => {
                return <JobCard job={job} key={job.id} />
            })}
        </div>
    )
}
export default JobsList;



