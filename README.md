# Chess Coach iPhone

Aplicación web de ajedrez con chess.js y Stockfish 19 Lite Single-Threaded. Para publicar, en Settings > Pages selecciona GitHub Actions. El workflow construye la app con Node 22 y Vite.

La app permite registrar movimientos, orientar el tablero, deshacer, promover peones y analizar con Stockfish en Safari. El motor se descarga durante npm install. La app requiere el soporte WebAssembly del navegador y HTTPS para su publicación. No se garantiza ganar partidas. Stockfish es software GPLv3.