import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ICONS = Object.freeze({
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
});

const Footer = ({ email, socialLinks }) => {
  return (
    <footer id='footer' className='footer'>
      <div className='footer-contact-info'>
        <h1 className='footer-heading'>Connect With Me</h1>
        <p className='footer-contact-access'>Email: {email}</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className='social-icons'>
          {Object.keys(socialLinks).map((name) => {
            return (
              <a key={`social-link-${name}`} href={socialLinks[name]}>
                <i>
                  {ICONS[name]}
                </i>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
