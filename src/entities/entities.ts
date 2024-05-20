export class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(other: Position): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

export abstract class BaseEntity {
  id: string;
  pos: Position;

  constructor(props: BaseEntity) {
    this.id = props.id;
    this.pos = props.pos;
  }
}

export class Collector extends BaseEntity {
  collection: Creature[];

  constructor(data: BaseEntity) {
    super(data);

    this.collection = [];
  }

  catchCreature(creature: Creature): boolean {
    if (this.pos.distanceTo(creature.pos) <= creature.minCollectionRange) {
      this.collection.push(creature);
      return true;
    }

    return false;
  }

  getNearbyCreatures(creatures: Creature[], range: number): Creature[] {
    return creatures.filter(
      (creature) => this.pos.distanceTo(creature.pos) <= range
    );
  }

  catchRandomCreature(creatures: Creature[], range: number): void {
    const nearbyCreatures = this.getNearbyCreatures(creatures, range);
    if (nearbyCreatures.length > 0) {
      const randomIndex = Math.floor(Math.random() * nearbyCreatures.length);
      const creature = nearbyCreatures[randomIndex];
      if (creature.isFree()) {
        this.catchCreature(creature);
        console.log(`${this.id} caught a ${creature.id}`);
      } else {
        console.log(`${creature.id} was already caught`);
      }
    }
  }
}

export abstract class Creature extends BaseEntity {
  private isCatch = false;
  abstract minCollectionRange: number;

  constructor(data: BaseEntity) {
    super(data);
  }

  catch(): boolean {
    if (this.isCatch) {
      return false;
    }

    this.isCatch = true;
    return true;
  }

  isFree(): boolean {
    return !this.isCatch;
  }
}

export abstract class Flyer extends Creature {
  minCollectionRange = 10;

  constructor(data: BaseEntity) {
    super(data);
  }
}

export class Bird extends Flyer {
  constructor(data: BaseEntity) {
    super(data);
  }
}

export class WorldMap {
  private collectors: Collector[] = [];
  private creatures: Creature[] = [];

  addCollector(collector: Collector): void {
    this.collectors.push(collector);
  }

  addCreature(creature: Creature): void {
    this.creatures.push(creature);
  }

  getAllCreatures(): Creature[] {
    return this.creatures;
  }
}
