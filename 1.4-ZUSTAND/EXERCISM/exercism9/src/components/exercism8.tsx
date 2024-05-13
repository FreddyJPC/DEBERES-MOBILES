export class DnDCharacter {
    strength: number = DnDCharacter.generateAbilityScore();
    dexterity: number = DnDCharacter.generateAbilityScore();
    constitution: number = DnDCharacter.generateAbilityScore();
    wisdom: number = DnDCharacter.generateAbilityScore();
    intelligence: number = DnDCharacter.generateAbilityScore();
    charisma: number = DnDCharacter.generateAbilityScore();
    hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

    public static generateAbilityScore(): number {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        return rolls.sort().slice(0, 3).reduce((current, sum) => current + sum, 0);
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}
