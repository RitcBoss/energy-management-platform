"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RealtimeGraph = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Grid Import",
                data: [],
                borderColor: "orange",
                borderWidth: 2,
                tension: 0.1,
                fill: false,
            },
            {
                label: "Solar Generation",
                data: [],
                borderColor: "green",
                borderWidth: 2,
                tension: 0.1,
                fill: false,
            },
            {
                label: "Building Consumption",
                data: [],
                borderColor: "black",
                borderWidth: 2,
                tension: 0.1,
                fill: false,
            },
            {
                label: "Outdoor Temperature",
                data: [],
                borderColor: "yellow",
                borderWidth: 2,
                tension: 0.1,
                borderDash: [5, 5],
                fill: false,
            },
            {
                label: "UV Index",
                data: [],
                borderColor: "blue",
                borderWidth: 2,
                tension: 0.1,
                borderDash: [10, 5],
                fill: false,
            },
        ],
    });

    const fetchMockData = async () => {
        try {
            const response = await axios.get(
                "https://673fe09dd0b59228b7ee0771.mockapi.io/powerConsumption"
            );

            const currentTime = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });

            const latestData = response.data[response.data.length - 1];
            const updatedData = {
                time: currentTime,
                grid_import: latestData.grid_import + Math.floor(Math.random() * 20 - 10),
                solar_generation:
                    latestData.solar_generation + Math.floor(Math.random() * 15 - 7),
                building_consumption:
                    latestData.building_consumption + Math.floor(Math.random() * 25 - 12),
                outdoor_temperature: Math.floor(Math.random() * 40 + 5),
                uv_index: Math.random() * 10,
            };

            setChartData((prevState) => ({
                labels: [...prevState.labels, updatedData.time].slice(-10),
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: [...prevState.datasets[0].data, updatedData.grid_import].slice(
                            -10
                        ),
                    },
                    {
                        ...prevState.datasets[1],
                        data: [
                            ...prevState.datasets[1].data,
                            updatedData.solar_generation,
                        ].slice(-10),
                    },
                    {
                        ...prevState.datasets[2],
                        data: [
                            ...prevState.datasets[2].data,
                            updatedData.building_consumption,
                        ].slice(-10),
                    },
                    {
                        ...prevState.datasets[3],
                        data: [
                            ...prevState.datasets[3].data,
                            updatedData.outdoor_temperature,
                        ].slice(-10),
                    },
                    {
                        ...prevState.datasets[4],
                        data: [...prevState.datasets[4].data, updatedData.uv_index].slice(
                            -10
                        ),
                    },
                ],
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchMockData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col w-full">
            <Line
                className=" flex w-full"
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Power (kW)",
                            },
                            min: 0,
                            max: 30,
                            ticks: {
                                stepSize: 5,
                            },
                        },
                    },
                }}
            />
        
        </div>
    );
};

export default RealtimeGraph;