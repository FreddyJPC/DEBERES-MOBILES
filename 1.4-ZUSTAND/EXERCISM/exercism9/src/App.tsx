import { DnDCharacter } from './components/exercism8';

const App = () => {
    const character = new DnDCharacter();

    return (
        <div>
            <h1>Dungeons & Dragons Character</h1>
            <p>Strength: {character.strength}</p>
            <p>Dexterity: {character.dexterity}</p>
            <p>Constitution: {character.constitution}</p>
            <p>Wisdom: {character.wisdom}</p>
            <p>Intelligence: {character.intelligence}</p>
            <p>Charisma: {character.charisma}</p>
            <p>Hitpoints: {character.hitpoints}</p>
        </div>
    );
};

export default App;
