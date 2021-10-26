import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Image from 'next/image';


const PicturesPreview = ({ pictures }: PicturesPreviewProps) => {
    if (!pictures) return <></>;
    
    console.log(pictures);

    return (
        <div>
            <CardGroup>
                {pictures.map((picture: string, idx: number) => (
                    <Card id={`${idx}`}><Image src={picture} width={80} height={45}></Image></Card>
                ))}
            </CardGroup>
        </div>
    );
}

export interface PicturesPreviewProps {
    pictures: string[] | undefined;
}


export default PicturesPreview;