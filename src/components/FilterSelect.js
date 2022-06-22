import './styles/FilterSelect.css';

export function FilterSelect(props) {

    const handleFilterClick = (filter) => {
        props.setSelectedFilter(filter);
    }

    return (
        <div className='filter-container' id='filter-mobile'>
            <div className={props.selectedFilter === 'all' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('all')}>All</div>
            <div className={props.selectedFilter === 'active' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('active')}>Active</div>
            <div className={props.selectedFilter === 'completed' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('completed')}>Completed</div>
        </div>
    );
}