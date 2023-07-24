import React, { useMemo } from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    const options = [
        {value: 'title', name: 'По названию'},
        {value: 'text', name: 'По тексту'}
      ]

    return (
        <div className='filter'>
            <MyInput 
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск'
                styles='filter__search'/>
            <MySelect 
                options={options} 
                defaultValue='Сортировка по' 
                value={filter.sort}
                styles='filter__select'
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})} />
        </div>
    );
}

export default PostFilter;
