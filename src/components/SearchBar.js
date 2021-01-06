
function SearchBar (props) {
    let term=null;
    const handleChange = (e) => {
        term=e.target.value;
    }

    return (
        <div>
            <input type='text' placeholder='Search' onChange={handleChange}></input>
            <button onClick={()=>props.handleSubmit(term)}>Go!</button>
        </div>
    );

}

export default SearchBar;