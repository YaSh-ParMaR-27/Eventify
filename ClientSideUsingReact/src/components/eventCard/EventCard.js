import React, { useState } from 'react'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import { BsFillHeartFill } from 'react-icons/bs';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function EventCard({cardImg,cardTitle,cardDate,cardTime,cardType,cardPrice}) {
    const [IconColor , setIconColor] = useState('white');
    return (
        <>
            <Card css={{ w: "85%", h: "320px" , boxShadow:"$md" , borderRadius:"5px"}}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Row>
                    <Col>
                        <Button style={{color:'black',backgroundColor:"#acced0" }} disabled size="xs"  >
                                <Text
                                        css={{ color: "#151E45"}}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                    {cardType}
                                </Text>
                        </Button>
                    </Col>
                    <Col style={{display:'flex', justifyContent:"end", alignItems:'center' }}>     
                        <BsFillHeartFill  color={IconColor} onClick={()=>{
                                const clr = (IconColor==='white')?"red":"white";
                                setIconColor(clr);
                        }}/>   
                    </Col>
                    </Row>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        
                        src={cardImg}
                        width="100%"
                        height="80%"
                        objectFit="cover"
                        alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    // isBlurred
                    css={{
                        position: "absolute",
                        // bgBlur: "#ffffff66",
                        backgroundColor:"#c5d3e0",
                        borderRadius:"0px",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="#000" size={16}    >
                               {cardTitle}
                            </Text>
                            <Text color="#000" size={12}>
                                {cardDate} | {cardTime}
                            </Text>
                        </Col>
                        <Col> 
                            <Row justify="flex-end">
                               
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={16}
                                        // weight="bold"
                                        transform="uppercase"
                                    >
                                        {cardPrice===0 ? "":<CurrencyRupeeIcon fontSize='16px'/>}{cardPrice===0 ? "free" : cardPrice}
                                    </Text>
                                
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}
