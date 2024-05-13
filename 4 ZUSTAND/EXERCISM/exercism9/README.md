# Generador de Personajes D&D

Este proyecto incluye una clase `DnDCharacter` que genera un personaje para el juego de rol Dungeons & Dragons (D&D). El personaje generado tiene seis atributos principales (fuerza, destreza, constitución, sabiduría, inteligencia y carisma) y puntos de golpe (hitpoints) basados en la constitución del personaje.

## Clase `DnDCharacter`

La clase `DnDCharacter` se encuentra en el archivo `DnDCharacter.ts`. Esta clase genera un personaje de D&D con los siguientes atributos:

- `strength`: Fuerza del personaje.
- `dexterity`: Destreza del personaje.
- `constitution`: Constitución del personaje.
- `wisdom`: Sabiduría del personaje.
- `intelligence`: Inteligencia del personaje.
- `charisma`: Carisma del personaje.
- `hitpoints`: Puntos de golpe del personaje, basados en la constitución.

### Métodos

- `generateAbilityScore()`: Genera un valor de atributo aleatorio utilizando la regla de D&D (se lanzan cuatro dados de seis caras y se suman los tres mayores).
- `getModifierFor(abilityValue: number)`: Calcula el modificador de atributo para un valor de atributo dado.

### Ejemplo de Uso

```typescript
import { DnDCharacter } from './DnDCharacter';

// Crear un nuevo personaje
const character = new DnDCharacter();

// Acceder a los atributos del personaje
console.log('Fuerza:', character.strength);
console.log('Destreza:', character.dexterity);
console.log('Constitución:', character.constitution);
console.log('Sabiduría:', character.wisdom);
console.log('Inteligencia:', character.intelligence);
console.log('Carisma:', character.charisma);
console.log('Puntos de Golpe:', character.hitpoints);
```

