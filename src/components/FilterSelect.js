import './styles/FilterSelect.css';

export function FilterSelect(props) {

    return (
        <div className='filter-container'>
            <div className='filter'>All</div>
            <div className='filter'>Active</div>
            <div className='filter'>Completed</div>
        </div>
    );
}