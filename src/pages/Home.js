import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

const Home = () => {
    return (
      <div>
 <Container fluid>
 

 <div className="container-fluid-font">
    <Header />
    <div className="row">
         <img src="../images/CaitlinatWombatGarden.jpg" alt="Myself leaning on wombat garden statue" className="col-4" ></img>
         <img src="../images/Pinkdessert.jpg" alt="Pink plated dessert, black plate" className="col-4 hide" ></img>
         <img src="../blackscreencode-florian-olivo-unsplash.jpg" alt="Computer screen with black background and colorful code" className="col-4 hide" ></img>
       </div>

       <section className="row"> 
         <p className="col-12" id="indent">
           Hi, my name is Caitlin Murphy and while I am new to the coding world I have dwelt in the realm of creation my whole
           life. My previous career was as a pastry cook at fine dining establishments creating dishes that were both
           pleasing to the eyes and taste buds. I loved every facet of the culinary lifestyle: the creative environment, 
           the logic of planning and preparation, the adrenaline of service, and the countless job opportunities that make
           moving to incredible new places easy. After 7 years in the field, life threw me a curve ball in the form of a severe gluten 
           allergy so I started searching for other jobs that would utilize my unique blend of work skills and came upon coding for
           web development. As I apply my passion for creativity and curiosity for problem solving to new challenges, I hope to 
           continue exploring this big beautiful world. 
           </p>
       </section>
 </div>
 </Container>
 </div>

 );

};


export default Home;