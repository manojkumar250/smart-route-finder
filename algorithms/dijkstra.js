// Array-based Dijkstra implementation: O(V^2 + E), non-negative weights only.
export function dijkstra(g,start,end){const ns=Object.keys(g),dist={},prev={},done=new Set();let operations=0;ns.forEach(n=>dist[n]=Infinity);dist[start]=0;
 while(done.size<ns.length){let cur=null;for(const n of ns)if(!done.has(n)&&(cur===null||dist[n]<dist[cur]))cur=n;if(cur===null||dist[cur]===Infinity)break;done.add(cur);operations++;if(cur===end)break;
 for(const e of g[cur])if(!done.has(e.node)&&dist[cur]+e.weight<dist[e.node]){dist[e.node]=dist[cur]+e.weight;prev[e.node]=cur;}}
 return result(dist,prev,start,end,operations);}
function result(d,p,s,t,operations){if(d[t]===Infinity)return{error:'No route exists.',operations};let path=[],n=t;while(n!==undefined){path.unshift(n);if(n===s)break;n=p[n];}return{path,distance:d[t],operations};}