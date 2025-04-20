
const apiKey = 
async function fetchDataFromAPI() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'; 

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',  
            headers: {
                'x-api-key': apiKey,  
                'Content-Type': 'application/json'   
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao obter dados');
        }

        const data = await response.json();  

        
        if (data && data[0] && data[0].url) {
            const imageUrl = data[0].url;
          
            document.getElementById('cat-image').src = imageUrl;
        } else {
            console.error("Imagem de gato não encontrada");
        }
    } catch (error) {
        console.error("Erro ao buscar imagem de gato:", error);
        document.getElementById('response-output').textContent = `Erro: ${error.message}`;
    }
}


document.getElementById('fetch-data-button').addEventListener('click', fetchDataFromAPI);


window.onload = fetchDataFromAPI;
