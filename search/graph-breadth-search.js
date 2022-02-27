const graph = {}

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// Ориентированный вариант
const breadSearch = (g, start, end) => {
  let q = [];
  q.push(start);

  while (q.length){
      const cur = q.shift();

      if (!g[cur]){
          g[cur] = [];
      }

      if (g[cur].includes(end)) {
          return true
      } else {
        q = [...q, ...g[cur]]
      }
  }
  return false
}

console.log(breadSearch(graph, 'a', 'g'))

function bfs2(gra, startVertex, callback) {
    let list = gra; // список смежности
    let queue = [startVertex]; // очередь вершин для перебора
    let visited = { [startVertex]: 1 }; // посещенные вершины

    function handleVertex(vertex) {
        // вызываем коллбэк для посещенной вершины
        callback(vertex);

        // получаем список смежных вершин
        let neighboursList = list[vertex];

        neighboursList.forEach(neighbour => {
            if (!visited[neighbour]) {
                console.log(neighbour);
                visited[neighbour] = 1;
                queue.push(neighbour);
            }
        });
    }

    // перебираем вершины из очереди, пока она не опустеет
    while(queue.length) {
        let activeVertex = queue.shift();
        handleVertex(activeVertex);
    }

    queue = Object.keys(gra);

    // Повторяем цикл для незатронутых вершин
    while(queue.length) {
        let activeVertex = queue.shift();
        if (!visited[activeVertex]) {
            visited[activeVertex] = 1;
            handleVertex(activeVertex);
        }
    }
}
