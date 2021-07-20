import React from 'react';
import './Filter.scss';

const Filter = (props) => {
    const { filterTags, removeTags, removeTag } = props;
    if (filterTags.length === 0) {
        return <div></div>
    }
    return (
        <div className="Filter">
            <div className='filter-tags'>
                {filterTags.map((tag, i) => {
                    return <div className='filter-tag'>
                        <div className='tag-name' key={i}>{tag.value}</div>
                        <div className='remove-button' onClick={() => removeTag(tag)}></div>
                    </div>
                })}
            </div>
            <button className='clear-button' onClick={removeTags}>Clear</button>
        </div>
    )
}
export default Filter;
