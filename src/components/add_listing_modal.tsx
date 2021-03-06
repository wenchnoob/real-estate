import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { getDatabase, ref, set } from 'firebase/database';
import app from '../scripts/firebase';
import { v4 as uuidv4 } from 'uuid';
import { HouseProps } from '../scripts/types';
import PicturesPreview from './pictures_preview';
import { readImg } from '../scripts/utils';
import { getHouse } from '../scripts/data';

export const AddListingModal = ({ resetId, getId, show, setShow }: { resetId: (arg0: string) => void, getId: () => string, show: boolean, setShow: (arg0: boolean) => void }): JSX.Element => {

    const table = 'houses/';
    const db = getDatabase(app);

    
    const handleClose = () => setShow(false);

    const [house, setHouse]: [HouseProps | undefined, Dispatch<SetStateAction<HouseProps | undefined>>] = useState();

    const handleShow = () => {
        resetId('');
        setShow(true);
        setHouse(undefined);
    };
    
    const onPriceChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        listed_price: value,
    } as HouseProps);
    const onAddressChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        address: value,
    } as HouseProps);
    const onAddress2Change = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        address2: value,
    } as HouseProps);
    const onCityChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        city: value,
    } as HouseProps);
    const onStateChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        state: value,
    } as HouseProps);
    const onZipChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        zip: value,
    } as HouseProps);
    const onSqFootageChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        sq_footage: value,
    } as HouseProps);
    const onAmountOfBedroomsChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        amount_of_bedrooms: value,
    } as HouseProps);
    const onAmountOfBathroomsChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        amount_of_bathrooms: value,
    } as HouseProps);
    const onYearBuiltChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        year_built: value,
    } as HouseProps);
    const onLongDescriptionChange = ({ target: { value } }: { target: any }) => setHouse({
        ...house,
        long_desc: value,
    } as HouseProps);

    const onImageChange = ({ target: { files } }: { target: any }) => {
        if (!files) return;
        if (!files[0]) return;

        const readFiles = async (files: any[]) => {
            const tmp = await readImg(files[0]);
            return tmp;
        };

        readFiles(files).then((newImg) => setHouse({
            ...house,
            main_img: newImg,
        } as HouseProps));
    }

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
        } as HouseProps));
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
                        getHouse(id).then((h: HouseProps) => setHouse(h));
                }
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>{getId() === '' ? 'Add a Listing' : 'Edit a listing'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridPrice" onChange={onPriceChange}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="" value={house && house.listed_price} />
                        </Form.Group>

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

                        <Form.Group className="mb-3" controlId="formGridSqFootage" onChange={onSqFootageChange}>
                            <Form.Label>Square Footage</Form.Label>
                            <Form.Control type="number" placeholder="" value={house && house.sq_footage} />
                        </Form.Group>

                        <Row>
                            <Form.Group className="mb-3" controlId="formGridSqFootage" onChange={onAmountOfBedroomsChange}>
                                <Form.Label>Amount of Bedrooms</Form.Label>
                                <Form.Control type="number" placeholder="" value={house && house.amount_of_bedrooms} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridSqFootage" onChange={onAmountOfBathroomsChange}>
                                <Form.Label>Amount of Bathrooms</Form.Label>
                                <Form.Control type="number" placeholder="" value={house && house.amount_of_bathrooms} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridSqFootage" onChange={onYearBuiltChange}>
                                <Form.Label>Year Built</Form.Label>
                                <Form.Control type="number" placeholder="" value={house && house.year_built} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridSqFootage" onChange={onLongDescriptionChange}>
                            <Form.Label>Long Description</Form.Label>
                            <Form.Control as="textarea" placeholder="" value={house && house.long_desc} />
                        </Form.Group>

                        <Form.Group controlId="formFileSingle" className="mb-3">
                            <Form.Label>Add Main Image</Form.Label>
                            <Form.Control type="file" onChange={onImageChange} accept="image/*" />
                        </Form.Group>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Add Images</Form.Label>
                            <Form.Control type="file" multiple onChange={onImagesChange} accept="image/*" />
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