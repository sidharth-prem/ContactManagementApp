import { Card, CardHeader , Table, Button, Form, InputGroup} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function ViewContacts(){
    const location = useLocation();
    const navigate = useNavigate();

    const [contacts, setContacts] = useState(location.state?.contacts || []);
    const [editIndex, setEditIndex] = useState(-1);
    const [editedContact, setEditedContact] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const handleEdit =  (index) => {
        setEditIndex(index);
        setEditedContact({ ...contacts[index] });
    };

    const handleChange = (e) =>{
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    const handleSave = (e) =>{
        const updatedContacts = contacts.map((c,index) =>
        index === editIndex ? editedContact : c
    );
    setContacts(updatedContacts);
    setEditIndex(-1);
    };

    const handleCancel = () => setEditIndex(-1);

    const handleDelete = (id) => {
        const updatedContacts = contacts.filter((c, index) => index != id);
        setContacts(updatedContacts);
    };

    //Filtering Contacts based on Search criteria

    const filteredContacts = contacts.filter(
        (c) =>
            c.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastname.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.phone.includes(searchTerm) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
        <div className="container">

            <Card className="w-100">
                <CardHeader>
                    <h1>Contacts Manager</h1>
                </CardHeader>

                <CardHeader>
                    <h3>My Contacts</h3>
                </CardHeader>

            </Card>
            {/*Search Icon with Clear button*/}
            <InputGroup className="mb-3">
                <Form.Control
                    type= "text"
                    placeholder= "Search by name, phone number or email..."
                    value= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant= "secondary"
                    onClick= {() => setSearchTerm("")}
                    disabled = {!searchTerm}
                >
                    CLEAR
                </Button>
            </InputGroup>

            {/*+ Add to Contacts Button*/}
            <div className="mb-3 text-end">
                <Button variant="success" onClick={() => navigate("/")}>
                    + ADD
                </Button>
            </div>

            <Table bordered hover>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredContacts.length >0 ? (
                        filteredContacts.map((c, index) =>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {editIndex === index ? (
                                    <>
                                        <td>
                                            <Form.Control
                                                name = "firstname"
                                                value = {editedContact.firstname}
                                                onChange = {handleChange}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                name = "lastname"
                                                value = {editedContact.lastname}
                                                onChange = {handleChange}
                                            />
                                        </td>
                                        <td>
                                            <Form.Select
                                                name = "gender"
                                                value = {editedContact.gender}
                                                onChange = {handleChange}
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </td>
                                        <td>
                                            <Form.Control
                                                name = "address"
                                                value = {editedContact.address}
                                                onChange = {handleChange}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                name = "phone"
                                                value = {editedContact.phone}
                                                onChange = {handleChange}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                name = "email"
                                                value = {editedContact.email}
                                                onChange = {handleChange}
                                            />
                                        </td>
                                        <td>
                                            <Button variant = "success" onClick = {handleSave}>
                                                SAVE
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant = "warning" onClick = {handleCancel}>
                                                CANCEL
                                            </Button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{c.firstname}</td>
                                        <td>{c.lastname}</td>
                                        <td>{c.gender}</td>
                                        <td>{c.address}</td>
                                        <td>{c.phone}</td>
                                        <td>{c.email}</td>
                                        <td>
                                            <Button onClick={() => handleEdit(index)}>
                                                Update
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(index)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center text-muted">
                                No Contacts Found!
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </div>
    )

}

export default ViewContacts;