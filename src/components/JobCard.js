import React from 'react';
import './JobCard.scss'

const JobCard = (props) => {
    const { job } = props;

    const tags = [
        {
            key: 'role',
            value: job.role,
        },
        {
            key: 'level',
            value: job.level,
        },
        ...job.languages.map(language => {
            return {
                key: 'language',
                value: language,
            }
        }),
        ...job.tools.map(tool => {
            return {
                key: 'tool',
                value: tool,
            }
        })

    ];
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
                        return <div key={i}>{tag.value}</div>
                    })}
                </div>
            </div>

        </div>
    )
}
export default JobCard;

// "id": 2,
//     "company": "Manage",
//     "logo": "./images/manage.svg",
//     "new": true,
//     "featured": true,
//     "position": "Fullstack Developer",
//     "role": "Fullstack",
//     "level": "Midweight",
//     "postedAt": "1d ago",
//     "contract": "Part Time",
//     "location": "Remote",
//     "languages": ["Python"],
//     "tools": ["React"]