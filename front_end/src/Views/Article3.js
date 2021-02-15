import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import ImageGallery from '../Components/ImageGallery';
import MainImage from '../Assets/Images/lime_water_4.jpg';
import FirstSmallImage from '../Assets/Images/lime_water_1.jpg';
import SecondSmallImage from '../Assets/Images/lime_water_2.jpg';
import ThirdSmallImage from '../Assets/Images/lime_water_3.jpg';

function Article() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1>Papildinājums rasolam</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ImageGallery
                        main_img={MainImage}
                        main_img_alt='Ūdens ar laimu un citronu'
                        first_sm_img={FirstSmallImage}
                        first_sm_img_alt='Ūdens ar laimu un citronu'
                        second_sm_img={SecondSmallImage}
                        second_sm_img_alt='Ūdens ar laimu un citronu'
                        third_sm_img={ThirdSmallImage}
                        third_sm_img_alt='Ūdens ar laimu un citronu'
                    />
                </Col>
                <Col md={6}>
                    <h2>ŪDENS AR LAIMU UN CITRONU</h2>
                    <p>
                        Citronu un/vai laima šķēlītes, kuras iemet ūdens glāzē, piešķirot ūdenim atsvaidzinošu garšu.
                    </p>
                </Col>
            </Row>
        </Container>

    )
}

export default Article;
