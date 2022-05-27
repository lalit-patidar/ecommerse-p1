import React , { Component } from "react";
import "./Productdetail.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Card from "../../components/MyNichoShop/card/Card";
import Footer from "../../components/MyNichoShop/footer/Footer";
import Notification from "../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import axios from 'axios';
import ImageGallery from "../../components/imagegallery/ImageGallery";
import { Image ,Button  ,Row ,Col ,Container ,Pagination ,ListGroup, Toast} from "react-bootstrap";


class Product extends Component {
    
    render(){
        return(
            <div className="my-nicho-shop">
                  {/* <Header /> */}
                  <Menu />
                  <Container fluid>
                      <Row>
                        <Col><ImageGallery /></Col>
                        <Col>
                            <h1>Product name</h1>
                        </Col>
                      </Row>                      
                      <Row>
                        <Col><strong>Item specifics</strong></Col>
                        <Col><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p></Col>
                        <Col><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p></Col>
                      </Row>
                      <Row>
                      <Col>
                        <Toast>
                            <Toast.Header>
                              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                              <strong className="me-auto">98.7% Positive feedback</strong>
                              <h6>Average based on 12345 buyers feedback</h6>                              
                            </Toast.Header>
                            <Toast.Body >
                                <ListGroup>
                              <ListGroup.Item>No style</ListGroup.Item>
                              <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                              <ListGroup.Item action variant="secondary">
                                Secondary
                              </ListGroup.Item>
                              <ListGroup.Item action variant="success">
                                Success
                              </ListGroup.Item>
                              <ListGroup.Item action variant="danger">
                                Danger
                              </ListGroup.Item>
                              <ListGroup.Item action variant="warning">
                                Warning
                              </ListGroup.Item>
                              <ListGroup.Item action variant="info">
                                Info
                              </ListGroup.Item>
                              <ListGroup.Item action variant="light">
                                Light
                              </ListGroup.Item>
                              <ListGroup.Item action variant="dark">
                                <Pagination>
                                  <Pagination.First />
                                  <Pagination.Prev />
                                  <Pagination.Item>{1}</Pagination.Item>
                                  <Pagination.Ellipsis />

                                  <Pagination.Item>{10}</Pagination.Item>
                                  <Pagination.Item>{11}</Pagination.Item>
                                  <Pagination.Item active>{12}</Pagination.Item>
                                  <Pagination.Item>{13}</Pagination.Item>
                                  <Pagination.Item disabled>{14}</Pagination.Item>

                                  <Pagination.Ellipsis />
                                  <Pagination.Item>{20}</Pagination.Item>
                                  <Pagination.Next />
                                  <Pagination.Last />
                                </Pagination>
                              </ListGroup.Item>
                            </ListGroup>
                            </Toast.Body>
                          </Toast>
                          </Col>
                      </Row>
                    </Container>                                    
                  <Footer />
            </div>
        );
    }
}

export default Product;
