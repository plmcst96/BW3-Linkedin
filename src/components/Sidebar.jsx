import { Row, Col, Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import DiscoverUser from "./DiscoverUser";
import Corsi from "./Corsi";
const Sidebar = () => {

  return (
   <Container>
    <Row g-3>
        <Col className="col-md-8"> 
        <div><h1>Ciao</h1></div></Col>
        {/* first section */}
        <Col className="col-md-4 "> 
        <div className="rounded border border-black border-1 my-2 p-1"> 
        <div className="d-flex justify-content-between  p-3">
            <div className=" text-start me-2" >
                 <p style={{fontSize:"1.6vw", fontWeight:"700", margin:"0"}}>Lingua del profilo</p>
                 <p className="m-0" style={{fontSize:"1.3vw"}}>www.linkedin.com/in/...</p>
            </div>
            <Pencil  />
        </div>
        <hr  className="m-0"/>
        <div className="d-flex justify-content-between  p-3">
            <div className=" text-start me-2" >
                 <p style={{fontSize:"1.6vw", fontWeight:"700", margin:"0"}}>Public profile & URL</p>
                 <p className="m-0" style={{fontSize:"1.3vw"}}>Italiano</p>
            </div>
            <Pencil  />
        </div>
        </div>

        {/* first section */}

        {/* second section */}

        <div className="rounded border border-black border-1 my-2 p-1 px-2"> 
            <p>Persone che potresti conoscere</p>
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <DiscoverUser />
            <hr className="m-2" />
            <a href="/" className="m-2 text-decoration-none text-secondary" style={{fontWeight:"600"}}>Mostra tutto</a>
        </div>
          {/* second section */}
        {/* third section */}
        <div className="rounded border border-black border-1 my-2 p-1 px-2"> 
            <div className="d-flex p-2 align-items-center">
                <img src="assets/174857.png" alt="linkedIn" width={20} height={20} className="me-1" />
                <p className="m-0">LEARNING</p>
            </div>
           <Corsi />
           <hr className="m-2" />
            <a href="/" className="m-2 text-decoration-none text-secondary" style={{fontWeight:"600"}}>Visualizza i miei suggerimenti</a>
        </div>

        {/* thirdsection */}
        </Col>
    </Row>
   </Container>
  );
};

export default Sidebar;