import React, { Component } from "react";
import "../../pages.css";
import cheng from "../../../../IMG/cheng.png";
import MEM2 from "../../../../IMG/salazar.png";
import Gelli from "../../../../IMG/gelli.png";
import Beth from "../../../../IMG/beth.png";
import Vina from "../../../../IMG/Vina.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="testimonial-wapper">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={60000}
        >
          <div>
            <img src={Gelli} alt="gelli" />
            <div className="myCarousel">
              <h3>Angelica Rose G. Turingan-Jo</h3>
              <h4>Founder&#38;Chairwoman Project</h4>
              <p>
                I started It's A Small World Project as a way of honoring my
                father and grandfather's legacy of uplifting those who are
                underserved. As I came to learn more about Montessori pedagogy
                through work and studies, I became more and more convinced that
                this was the way I could and wanted to change the world - to
                give every disadvantaged child the best possible foundation in
                early childhood in order that he/she may grow into his/her
                fullest potential and become the steward of the Earth as God
                intended man to be. To me, this work will be my greatest
                manifestation of faith, gratitude and love.
              </p>
            </div>
          </div>

          <div>
            <img src={cheng} alt="cheng" />
            <div className="myCarousel">
              <h3>Cheryl Moana Marie Aquino</h3>
              <h4>Liaisons</h4>
              <p>
                I've always dreamt of a WORLD that CHILDREN can FEARLESSLY
                CONQUER. Through proper rearing, which IASWP advocates, they can
                face the world confidently and turn their dreams into reality.
                IASWP is an avenue where I can personally and directly take part
                in making my dream world.
              </p>
            </div>
          </div>

          <div>
            <img src={MEM2} alt="MEM2" />
            <div className="myCarousel">
              <h3>Christine Ruth Salazar</h3>
              <h4>Research &#38; Project Management</h4>
              <p>
                I believe that education is that crucial element that enables
                every individual to reach their full potential. To allow every
                child to reach their full potential, we need a child-centered
                model of education that fosters individual's independence and
                self-growth, and that's what Montessori education is all about.
                I am extremely pleased with the advocacy of It's A Small World
                Project as it advocates the accessibility of Montessori
                education to marginalized and disenfranchised communities. I
                hope to contribute to improving the lives of these communities
                by supporting the endeavors of It's A Small World Project
              </p>
            </div>
          </div>
          <div>
            <img src={Beth} alt="Beth" />
            <div className="myCarousel">
              <h3>Maria Beth Saida Manlapaz</h3>
              <h4>Project Planning &#38; Implementation</h4>
              <p>
                When I was in high school, I had a chance to participate in one
                of our school organization’s activity where we visited a home
                for special children. Since then, I felt and unexplainable and
                deep feeling of concern for children and I envision of having or
                being part of a special facility for them… Several years passed,
                my priorities shifted and my childhood dram took a back seat on
                the list of my priorities - but the feeling of concern for
                children remains. The drive and passion that I felt when I was
                young once again rekindled when one of my best friends since
                college, Gelli asked me to be part of “it’s A Small World
                Project (IASWP)”. Thus, I instantly and enthusiastically agreed
                to be part of the project. The road to success of this project
                will definitely not be a walk in the park , but by having
                dedicated leader and team working in unison, this project will
                surely serve its purpose of establish community-based and free
                Montessori Education available to all children.
              </p>
            </div>
          </div>
          <div>
            <img src={Vina} alt="Vina" />
            <div className="myCarousel">
              <h3>Vina Sision</h3>
              <h4>Marketing</h4>
              <p></p>
            </div>
          </div>
          {/* <div className="member-wrapper">
          <div className="member-area-1">
            <img src={Gelli} alt="cheng" width="185px" height="200px" />
            <p className="member1-text">
              "I started It's A Small World Project as a way of honoring my
              father and grandfather's legacy of uplifting those who are
              underserved. As I came to learn more about Montessori pedagogy
              through work and studies, I became more and more convinced that
              this was the way I could and wanted to change the world - to give
              every disadvantaged child the best possible foundation in early
              childhood in order that he/she may grow into his/her fullest
              potential and become the steward of the Earth as God intended man
              to be. To me, this work will be my greatest manifestation of
              faith, gratitude and love. "
            </p>
            <p className="member1-text-Name">
              {" "}
              -Angelica Rose G. Turingan-Jo <br /> Founder&#38;Chairwoman
              Project
            </p>
          </div>

          <div className="member-area-2">
            <img src={MEM2} alt="MEM2" width="195px" height="200px" />
            <p className="member2-text ">
              "I've always dreamt of a WORLD that CHILDREN can FEARLESSLY
              CONQUER. Through proper rearing, which IASWP advocates, they can
              face the world confidently and turn their dreams into reality.
              IASWP is an avenue where I can personally and directly take part
              in making my dream world."
            </p>
            <p className="member2-text-Name">
              {" "}
              -Cheryl Moana Marie Aquino <br /> Liaisons
            </p>
          </div>

          <div className="member-area-3">
            <img src={MEM2} alt="MEM2" width="195px" height="200px" />
            <p className="member3-text">
              "I believe that education is that crucial element that enables
              every individual to reach their full potential. To allow every
              child to reach their full potential, we need a child-centered
              model of education that fosters individual's independence and
              self-growth, and that's what Montessori education is all about. I
              am extremely pleased with the advocacy of It's A Small World
              Project as it advocates the accessibility of Montessori education
              to marginalized and disenfranchised communities. I hope to
              contribute to improving the lives of these communities by
              supporting the endeavors of It's A Small World Project"
            </p>
            <p className="member3-text-Name">
              {" "}
              -Christine Ruth Salazar <br /> Research &#38; Project Management
            </p>
          </div>

          <div className="member-area-4">
            <img src={MEM2} alt="cheng" width="195px" height="200px" />
            <p className="member2-text">
              "I believe that education is that crucial element that enables every
            individual to reach their full potential. To allow every child to
            reach their full potential, we need a child-centered model of
            education that fosters individual's independence and self-growth,
            and that's what Montessori education is all about. I am extremely
            pleased with the advocacy of It's A Small World Project as it
            advocates the accessibility of Montessori education to marginalized
            and disenfranchised communities. I hope to contribute to improving
            the lives of these communities by supporting the endeavors of It's A
            Small World Project"
            </p>
            <p className="member2-text-Name">
              {" "}
              -Christine Ruth Salazar <br /> Research &#38; Project Management
            </p>
          </div>
        </div> */}
        </Carousel>
      </div>
    );
  }
}

export default Member;
