import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Database, getDatabase, ref, set } from 'firebase/database';
import app from '../scripts/firebase';
import { v4 as uuidv4 } from 'uuid';

export const AddListingModal = (): JSX.Element => {

    const table = 'houses/';
    const db = getDatabase(app);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [address, setAddress] = useState('');
    const onAddressChange = ({target: {value}}: {target: any}) => setAddress(value);

    const [address2, setAddress2] = useState('');
    const onAddress2Change = ({target: {value}}: {target: any}) => setAddress2(value);

    const [city, setCity] = useState('');
    const onCityChange = ({target: {value}}: {target: any}) => setCity(value);

    const [state, setState] = useState('');
    const onStateChange = ({target: {value}}: {target: any}) => setState(value);

    const [zip, setZip] = useState('');
    const onZipChange = ({target: {value}}: {target: any}) => setZip(value);

    const [myImg, setMyImg] = useState('');
    const [images, setImages] = useState([]);
    const onImagesChange = ({target: {files}}: {target: any}) => {
        if (!files) return;
        if (!files[0]) return;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            setMyImg(reader.result as string);
        };
    }

    const handleSubmit = () => {
        setTimeout(() => {
            let id = uuidv4();
            set(ref(db, table + id), {
                id: id,
                address: address,
                address2: address2,
                city: city,
                state: state,
                zip: zip,
                img: myImg,
            }).then(() => {window.location.reload()});
        }, 100);
        handleClose();
    };

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Add House
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Listing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1" onChange={onAddressChange}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2" onChange={onAddress2Change}>
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity" onChange={onCityChange}>
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState" onChange={onStateChange}>
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>AL</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip" onChange={onZipChange}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>


                        </Row>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Add Images</Form.Label>
                            <Form.Control type="file" multiple onChange={onImagesChange} accept="image/png, image/jpg"/>
                        </Form.Group>
                        <img src={myImg}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}


interface ListModal {
    showing: boolean;
}