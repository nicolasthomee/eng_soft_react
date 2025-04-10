import React, { useState, useEffect } from 'react';

const Clima = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Guarapuava,BR&appid=a672867a6387d10f25ad68fd154e3148&units=metric`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setWeather(data);
            } else {
                setWeather(null);
                alert('Cidade não encontrada ou chave inválida');
            }
        } catch (error) {
            console.error('Erro ao buscar clima:', error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div className="p-6 font-sans flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6" >Clima em Guarapuava - PR</h1>
            {weather ? (
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{weather.name}</h2>
                    <p className="text-gray-600 mb-2">
                        <span className="font-medium">Temperatura:</span> {weather.main.temp}°C
                    </p>
                    <p className="text-gray-600 mb-2">
                        <span className="font-medium">Condição:</span> {weather.weather[0].description}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <span className="font-medium">Umidade:</span> {weather.main.humidity}%
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Vento:</span> {weather.wind.speed} m/s
                    </p>
                </div>
            ) : (
                <p className="text-gray-600">Carregando dados do clima...</p>
            )}
        </div>
    );
};

export default Clima;