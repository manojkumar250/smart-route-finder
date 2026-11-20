// Undirected sample network. All weights are in kilometres.
export const nodes=['A','B','C','D','E'];
export const edges=[{from:'A',to:'B',weight:4},{from:'A',to:'C',weight:2},{from:'B',to:'D',weight:5},{from:'C',to:'D',weight:8},{from:'C',to:'E',weight:10},{from:'D',to:'E',weight:2}];
export function getNeighbors(){const g=Object.fromEntries(nodes.map(n=>[n,[]]));for(const e of edges){g[e.from].push({node:e.to,weight:e.weight});g[e.to].push({node:e.from,weight:e.weight});}return g;}