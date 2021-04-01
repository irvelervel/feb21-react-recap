import { Component } from 'react'
import Form from 'react-bootstrap/Form'

class UrlDropdown extends Component {

    render() {
        return (
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Choose your endpoint</Form.Label>
                <Form.Control
                    as="select"
                    value={this.props.selectedValue}
                    onChange={e => this.props.updateStateFromChild(e.target.value)}>
                    {this.props.urls.map((url, i) => <option key={i}>{url}</option>)}
                </Form.Control>
            </Form.Group>
        )
    }
}

export default UrlDropdown