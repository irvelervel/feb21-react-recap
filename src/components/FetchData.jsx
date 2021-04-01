import React from 'react'
import { Col, Row } from 'react-bootstrap'

class FetchData extends React.Component {

    state = {
        data: []
    }

    // DRY
    // don't repeat yourself

    fetchData = async () => {
        try {
            let baseUrl = 'https://jsonplaceholder.typicode.com/'
            let response = await fetch(baseUrl + this.props.dropdownValue)
            if (response.ok) {
                let body = await response.json()
                // now body is the array holding our posts, comments
                console.log(body)
                this.setState({
                    data: body.slice(0, 100)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        // only happens once
        this.fetchData()
    }

    componentDidUpdate = (prevProps, prevState) => {
        // you'll enter here in two cases:
        // 1) there was a change in the dropdown
        // 2) you fetched new data
        console.log('!!', prevProps)
        console.log('??', prevState)
        // will happens at every change in props or state
        console.log('new props or state!', this.props)
        // we'll fetch the data just when we changed the dropdown option
        // and for doing so we'll check previous props VS current props
        if (prevProps.dropdownValue !== this.props.dropdownValue) {
            this.fetchData()
        }
    }

    render() {
        return (
            <Row>
                {this.state.data.map(obj => <Col key={obj.id} xs={3}>
                    {(this.props.dropdownValue === 'posts' || this.props.dropdownValue === 'comments' || this.props.dropdownValue === 'albums')
                        ? <div>{obj.body}</div>
                        : <img src={obj.url} alt="jsonImage" />}
                </Col>)}
            </Row>
        )
    }
}

export default FetchData