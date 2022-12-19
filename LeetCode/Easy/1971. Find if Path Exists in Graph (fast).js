/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */


var validPath = function(n, edges, source, destination) {
  let graph = new Map();
  let visited = new Set();

  for(let [v, e] of edges){
    if(graph.has(v)) { graph.get(v).push(e); }
    else { graph.set(v, [e]); }
    if(graph.has(e)) { graph.get(e).push(v); }
    else { graph.set(e, [v]); }
  }

  function dfs(vertex) {
    visited.add(vertex);
    let numPath = graph.get(vertex);

    if(numPath && numPath.length > 0){
      for (let ind = 0; ind < numPath.length; ind++) {
        if(!visited.has(numPath[ind])) { dfs(numPath[ind]); }
      }
    }
  }

  dfs(source);
  return visited.has(destination);
};

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)) //true
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)) //false
//console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9)) //true