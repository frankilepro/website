import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './App.css';
import Button from '@material-ui/core/Button';
import { Element, scroller } from 'react-scroll';
import LinearProgress from '@material-ui/core/LinearProgress';
import { observer } from "mobx-react";
import { observable } from "mobx";
import Awards from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

@observer
class App extends Component {
  @observable currentHeight = 0;
  rowsContent = [
    { name: "Experience", component: <Experience /> },
    { name: "Education", component: <Education /> },
    { name: "Projects", component: <Projects /> },
    { name: "Skills", component: <Skills /> },
    { name: "Awards", component: <Awards /> }
  ];

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const midPoint = document.documentElement.scrollTop + window.outerHeight / 2;
      const percentage = midPoint / document.documentElement.scrollHeight;
      this.currentHeight = Math.floor(percentage * (this.rowsContent.length + 1)) / this.rowsContent.length * 100;
    });
  }

  scrollTo(val) {
    scroller.scrollTo(val, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -69,
    })
  }

  render() {
    const rows = this.rowsContent.map((value) =>
      <Element key={value.name} name={value.name} className={styles.rowContent}>
        {value.component}
      </Element>
    );
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" className={styles.mainButton}>
              Myself
            </Typography>
            {this.rowsContent.map((value) =>
              <Button key={value.name} to={{ value: value.name }}
                onClick={() => this.scrollTo(value.name)}>
                {value.name}
              </Button>
            )}
          </Toolbar>
          <LinearProgress color="secondary" variant="determinate" value={this.currentHeight} />
        </AppBar>
        <div className={styles.appLayout}>
          {rows}
          {/* <Element name="experience" >
            <Experience />
          </Element>
          <Element name="experience" >
            <Experience />
          </Element> */}
        </div>
      </div>
    );
  }
}

export default App;
