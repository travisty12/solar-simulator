import React from 'react';
import {updateCamera} from './Model/ThreeJS/SceneManager';
class Header extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      stageVisibleOnPage: false,
    }
    this.menuOpen = this.menuOpen.bind(this);
  }

  menuOpen() {
    this.setState(prevState => ({
      stageVisibleOnPage: !prevState.stageVisibleOnPage
    }))
  }
  update(arg){
    let planet = arg;
    updateCamera(planet)
    this.props.newPlanet({planet});
  }
  render () {

    return(
      <div className={this.state.stageVisibleOnPage? "styledBkrnd" : "styledBkrndHide"}>
        <div className="menu">
          <div onClick={this.menuOpen} className="menuBtn">
            <div className={this.state.stageVisibleOnPage? "xOne" : "hamOne"}></div>
            <div className={this.state.stageVisibleOnPage? "hideBeef" : "hamBeef"}></div>
            <div className={this.state.stageVisibleOnPage? "xTwo" : "hamTwo"}></div>

          </div>
          <div className={this.state.stageVisibleOnPage? "show" : "hide"}>
            <h1 onClick={() => this.update('sun')} value="sun">Sun</h1>
            <h1 onClick={() => this.update('mercury')}>Mercury</h1>
            <h1 onClick={() => this.update('venus')}>Venus</h1>
            <h1 onClick={() => this.update('earth')}>Earth</h1>
            <h1 onClick={() => this.update('mars')}>Mars</h1>
            <h1 onClick={() => this.update('jupiter')}>Jupiter</h1>
            <h1 onClick={() => this.update('saturn')}>Saturn</h1>
            <h1 onClick={() => this.update('uranus')}>Uranus</h1>
            <h1 onClick={() => this.update('neptune')}>Neptune</h1>
            <h1 onClick={() => this.update('pluto')}>Pluto</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

// <h1>Earth and the International Space Station</h1>
// <p>We have a magnetic field surrounding our planet that protects us from the blasts of radiation and particles the Sun sends our way. Good thing, too, because such flare-ups could prove deadly to unprotected people; that’s why NASA keeps an eye on solar activity for astronauts on the International Space Station, for example. At any rate, when you see auroras shining in the sky, that’s what happens when the particles from the Sun flow along the magnetic field lines and interact with Earth’s upper atmosphere.</p>
//
// <h1>Sun</h1>
// <p>It feels like the Sun has been around forever, unchanging, but that’s not true. The Sun is actually slowly heating up. It’s becoming 10% more luminous every billion years. In fact, within just a billion years, the heat from the Sun will be so intense that liquid water won’t exist on the surface of the Earth. Life on Earth as we know it will be gone forever. Bacteria might still live on underground, but the surface of the planet will be scorched and uninhabited. It’ll take another 7 billion years for the Sun to reach its red giant phase before it actually expands to the point that it engulfs the Earth and destroys the entire planet.</p>
//
// <h1>Mars</h1>
// <p>What a bunch of contrasts in the inner Solar System: practically atmosphere-less Mercury, a runaway hothouse greenhouse effect happening in Venus’ thick atmosphere, temperate conditions on much of Earth and then a thin atmosphere on Mars. But look at the planet and you can see gullies carved in the past from probable water. Water requires more atmosphere, so Mars had more in the past. Where did it go? Some scientists believe it’s because the Sun’s energy pushed the lighter molecules out of Mars’ atmosphere over millions of years, decreasing the thickness over time.</p>
//
// <h1>Neptune</h1>
// <p>While on Earth we are concerned about hurricanes, the strength of these storms is nowhere near what you would find on Neptune. At its highest altitudes, according to NASA, winds blow at more than 1,100 miles per hour (1,770 kilometers per hour). To put that in context, that’s faster than the speed of sound on Earth, at sea level. Why Neptune is so blustery is a mystery, especially considering the Sun’s heat is so little at its distance.</p>
//
// <h1>Jupiter</h1>
// <p>The most massive planet in the Solar System probably had a huge influence on its history. At 318 times the mass of Earth, you can imagine that any passing asteroid or comet going near Jupiter has a big chance of being caught or diverted. Maybe Jupiter was partly to blame for the great bombardment of small bodies that peppered our young Solar System early in its history, causing scars you can still see on the Moon today. And in 1994, astronomers worldwide were treated to a rare sight: a comet, Shoemaker-Levy 9, breaking up under Jupiter’s gravity and slamming into the atmosphere.</p>
//
// <h1>Saturn</h1>
// <p>There’s a field of ice and rock debris circling Saturn that from afar, appear as rings. Early telescope observations of the planet in the 1600s caused some confusion: does that planet have ears, or moons, or what? With better resolution, however, it soon became clear that there was a chain of small bodies encircling the gas giant. It’s possible that a single moon tore apart under Saturn’s strong gravity and produced the rings. Or, maybe they’ve been around (pun intended) for the last few billion years, unable to coalesce into a larger body but resistant enough to gravity not to break up.</p>
//
// <h1>Uranus</h1>
// <p>When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly featureless blue ball and some assumed there wasn’t much activity going on on Uranus. We’ve had a better look at the data since then that does show some interesting movement in the southern hemisphere. Additionally, the planet drew closer to the Sun in 2007, and in more recent years telescope probing has shown some storms going on. What is causing all this activity is difficult to say unless we were to send another probe that way. And unfortunately, there are no missions yet that are slated for sure to zoom out to that part of the Solar System.</p>
//
// <h1>Venus</h1>
// <p>Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones around the Solar System. Saturn has over 60, for example. And some moons are little more than captured asteroids, which may have been what happened with Mars’ two moons, for example. So what makes these planets different? No one is really sure why Venus doesn’t, but there is at least one stream of research that suggests it could have had one in the past.</p>
//
// <h1>Mercury</h1>
// <p>The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.</p>
