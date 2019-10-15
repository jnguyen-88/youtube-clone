import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };

    // Helper Functions
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)
    };

    render() {
        return (
            <div className="ui segment">
                <div className="logo">
                    <h3>WatchTube</h3>
                    <i class="play icon"></i>
                </div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field icon input">
                        <i className="search icon"></i>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <i class="camera icon" id="icon-camera"></i>
                    </div>
                    <div className="user-nav__icon-box">
                        <i class="copy outline icon" id="icon-outline"></i>
                    </div>
                    <div className="user-nav__icon-box">
                        <i className="bell icon" id="icon-bell"></i>
                        <span className="user-notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <img src="img/user-1.jpg" alt="user-1" className="user-photo" />
                        <span className="user-name">Justin</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SearchBar;