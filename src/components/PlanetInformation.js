import React, {useState} from 'react';

function PlanetInformation(props){
  const [information, setInformation] = useState(false);
  let planetInformation = false;
  if (props.planet === "sun"){
    planetInformation =
    <div>
      <h1>Sun</h1>
      <p>It feels like the Sun has been around forever, unchanging, but that’s not true. The Sun is actually slowly heating up. It’s becoming 10% more luminous every billion years. In fact, within just a billion years, the heat from the Sun will be so intense that liquid water won’t exist on the surface of the Earth. Life on Earth as we know it will be gone forever. Bacteria might still live on underground, but the surface of the planet will be scorched and uninhabited. It’ll take another 7 billion years for the Sun to reach its red giant phase before it actually expands to the point that it engulfs the Earth and destroys the entire planet.</p>
    </div>
  } else if(props.planet === "mercury"){
    planetInformation =
    <div>
      <h1>Mercury</h1>
      <p>Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth. It is the smallest planet in the Solar System.</p>
    </div>
  } else if(props.planet === "venus"){
    planetInformation =
    <div>
      <h1>Venus</h1>
      <p>Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones around the Solar System. Saturn has over 60, for example. And some moons are little more than captured asteroids, which may have been what happened with Mars’ two moons, for example. So what makes these planets different? No one is really sure why Venus doesn’t, but there is at least one stream of research that suggests it could have had one in the past.</p>
    </div>
  } else if(props.planet === "earth"){
    planetInformation =
    <div>
      <h1>Earth</h1>
      <p>We have a magnetic field surrounding our planet that protects us from the blasts of radiation and particles the Sun sends our way. Good thing, too, because such flare-ups could prove deadly to unprotected people; that’s why NASA keeps an eye on solar activity for astronauts on the International Space Station, for example. At any rate, when you see auroras shining in the sky, that’s what happens when the particles from the Sun flow along the magnetic field lines and interact with Earth’s upper atmosphere.</p>
    </div>
  } else if(props.planet === "mars"){
    planetInformation =
    <div>
      <h1>Mars</h1>
      <p>What a bunch of contrasts in the inner Solar System: practically atmosphere-less Mercury, a runaway hothouse greenhouse effect happening in Venus’ thick atmosphere, temperate conditions on much of Earth and then a thin atmosphere on Mars. But look at the planet and you can see gullies carved in the past from probable water. Water requires more atmosphere, so Mars had more in the past. Where did it go? Some scientists believe it’s because the Sun’s energy pushed the lighter molecules out of Mars’ atmosphere over millions of years, decreasing the thickness over time.</p>
    </div>
  } else if(props.planet === "jupiter"){
    planetInformation =
    <div>
      <h1>Jupiter</h1>
      <p>The most massive planet in the Solar System probably had a huge influence on its history. At 318 times the mass of Earth, you can imagine that any passing asteroid or comet going near Jupiter has a big chance of being caught or diverted. Maybe Jupiter was partly to blame for the great bombardment of small bodies that peppered our young Solar System early in its history, causing scars you can still see on the Moon today. And in 1994, astronomers worldwide were treated to a rare sight: a comet, Shoemaker-Levy 9, breaking up under Jupiter’s gravity and slamming into the atmosphere.</p>
    </div>
  } else if(props.planet === "saturn"){
    planetInformation =
    <div>
      <h1>Saturn</h1>
      <p>There’s a field of ice and rock debris circling Saturn that from afar, appear as rings. Early telescope observations of the planet in the 1600s caused some confusion: does that planet have ears, or moons, or what? With better resolution, however, it soon became clear that there was a chain of small bodies encircling the gas giant. It’s possible that a single moon tore apart under Saturn’s strong gravity and produced the rings. Or, maybe they’ve been around (pun intended) for the last few billion years, unable to coalesce into a larger body but resistant enough to gravity not to break up.</p>
    </div>
  } else if(props.planet === "uranus"){
    planetInformation =
    <div>
      <h1>Uranus</h1>
      <p>When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly featureless blue ball and some assumed there wasn’t much activity going on on Uranus. We’ve had a better look at the data since then that does show some interesting movement in the southern hemisphere. Additionally, the planet drew closer to the Sun in 2007, and in more recent years telescope probing has shown some storms going on. What is causing all this activity is difficult to say unless we were to send another probe that way. And unfortunately, there are no missions yet that are slated for sure to zoom out to that part of the Solar System.</p>
    </div>
  } else if(props.planet === "neptune"){
    planetInformation =
    <div>
      <h1>Neptune</h1>
      <p>While on Earth we are concerned about hurricanes, the strength of these storms is nowhere near what you would find on Neptune. At its highest altitudes, according to NASA, winds blow at more than 1,100 miles per hour (1,770 kilometers per hour). To put that in context, that’s faster than the speed of sound on Earth, at sea level. Why Neptune is so blustery is a mystery, especially considering the Sun’s heat is so little at its distance.</p>
    </div>
  } else if(props.planet === "pluto"){
    planetInformation =
    <div>
      <h1>Pluto</h1>
      <p>Pluto is the largest and second-most-massive (after Eris) known dwarf planet in the Solar System, and the ninth-largest and tenth-most-massive known object directly orbiting the Sun. It is the largest known trans-Neptunian object by volume but is less massive than Eris. Like other Kuiper belt objects, Pluto is primarily made of ice and rock and is relatively small—about one-sixth the mass of the Moon and one-third its volume.</p>
    </div>
  } else if(props.planet === "moon"){
    planetInformation =
    <div>
      <h1>Luna</h1>
      <p>Our moon is responsible for the changing of the tides, and Earth’s only natural satellite. It is thought to have formed about four and a half billion years ago, from debris knocked off of our planet from an asteroid. It rotates approximately once every 28 days.</p>
    </div>
  } else if(props.planet === "europa"){
    planetInformation =
    <div>
      <h1>Europa</h1>
      <p>One of the moons of Jupiter, Europa is the most-likely orbiting body in our solar system to hold life outside of Earth. It has an icy crust, which many theorize covers a warm ocean over an iron-nickel core. It rotates around Jupiter in approximately 85 hours.</p>
    </div>
  }

  return(
    <div className="planetInformation">
      <img onClick={() => setInformation(!information)} src={require('../assets/images/useIcon.png')}/>
      <div className={information? "info" : "hideMenu"}>
      {planetInformation}
      </div>
    </div>
  )
}

export default PlanetInformation
