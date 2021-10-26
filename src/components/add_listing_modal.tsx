import React, { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Database, getDatabase, ref, set } from 'firebase/database';
import app from '../scripts/firebase';
import { v4 as uuidv4 } from 'uuid';
import useSWR from 'swr';
import { House } from '../scripts/types';
import PicturesPreview from './pictures_preview';
import { readImg } from '../scripts/utils';
import image from 'next/image';
import { getHouse } from '../scripts/data';

export const AddListingModal = ({ getId, show, setShow }: { getId: () => string, show: boolean, setShow: (arg0: boolean) => void }): JSX.Element => {

    const table = 'houses/';
    const db = getDatabase(app);

    const [loaded, setLoaded] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [house, setHouse]: [House | undefined, Dispatch<SetStateAction<House | undefined>>] = useState();


    const onAddressChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        address: value,
    } as House);
    const onAddress2Change = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        address2: value,
    } as House);
    const onCityChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        city: value,
    } as House);
    const onStateChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        state: value,
    } as House);
    const onZipChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        zip: value,
    } as House);

    const onImagesChange = ({ target: { files } }: { target: any }) => {
        if (!files) return;
        if (!files[0]) return;

        const readFiles = async (files: any[]) => {
            let temp: string[] = [];
            for (const file of files) {
                const tmp = await readImg(file);
                temp.push(tmp);
            }
            return temp;
        };

        readFiles(files).then((newImgs) => setHouse({
            ...house,
            images: house && house.images ? [...house.images, ...newImgs] : newImgs,
        } as House));
    }

    const handleSubmit = (id: string) => {
        setTimeout(() => {
            id = id || uuidv4();
            set(ref(db, table + id), {
                ...house,
                id: id,
            }).then(() => { window.location.replace('/admin') });
        }, 100);
        handleClose();
    };

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Add House
            </Button>

            <Modal show={show} onHide={handleClose} onShow={() => {
                let id = getId();
                if (id) {
                    if (house === undefined || house.id != id)
                        getHouse(id).then((h: House) => setHouse(h));
                    setLoaded(true);
                }
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>{getId() ? 'Add a Listing' : 'Edit a listing'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1" onChange={onAddressChange}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" value={house && house.address} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2" onChange={onAddress2Change}>
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" value={house && house.address2} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity" onChange={onCityChange}>
                                <Form.Label>City</Form.Label>
                                <Form.Control value={house && house.city} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState" onChange={onStateChange}>
                                <Form.Label>State</Form.Label>
                                <Form.Select value={house && house.state}>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="AL">AL</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip" onChange={onZipChange}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control value={house && house.zip} />
                            </Form.Group>


                        </Row>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Add Images</Form.Label>
                            <Form.Control type="file" multiple onChange={onImagesChange} accept="image/png, image/jpg" />
                        </Form.Group>
                    </Form>
                    <PicturesPreview pictures={house && house.images} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit(getId())}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
};