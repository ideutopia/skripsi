import React from 'react'
import {Tag} from '../../atoms';
import './Tag_Wrapper.css';

const TagWrapper = ({tag1, tag2, tag3, tag4}) => {
    return (
        <div className="Tag_Wrapper">
            <Tag name = {tag1}/>
            <Tag name = {tag2}/>
            <Tag name = {tag3}/>
            <Tag name = {tag4}/>
        </div>
    )
}

export default TagWrapper;
