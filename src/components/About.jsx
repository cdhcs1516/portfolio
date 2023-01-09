import Engineer from '../data/assets/engineer.png';

const About = ({ selfIntroduction }) => {
  return (
    <div id="about" className="about">
      <h1 className="about__heading">About Me</h1>
      <div className="about__info">
        <div className="about__info-self-intro" dangerouslySetInnerHTML={{__html: selfIntroduction}} />
        <div className="about__image">
        <div className="about__image-wrapper">
          <img alt="engineer" src={Engineer} />
        </div>
      </div>
      </div>
      
    </div>
  )
};

export default About;