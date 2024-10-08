/*
File name: service.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import '../index.css'
import '../service.css'

export default function Service() {
  return (
    <section className="service-wrapper">
      <h2>Services Offered</h2>
      <ul>
        <li>
          <img src="/assets/c-sharp.png" alt="csharp icon"></img>
          <h3>C# Application Development</h3>
          {/*<a href="https://www.flaticon.com/free-icons/database-management" title="database management icons">Database management icons created by Design Circle - Flaticon</a> */}
          <p>Proficient in building both <span className="bold">console</span> and <span className="bold">GUI applications</span> using <span className="bold">C#</span> and <span className="bold">Visual Studio</span>. Whether you need a simple console application or a more complex user interface, I can help bring your software ideas to life.</p>
        </li>
        <li>
        <img src="/assets/java-script.png" alt="javascript icon"></img>
          <h3>JavaScript & Web Development</h3>
          {/*<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by UIUX Mall - Flaticon</a> */}
          <p>Skilled in <span className="bold">JavaScript</span> and <span className="bold">front-end development</span>, applying <span className="bold">DOM manipulation</span>, <span className="bold">event handling</span>, and <span className="bold">responsive design</span> to create dynamic, interactive websites. I specialize in crafting <span className="bold">responsive</span>, <span className="bold">user-friendly</span> web experiences.</p>
        </li>
        <li>
        <img src="/assets/database-management.png" alt="database icon"></img>
          <h3>Database Management & Integration</h3>
          {/*<a href="https://www.flaticon.com/free-icons/database-management" title="database management icons">Database management icons created by Design Circle - Flaticon</a>*/}
          <p>Proficient in <span className="bold">SQL query design</span>, <span className="bold">database creation</span>, and <span className="bold">integrating databases</span> into software applications. I ensure efficient <span className="bold">data storage</span>, <span className="bold">retrieval</span>, and <span className="bold">manipulation</span> for both small and large-scale projects.</p>
        </li>
        <li>
        <img src="/assets/brain.png" alt="brain icon"></img>
          <h3>Analytical Problem Solving</h3>
          {/*<a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by Freepik - Flaticon</a>*/}
          <p>Strong <span className="bold">problem-solving skills</span> in <span className="bold">Discrete Mathematics</span>, including <span className="bold">logic</span>, <span className="bold">set theory</span>, and <span className="bold">Boolean algebra</span>. I apply these <span className="bold">analytical abilities</span> to optimize <span className="bold">software development processes</span> and solve complex problems.</p>
        </li>
        <li>
        <img src="/assets/linux.png" alt="linux icon"></img>
          <h3>Unix/Linux Environments</h3>
          {/*<a href="https://www.flaticon.com/free-icons/linux" title="linux icons">Linux icons created by Freepik - Flaticon</a> */}
          <p>Experienced in <span className="bold">scripting</span>, <span className="bold">file management</span>, and <span className="bold">basic system administration</span> in <span className="bold">Unix/Linux environments</span>. I can help <span className="bold">automate tasks</span>, <span className="bold">manage files</span>, and <span className="bold">maintain system stability</span> for server or desktop environments.</p>
        </li>
        <li>
        <img src="/assets/social.png" alt="git icon"></img>
          <h3>Version Control & Collaboration</h3>
          {/*<a href="https://www.flaticon.com/free-icons/git" title="git icons">Git icons created by pocike - Flaticon</a> */}
          <p>Proficient in <span className="bold">Git</span> for <span className="bold">version control</span> and <span className="bold">collaborative software development</span>. I ensure <span className="bold">clean</span>, <span className="bold">organized codebases</span> and <span className="bold">seamless collaboration</span> for development teams.</p>
        </li>
      </ul>
    </section>
  );
}
