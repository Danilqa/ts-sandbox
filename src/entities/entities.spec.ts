import { it, describe, expect } from 'vitest';
import { Bird, Collector, Position } from './entities';

describe('Entities', () => {
  it('should init with position', () => {
    const entity = new Bird({ id: '123', pos: new Position(5, 8) });

    expect(entity.pos.x).toEqual(5);
    expect(entity.pos.y).toEqual(8);
  });

  it('should get the distance between two object', () => {
    const entityA = new Bird({ id: '123', pos: new Position(0, 0) });
    const entityB = new Collector({ id: '11', pos: new Position(3, 4) });

    expect(entityA.pos.distanceTo(entityB.pos)).toEqual(5);
  });

  it('should capture a creature if it is accessible', () => {
    const collector = new Collector({ id: '11', pos: new Position(3, 4) });
    const entityA = new Bird({ id: '123', pos: new Position(0, 0) });
    expect(collector.catchCreature(entityA)).toBeTruthy();
  });

  it('should not capture a creature if it is not accessible', () => {
    const collector = new Collector({ id: '11', pos: new Position(3, 4) });
    const entityA = new Bird({ id: '123', pos: new Position(3000, 2000) });
    expect(collector.catchCreature(entityA)).toBeFalsy();
  });
});
