import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usestate from './components/Usestate';
import Counter from './components/Counter';
import Link1 from './components/Link1';
import { useEffect, useState } from 'react';
import Fashion from './components/Fashion';

function App() {
  const [fash, setFash] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setFash(data);
        console.log(data);
      });
  }, []);


  return (
    <div>
      {
        fash.map((f,i) => (
          <Fashion key={i} props={f}/>
        ))
      }
      {/* <div>
        <Link1/>
      </div> */}
      {/* <Usestate/>
      <br/>
      <Counter/>
      <h3>TO DO LIST</h3>
      <div className="container text-center">
        <input style={{margin: '6px'}} type="text" />
        <input style={{margin: '6px'}} type="text" name="" id="" />
        <button>Submit</button>
      </div>
      <div>
        <Container>
          <Row>
            <Col>1 of 2
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            </Col>
            
            <Col>2 of 2
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>1 of 3
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            </Col>
            <Col>2 of 3
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            </Col>
            <Col>3 of 3
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>  
      </div> */}
    </div>
  )
}

export default App;
