import React from 'react';
import ReactDOM from 'react-dom';

//components
import Clock from './clock';
import Tabs from './tabs';
import AutoComplete from './auto_complete';

const Panes = [
  {title: 'Mugen', content: ""},
  {title: 'Jin', content: ""},
  {title: 'Fuu', content: ""}
];

const Names = [
  'Bayonetta',
  'Bowser',
  'Bowser Jr.',
  'Captain Falcon',
  'Charizard',
  'Cloud',
  'Corrin',
  'Dark Pit',
  'Diddy Kong',
  'Donkey Kong',
  'Dr. Mario',
  'Duck Hunt',
  'Falco',
  'Fox',
  'Ganondorf',
  'Greninja',
  'Ice Climbers',
  'Ike',
  'Ivysaur',
  'Jigglypuff',
  'King Dedede',
  'Kirby',
  'Link',
  'Little Mac',
  'Lucario',
  'Lucas',
  'Lucina',
  'Luigi',
  'Mario',
  'Marth',
  'Mega Man',
  'Meta Knight',
  'Mewtwo',
  'Mii Brawler',
  'Mii Gunner',
  'Mii Swordfighter',
  'Mr. Game & Watch',
  'Ness',
  'Olimar',
  'Pac-Man',
  'Palutena',
  'Peach',
  'Pichu',
  'Pikachu',
  'Pit',
  'Pokémon Trainer',
  'R.O.B.',
  'Robin',
  'Rosalina & Luma',
  'Roy',
  'Ryu',
  'Samus',
  'Sheik',
  'Shulk',
  'Snake',
  'Sonic',
  'Squirtle',
  'Toon Link',
  'Villager',
  'Wario',
  'Wii Fit Trainer',
  'Wolf',
  'Yoshi',
  'Young',
  'Zelda',
  'Zero Suit Samus'
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <div className='interactive'>
          <Tabs panes={Panes} />
          <AutoComplete names={Names} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
