import React, { useState } from 'react';
import './JobsList.scss';
import jobsArray from '../assets/data.json';
import JobCard from './JobCard';
import Filter from './Filter';

const JobsList = () => {
    const [filterTags, setFilterTags] = useState([{
        key: 'role', value: 'Frontend'
    }]);
    const addTag = (tag) => {
        if (filterTags.find(testTag => testTag.value === tag.value)) {
            return;
        }
        setFilterTags([...filterTags, tag]);
    }
    const removeTags = () => {
        setFilterTags([]);
    }
    const removeTag = (tag) => {
        setFilterTags(filterTags.filter(testTag => testTag !== tag));
    }
    const getTags = (job) => {
        return [
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
    }

    let jobsResult = jobsArray;
    if (filterTags.length > 0) {
        jobsResult = jobsResult.filter(job => {
            const jobTags = getTags(job);
            for (let i = 0; i < filterTags.length; i++) {
                const value = filterTags[i].value;
                const found = jobTags.find(testTag => testTag.value === value);
                if (!found) {
                    return false;
                }
            }
            return true;

        });
    }
    return (
        <div className="JobsList">
            <Filter filterTags={filterTags} removeTags={removeTags} removeTag={removeTag} />
            {
                jobsResult.map(job => {
                    return <JobCard job={job} key={job.id} addTag={addTag} getTags={getTags} />
                })
            }
        </div>
    )
}
export default JobsList;



