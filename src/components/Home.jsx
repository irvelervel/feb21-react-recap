import React from 'react'
import UrlDropdown from './UrlDropdown'
import FetchData from './FetchData'

class Home extends React.Component {
    state = {
        dropdownValue: 'posts',
    }

    updateStateFromChild = (value) => this.setState({ dropdownValue: value })


    render() {
        return (
            <>
                <UrlDropdown
                    urls={['posts', 'comments', 'albums', 'photos']}
                    updateStateFromChild={this.updateStateFromChild}
                    selectedValue={this.state.dropdownValue}
                />
                <FetchData dropdownValue={this.state.dropdownValue} />
            </>
        )
    }
}

export default Home







