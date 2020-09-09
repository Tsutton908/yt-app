import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        //prevents page from refreshing when submitted
        event.preventDefault();

        //TODO: Make sure to call 
        //callback from parent to component
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            placeholder="Please search a video"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;