import React, {useState} from 'react';
import {Button, Card, CardGroup} from "react-bootstrap";
import Image from 'next/image'

const ScrollablePictures = ({ images }: {images: string[]}) => {

    const [pos, setPos] = useState(0);
    const nextImg = () => setPos((pos + 1) % images.length);
    const prevImg = () => setPos(pos === 0 ? images.length - 1 : pos - 1);


    return (
        <div>
            <div>
                <Button onClick={prevImg}/>
                <Image src={images[pos]} width={800} height={450} alt={''}/>
                <Button onClick={nextImg}/>
            </div>
            <div>
                <CardGroup>
                    {images.map((picture: string, idx: number) => (
                        <Card key={`${idx}`}><Image src={picture} width={80} height={45} alt=''></Image></Card>
                    ))}
                </CardGroup>
            </div>
        </div>
    );
}

export default ScrollablePictures;