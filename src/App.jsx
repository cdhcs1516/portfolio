import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import './App.css';

import linkedAccounts from './data/accounts.json';
import projects from './data/projects.json';
import skills from './data/skills.json';
import socials from './data/socials.json';

const App = () => {
  const { email, ...socialLinks } = socials;
  return (
    <div id="app" className="App">
        <Header
          name="Don Chen"
          navbars={['about', 'projects', 'skills']}
        />
        <Body
          name="Don Chen"
          jd="Software Engineer"
          linkedAccounts={linkedAccounts}
        />
        <About
          selfIntroduction="sjfisjfijasijfiasjfijsaijfijasifjiasjifjsaijfasj"
        />
        <Projects 
          projects={projects}
        />
        <Skills skills={skills}/>
        <Footer email={email} socialLinks={socialLinks}/>
    </div>
  );
}

export default App;