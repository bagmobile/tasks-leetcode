const towns = {
    a: {x: 0, y: 0},
    b: {x: 0, y: 2},
    c: {x: 2, y: 2},
    d: {x: 0, y: -2},
    e: {x: 2, y: -2},
    f: {x: 2, y: -1},
    g: {x: 2, y: 1}
}
const towns1 = {
    a: {x: 0, y: 0},
    b: {x: 2, y: 0},
    c: {x: 0, y: 2},
    d: {x: 2, y: 2},

}
// 0 0
// 0 2
// 2 2
// 0 -2
// 2 -2
// 2 -1
// 2 1
//-----
// 0 0
// 1 0
// 0 1
// 1 1

const createGraph = (townsChords, a, b) => {
    const res = {};
    const towns = Object.keys(townsChords);

    for (let i = 0; i < towns.length; i++) {
        res[towns[i]] = [];
        //if (towns[i] === b) continue;
        for (let j = 0; j < towns.length; j++) {
            if (i !== j /*&& towns[j] !== a*/) {
                if (Math.abs(townsChords[towns[i]].x - townsChords[towns[j]].x)
                    + Math.abs(townsChords[towns[i]].y - townsChords[towns[j]].y) <= 2) {
                    res[towns[i]].push(towns[j])
                }
            }
        }
    }
    return res;
}

const bfs = (g, start, end) => {
    const visited = {};
    const dist = {}
    let q = [];

    if (start === end) return -1;

    q.push(start);

    while (q.length) {

        const cur = q.shift();

        for (let node of g[cur]) {

            if (!visited[node]) {

                dist[node] = (dist[cur] || 0) + 1;
                visited[node] = 1;
                q.push(node);
            }
        }
    }
    return dist[end] || -1;
}


function dfs(g, start, end, counter = 0, visited = {}) {

    if (start === end) return 0;

    visited[start] = 1;

    if (!g[start]) {
        g[start] = [];
    }

    for (let node of g[start]) {

        if (!visited[node]) {

            if (node !== end) {
                counter = dfs(g, node, end, counter, visited);
            } else {
                counter++;
            }
        }
    }
    return counter;
}

function bfs1(g, s, e) {
    let q = [];
    let count = 0;
    q.push(s);
    while (q.length) {
        const cur = q.shift();
        if (!g[cur]) {
            g[cur] = []
        }
        if (g[cur].includes(e)) {
            return count++;
        } else {
            q = [...q, ...g[cur]]
        }
    }
    return count;
}

const graph = createGraph(towns, 'a', 'c');
console.log(graph)
console.log(bfs(graph, 'a', 'c'))
console.log(dfs(graph, 'a', 'c'))

