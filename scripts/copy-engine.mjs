import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('node_modules/stockfish');
const dest=path.resolve('public/engine');fs.mkdirSync(dest,{recursive:true});
for(const file of ['stockfish-19-lite-single.js','stockfish-19-lite-single.wasm']){const options=[path.join(root,'bin',file),path.join(root,'src',file)];const source=options.find(x=>fs.existsSync(x));if(!source)throw Error('Motor no encontrado: '+file);fs.copyFileSync(source,path.join(dest,file));}