import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderProject = (project, index) => {
    const { name, description, stacks, projectLink, hostLink, coverImageName } = project;

    return (
      <div key={`project-${index}`} className="project">
        <div className="content">
          {coverImageName && (
            <img src={require(`../data/assets/${coverImageName}`)} alt="Project" />
          )}
          <h2 className="name">{name}</h2>
          {
              description.length > 130 
              ? <p className='description-min'>{description}</p>
              :  <p className='description'>{description}</p>                                            
          }
          <div>
            <a
              className="project-button"
              target="_blank"
              href={projectLink}
              rel="noreferrer"
            >
              GitHub
            </a>
            {hostLink && (
              <a
                className="project-button"
                target="_blank"
                href={hostLink}
                rel="noreferrer"
              >
                Link
              </a>
            )}
          </div>
          <div className="project-stacks">
            {stacks.map((stack, index) => {
              return (
                <div
                  key={`project-${name}-stack-${stack}`}
                  className="stack"
                >
                  {stack.toUpperCase()}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="projects">
      <div className="projects__heading">
        <h2>WORKS</h2>
      </div>
      <div className="projects__container">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return renderProject(project, index);
          })}
        </Slider>
      </div>
    </div>
  )
};

export default Projects;