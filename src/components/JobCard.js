import React from 'react';
import './JobCard.scss'

const JobCard = (props) => {
    const { job, addTag, getTags } = props;
    const tags = getTags(job);
    return (
        <div className="JobCard">
            {job.featured && <div className='feature-color' />}
            <div className='content'>
                <img className='logo' src={job.logo} alt={job.company}>
                </img>
                <div className='details'>
                    <div className='company-name-tags'>
                        <div className='company-name'>{job.company}</div>
                        {job.new && <div className='new'>new!</div>}
                        {job.featured && <div className='featured'>featured</div>}
                    </div>
                    <div className='position'>{job.position}</div>
                    <div className='time-contract-location'>
                        <div className='time'>{job.postedAt}</div>
                        <div className='contract'>{job.contract}</div>
                        <div className='location'>{job.location}</div>
                    </div>
                </div>
                <div className='line'></div>
                <div className='tags'>
                    {tags.map((tag, i) => {
                        return <div key={i} onClick={() => { addTag(tag) }}>{tag.value}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default JobCard;
