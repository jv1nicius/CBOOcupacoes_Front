import { useState, useCallback } from 'react'
import Home from './components/Home'

function App() {
    const [list, setList] = useState([]);

    const searchSolr = useCallback(async (query) => {
        if (!query || query.trim() === "") {
            setList([]);
            return;
        }

        const term = query.trim();
        const solrQuery = `*${term}* OR ${term}~1`;

        try {
            const response = await fetch(`http://localhost:5000/busca?q=${encodeURIComponent(solrQuery)}`);
            const data = await response.json();
            const results = data.resultados.map(doc => doc);
            setList(results);
        } catch (err) {
            console.error("Erro ao buscar no Solr:", err);
            setList([]);
        }
    }, []);

    return (
        <Home
            list={list}
            searchSolr={searchSolr}
        />
    );
}

export default App
