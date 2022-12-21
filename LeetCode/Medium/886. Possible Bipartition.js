/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
*/

var possibleBipartition = function(n, dislikes) {
  let graph = [];
  for (let ind = 0; ind < n; ind++) { graph.push([]); }

  for (let ind = 0; ind < dislikes.length; ind++) {
    const d = dislikes[ind];
    graph[d[0]-1].push(d[1]);
    graph[d[1]-1].push(d[0]);
  }

  let colored = {};
  const dfs = (node, color) => {
    if(colored[node] !== undefined) {
      return colored[node] === color;
    }

    colored[node] = color;
    const neis = graph[node-1];
    console.log(node, neis, color, colored);

    for (let ind = 0; ind < neis.length; ind++) {
      const nei = neis[ind];
      if(!dfs(nei, (color^1))){ return false; }
    }
    return true;
  }

  for (let j = 1; j <= n; j++) {
    if(colored[j] === undefined && !dfs(j, 0)) { return false; }
  }

  return true
};

console.log(possibleBipartition( 4, [[1,2],[1,3],[2,4]] )); //true
console.log(possibleBipartition( 3, [[1,2],[1,3],[2,3]] )); //false
//console.log(possibleBipartition( 5, [[1,2],[2,3],[3,4],[4,5],[1,5]] )); //false
