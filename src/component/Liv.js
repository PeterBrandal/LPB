// Liv.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kilen3 from '../res/kilen3.jpg'; // Fixed path
import kilen4 from '../res/kilen4.jpg'; // Fixed path
import '../styles/Liv.css'; // Fixed double slash

export function Liv() {
  // Gallery images data - defined inline since the galleryImages.js file might not exist yet
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/image1.jpg',
      alt: 'Brygga på sommerdagen med uteservering',
      title: 'Sommerdag på brygga'
    },
    {
      id: 2,
      src: '/images/gallery/image2.jpg',
      alt: 'Konsert på brygga med lokalband',
      title: 'Fredagskonsert'
    },
    {
      id: 3,
      src: '/images/gallery/image3.jpg',
      alt: 'Sjømat servert på tallerken',
      title: 'Dagens fangst'
    },
    {
      id: 4,
      src: '/images/gallery/image4.jpg',
      alt: 'Solnedgang over vannet sett fra brygga',
      title: 'Solnedgang'
    },
    {
      id: 5,
      src: '/images/gallery/image5.jpg',
      alt: 'Matlagingskurs med lokalbefolkningen',
      title: 'Matlagingskurs'
    },
    {
      id: 6,
      src: '/images/gallery/image6.jpg',
      alt: 'Festmiddag med lang bordsetning på brygga',
      title: 'Festmiddag'
    }
  ];
  
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Handle opening the image modal
  const openModal = (image) => {
    setSelectedImage(image);
  };
  
  // Handle closing the image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Removed duplicate navbar - it should be handled by your App.js */}

      <div className='hero-section'>
        <div className='hero-content'>
          <h1>Velkommen til Liv på bryggekanten</h1>
          <Container className='button-container'>
            <Button as={Link} to="/meny" className="hero-menu-button">
              Se vår meny
            </Button>
            <Button as={Link} to="/" className="hero-menu-button">
              Bestill bord hos oss
            </Button>
          </Container>
        </div>
      </div>

      <div className='content-section'>
        <Container className="my-5">
          <Row className="align-items-center" style={{ minHeight: '400px' }}>
            <Col xs={12} md={6}>
              <img
                src={kilen3}
                alt="Kilen 3"
                className="img-fluid shadow"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2>Liv på Brygga</h2>
              <p>
                På terrassen ved Sandøya Mat rett ved Sandøykilen, har det i årevis blitt servert god mat og godt drikke med sjøen som nærmeste nabo.
                Det tenker vi å fortsette med. "Liv på Bryggekanten" kaller vi det nye tilskuddet til øya.
                Restauranten drives av samme eiere som butikken, og med oss på laget har vi fått Lotta Røstad som flyttet til Sandøya for et par år siden.
                Lotta har lang fartstid i "bransjen", er svensk og vil nok sørge for at det også gjenspeiles i menyen.
                Sammen brenner vi for å gjøre både Liv på Bryggekanten og butikken til øyas naturlige samlingssted, sommer som vinter.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          <Row>
            <Col xs={12} md={6}>
              <h2>Arrangementer på Brygga</h2>
              <p>
                Vi tilbyr en rekke arrangementer på Sandøya Mat gjennom hele året.
                Fra konserter og temakvelder til spesielle matopplevelser.
              </p>
            </Col>

            <Col xs={12} md={6}>
              <img
                src={kilen4}
                alt="Kilen 4"
                className="img-fluid shadow"
              />
            </Col>
          </Row>
        </Container>
        
        {/* Gallery Section */}
        <Container className="mt-5">
          <h2 className="text-center mb-4">Bilder fra Brygga</h2>
          <div className="gallery-grid">
            {galleryImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item" 
                onClick={() => openModal(image)}
              >
                {/* For development, let's use placeholder divs until actual images are available */}
                <div className="gallery-placeholder">
                  {image.title}
                </div>
                {/* Uncomment when you have actual images */}
                {/* 
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image" 
                />
                */}
                <div className="image-overlay">
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            {/* For development, let's use placeholder text until actual images are available */}
            <div className="modal-placeholder">
              {selectedImage.title}
            </div>
            {/* Uncomment when you have actual images */}
            {/* 
            <img src={selectedImage.src} alt={selectedImage.alt} />
            */}
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Liv;
