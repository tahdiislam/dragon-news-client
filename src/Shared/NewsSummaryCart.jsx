import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
    const { title, author, details, rating, image_url, _id, total_view } = news;
    // console.log(news);
    return (
        <div>
            <Card className="text-center mb-4">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="d-flex align-items-center">
                            <div>
                                <Image
                                    roundedCircle
                                    style={{ height: "60px" }}
                                    className="me-2" src={author.img} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h5>{author.name}</h5>
                                <p>{author.published_date}</p>
                            </div>
                        </div>
                        <div >
                            <FaRegBookmark className='me-2' />
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title style={{textAlign: 'start'}}>{title}</Card.Title>
                    <Card.Img src={image_url} variant="top" />
                    <Card.Text style={{textAlign: "justify"}}>
                        {details.length > 200 ? <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></> : <>{details}</>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <FaStar className="text-warning me-2" />
                            <span>{rating.number}</span>
                        </div>
                        <div>
                            <FaEye className="me-2"/>
                            <span>
                                {total_view}
                            </span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCart;