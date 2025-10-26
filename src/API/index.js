export const callAPI = async (tipo) => {
    const response = await fetch(
        "https://json-server-produtos-96fx.onrender.com/"+tipo
    );

    const data = await response.json();

    return data;
}

export const sendToAPI = async (vendaRealizada) => {
    try {
        const vendaResponse = await fetch(
        'https://json-server-produtos-96fx.onrender.com/vendas',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(vendaRealizada),
            }
        );
    } catch (err) {
        console.error(err);
        return null;
    }
}


