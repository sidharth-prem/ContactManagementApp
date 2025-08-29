import React, {useState} from "react";
import { Card, CardHeader, CardFooter, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



function ContactList() {
    const [contacts,  setContacts] = useState([]);
    const [contact, setContact] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contacts", {
            state: {contacts: contacts},
        });
    };

    const handleChange = (e) =>{
        setContact({ ...contact, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setContacts([...contacts, contact]);
        setContact({
            firstname: "",
            lastname: "",
            gender: "",
            address: "",
            phone: "",
            email: "",
        });
    };


    return(

        <div className="container w-100">
            <Card className="w-100">
                <CardHeader>
                    <h1>Contacts Manager</h1>
                </CardHeader>

                <CardHeader>
                    <h3>Add Contacts</h3>
                </CardHeader>
                
                
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className = "mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type = "text"
                        placeholder = "First Name"
                        name = "firstname"
                        value={contact.firstname}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group className = "mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        type = "text"
                        placeholder = "Last Name"
                        name = "lastname"
                        value={contact.lastname}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group className = "mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                            name = "gender"
                            value={contact.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={contact.address}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={contact.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className = "mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type = "text"
                        placeholder = "Email"
                        name = "email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        + SAVE
                    </Button>
                </Form>

                <CardFooter className="text-center">
                    <Button variant="success" onClick={handleClick}>
                        LIST CONTACTS
                    </Button>
                </CardFooter>

            </Card>
            
        </div>

        
    )
}

export default ContactList;