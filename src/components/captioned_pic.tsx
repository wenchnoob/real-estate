import React from "react";
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from "styled-components";

export const HalfDiv = styled.div`
    width: 50%;
    height: 50%;
`;

const CaptionedPic = () => {
    return (
        <>
            <HalfDiv>
                <Card >
                    <Card.Img variant="top" src="Capture0.png" />
                    <Card.Body>
                        <Card.Title>Hector Flores</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint?
                        </Card.Text>
                        <Link href="/houses" passHref >
                            <Button variant="primary">Start Buying</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </HalfDiv>
        </>
    );
}

export default CaptionedPic;

