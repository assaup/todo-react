import Field from "./Field"

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <Field 
                className="todo__field"
                label="search task"
                id="search-task"
                type="search"
            />
      </form>
    )
}

export default SearchTaskForm