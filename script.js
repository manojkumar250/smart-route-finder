import {bruteForce} from './algorithms/brute-force.js';
import {dijkstra} from './algorithms/dijkstra.js';
import {bellmanFord} from './algorithms/bellman-ford.js';
import {aStar} from './algorithms/astar.js';
import {nodes,edges,getNeighbors} from './algorithms/graph.js';
const $=s=>document.querySelector(s);
const info={
 brute:{title:'Brute Force',desc:'Enumerates every simple path and selects the one with the lowest total distance.',time:'Exponential',space:'O(V)'},
 dijkstra:{title:"Dijkstra's Algorithm",desc:'Repeatedly visits the closest unvisited node and relaxes its outgoing edges. Requires non-negative edge weights.',time:'O(V² + E) in this array-based version',space:'O(V + E)'},
 bellman:{title:'Bellman-Ford',desc:'Relaxes all edges up to V−1 times. Supports negative edges and detects reachable negative cycles.',time:'O(V × E)',space:'O(V)'},
 astar:{title:'A* Search',desc:'Uses f(n) = g(n) + h(n). This demo uses h(n) = 0, a safe heuristic that makes A* behave like Dijkstra.',time:'Depends on heuristic and graph',space:'O(V + E)'}
};
const runners={brute:bruteForce,dijkstra,bellman:bellmanFord,astar:aStar};let results={},active='brute';
for(const id of ['start-node','end-node'])$( '#'+id).innerHTML=nodes.map(n=>`<option>${n}</option>`).join('');
$('#start-node').value='A';$('#end-node').value='E';
const positions={A:[90,160],B:[270,65],C:[270,255],D:[485,90],E:[630,190]};
function draw(path=[]){const chosen=new Set(path.slice(1).map((n,i)=>[path[i],n].sort().join('-'))),ns=new Set(path);let out='';
 for(const e of edges){let [x,y]=positions[e.from],[u,v]=positions[e.to],key=[e.from,e.to].sort().join('-');out+=`<line class="edge ${chosen.has(key)?'route':''}" x1="${x}" y1="${y}" x2="${u}" y2="${v}"/><text class="edge-label" x="${(x+u)/2}" y="${(y+v)/2-9}">${e.weight} km</text>`}
 for(const n of nodes){let [x,y]=positions[n];out+=`<circle class="node ${ns.has(n)?'route':''}" cx="${x}" cy="${y}" r="23"/><text class="node-label" x="${x}" y="${y}">${n}</text>`}$('#graph').innerHTML=out;}
function show(key){active=key;const d=info[key],r=results[key];$('#algorithm-title').textContent=d.title;$('#algorithm-description').textContent=d.desc;$('#time-complexity').textContent=d.time;$('#space-complexity').textContent=d.space;
 document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.algorithm===key));
 $('#algorithm-result').innerHTML=!r?'Choose two locations and click Find routes.':r.error?r.error:`<b>Route:</b> <span class="route-text">${r.path.join(' → ')}</span><br><b>Total distance:</b> ${r.distance} km<br><b>Operations:</b> ${r.operations}`;
 if(r&&!r.error)draw(r.path);}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>show(b.dataset.algorithm)));
$('#find-route').addEventListener('click',()=>{const s=$('#start-node').value,t=$('#end-node').value;if(s===t){$('#message').textContent='Choose different start and destination locations.';return;}$('#message').textContent='';const graph=getNeighbors();results={};
 for(const [key,fn] of Object.entries(runners)){try{results[key]=fn(graph,s,t)}catch(e){results[key]={error:e.message,operations:0}}}
 $('#comparison-body').innerHTML=Object.entries(results).map(([k,r])=>`<tr><td>${info[k].title}</td><td>${r.error?'—':r.path.join(' → ')}</td><td>${r.error?'—':r.distance+' km'}</td><td>${r.operations??'—'}</td></tr>`).join('');show(active);});
draw();show('brute');