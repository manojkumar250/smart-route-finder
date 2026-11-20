// h(n)=0 is admissible and consistent; this safe baseline behaves like Dijkstra.
export function aStar(g,start,end){const ns=Object.keys(g),cost={},prev={},open=new Set([start]),closed=new Set();ns.forEach(n=>cost[n]=Infinity);cost[start]=0;let operations=0;
 while(open.size){let cur=null,best=Infinity;for(const n of open)if(cost[n]<best){best=cost[n];cur=n;}if(cur===end)break;open.delete(cur);closed.add(cur);operations++;
 for(const e of g[cur]){if(closed.has(e.node))continue;const alt=cost[cur]+e.weight;if(alt<cost[e.node]){cost[e.node]=alt;prev[e.node]=cur;open.add(e.node);}}}
 if(cost[end]===Infinity)return{error:'No route exists.',operations};let path=[],n=end;while(n!==undefined){path.unshift(n);if(n===start)break;n=prev[n];}return{path,distance:cost[end],operations};}