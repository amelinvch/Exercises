/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
  const keysNum = new Set().add(0);
  keysNum.forEach(keys => {
    rooms[keys].forEach(num => {
      keysNum.add(num)
    })
  })
  return keysNum.size === rooms.length
};

console.log(canVisitAllRooms( [[1],[2],[3],[]] )); //true
console.log(canVisitAllRooms( [[1,3],[3,0,1],[2],[0]] )); //false