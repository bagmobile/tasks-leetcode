
const g = {
    a: [ 'b', 'd', 'f' ],
    b: [ 'c', 'f' ],
    c: [],
    d: [ 'e' ],
    e: [ 'd' ],
    f: [ 'b', 'g' ],
    g: [ 'c', 'f' ]
}

function bfs(graph, startVertex) {
    let q = [];
    const visited = {}

    visited[startVertex] = 1;
    q.push(startVertex)

    while(q.length){
        //printQueue(q);
        //int currentVertex = dequeue(q);
        const currentVertex = q.shift();
       // printf("Visited %d\n", currentVertex);
        console.log(currentVertex)
        //const temp = graph[currentVertex];

        for(let temp of graph[currentVertex])  {

            if(!visited[temp]){
                visited[temp] = 1;
                q.push(temp)
            }
        }
    }
}
bfs(g, 'a')
