// Enumerates all simple paths. Exponential; use only for small graphs.
export function bruteForce(g,start,end){let best=Infinity,pathBest=[],operations=0;
 function visit(n,path,d){operations++;if(d>=best)return;if(n===end){best=d;pathBest=[...path];return;}
 for(const e of g[n])if(!path.includes(e.node))visit(e.node,[...path,e.node],d+e.weight);}
 visit(start,[start],0);return pathBest.length?{path:pathBest,distance:best,operations}:{error:'No route exists.',operations};}