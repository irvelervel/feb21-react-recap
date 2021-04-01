import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Appointments extends React.Component {

    state = {
        appointments: [],
        searchFilter: '',
        appointment: {
            name: '',
            description: '',
            price: 0,
            time: ''
        }
    }

    componentDidMount = async () => {
        this.fetchData()
    }

    fetchData = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/agenda/")
            let appointments = await response.json()
            console.log(appointments)
            this.setState({ appointments })
        } catch (error) {
            console.log(error)
        }
    }

    submitAppointment = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/agenda/", {
                method: 'POST',
                body: JSON.stringify(this.state.appointment),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                alert('appointment saved!')
                this.setState({
                    appointment: {
                        name: '',
                        description: '',
                        price: 0,
                        time: ''
                    }
                })
                this.fetchData()
            } else {
                alert('ERROR!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteListItem = async (id) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/agenda/" + id, {
                method: 'DELETE'
            })
            if (response.ok) {
                alert('successfully deleted')
                this.fetchData()
            } else {
                alert('error in delete process')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search events</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        value={this.state.searchFilter}
                        onChange={e => this.setState({ searchFilter: e.target.value })}
                    />
                </Form.Group>
                <ListGroup>
                    {this.state.appointments.filter(a => a.name.toLowerCase().includes(this.state.searchFilter)).map(appointment =>
                        <ListGroup.Item key={appointment._id} style={{ color: 'black' }}>
                            {appointment.name} <Button variant='danger' onClick={() => this.deleteListItem(appointment._id)}>DELETE</Button>
                        </ListGroup.Item>
                    )}
                </ListGroup>
                <Form onSubmit={e => {
                    e.preventDefault();
                    this.submitAppointment()
                }}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={e => this.setState({
                            appointment: {
                                ...this.state.appointment,
                                name: e.target.value
                            }
                        })} value={this.state.appointment.name} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={e => this.setState({
                            appointment: {
                                ...this.state.appointment,
                                description: e.target.value
                            }
                        })} value={this.state.appointment.description} type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control onChange={e => this.setState({
                            appointment: {
                                ...this.state.appointment,
                                time: e.target.value
                            }
                        })} value={this.state.appointment.time} type="datetime-local" placeholder="Enter Time" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={e => this.setState({
                            appointment: {
                                ...this.state.appointment,
                                price: e.target.value
                            }
                        })} value={this.state.appointment.price} type="number" placeholder="Enter Price" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default Appointments