import { FaGithub, FaLinkedinIn, } from 'react-icons/fa';

import Avatar from '../assets/avatar.png';

const Body = ({ name, jd, linkedAccounts }) => {
  const { github, linkedIn } = linkedAccounts;

  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-profile__image" alt="avatar" src={Avatar} />
          <div className="body-profile__content">
            <div className="body-profile__name">
              {name}
            </div>
            <div className="body-profile__job-description">
              {jd}
            </div>
            <div className="body-profile__linked-accounts">
              <a key={`icon-link-github`} href={github} target="_blank" rel="noreferrer" className="icon-link">
                <i><FaGithub /></i>
              </a>
              <a key={`icon-link-linkedin`} href={linkedIn} target="_blank" rel="noreferrer" className="icon-link">
                <i><FaLinkedinIn /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Body;