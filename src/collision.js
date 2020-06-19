function Intersect(obj1, obj2) {
  const a = {
    minX: obj1.position.x - obj1.scale.x / 2,
    maxX: obj1.position.x + obj1.scale.x / 2,
    minY: obj1.position.y - obj1.scale.y / 2,
    maxY: obj1.position.y + obj1.scale.y / 2,
    minZ: obj1.position.z - obj1.scale.z / 2,
    maxZ: obj1.position.z + obj1.scale.z / 2
  }

  const b = {
    minX: obj2.position.x - obj2.scale.x / 2,
    maxX: obj2.position.x + obj2.scale.x / 2,
    minY: obj2.position.y - obj2.scale.y / 2,
    maxY: obj2.position.y + obj2.scale.y / 2,
    minZ: obj2.position.z - obj2.scale.z / 2,
    maxZ: obj2.position.z + obj2.scale.z / 2
  }
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY &&
    a.minZ <= b.maxZ &&
    a.maxZ >= b.minZ
  )
}

export default function DetectCollisions(Car, Obstacles) {
  let collided = false

  for (let i = 0; i < Obstacles.length; i++) {
    collided = Intersect(Car, Obstacles[i])

    if (collided) {
      console.log('******************* GAME OVER ********************')
      break
    }
  }

  return collided
}
