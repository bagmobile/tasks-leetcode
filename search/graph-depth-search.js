const graph = {}

graph.a = ['b', 'c'];
graph.b = ['f', 'g'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g', 'a'];


const depthSearch = (g, a, b) => {
    let l = 0;
    const search = getDFS(g);
    search(a, (v) => {
        l++;
        if (v === b) {
            console.log('Get path from ' + a + ' to ' + b + ' in ' + l + ' steps');
            return true;
        }
    });
}

depthSearch(graph, 'a', 'g');

function getDFS(g) {
    const visited = {}
    const stack = [];

    return dfs = (a, callback) => {

        callback(a);
        visited[a] = true;
        if (g[a]) {
            stack.push(...g[a]);
        }

        while (stack.length) {
            const v = stack.pop();
            if (!visited[v]) {
                dfs(v, callback)
            }
        }
    }
}
