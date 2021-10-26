import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Image from 'next/image';


const PicturesPreview = ({ pictures }: PicturesPreviewProps) => {
    if (!pictures) return <></>;

    return (
        <div>
            <CardGroup>
                {pictures.map((picture: string, idx: number) => (
                    <Card key={`${idx}`}><Image src={picture} width={80} height={45} alt=''></Image></Card>
                ))}
            </CardGroup>
        </div>
    );
}

export interface PicturesPreviewProps {
    pictures: string[] | undefined;
}


export default PicturesPreview;