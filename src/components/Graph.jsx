import {useEffect, useRef, useState} from "react"
import {Chart, registerables} from "chart.js";
import {createClient} from "@supabase/supabase-js";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";


function Graph() {
	const uuidv4 = () => {
		return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		);
	}

	const url = "https://kdudsmiowdskjrevrqxb.supabase.co";
	const key = process.env.NEXT_PUBLIC_DB_KEY;
	const client = createClient(url, key);

	const makeFakeData = async () => {

		let now = Date.now()
		let numDay = 0;
		const {data, err} = await client.from("soil_data")
			.insert([{
				id: uuidv4(),
				robot_id: 1,
				created_at: now + 1 * 86400 * 100,
				moisture: randomInt(20, 100),
				humidity: randomInt(20, 100),
				temperature: randomInt(-10, 100)
			},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 2 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 3 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 4 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 4 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 5 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 6 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 7 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 8 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				{
					id: uuidv4(),
					robot_id: 1,
					created_at: now + 9 * 86400 * 100,
					moisture: randomInt(20, 100),
					humidity: randomInt(20, 100),
					temperature: randomInt(-10, 100)
				},
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
				// {
				// 	id: uuidv4(),
				// 	robot_id: 1,
				// 	moisture: randomInt(20, 100),
				// 	humidity: randomInt(20, 100),
				// 	temperature: randomInt(-10, 100)
				// },
			]);
	}

	// makeFakeData();

	const canvasEl = useRef(null);
	Chart.register(...registerables);

	const colors = {
		blue: { //moisture
			default: "rgb(76,147,233)",
			half: "rgba(76,147,233, 0.5)",
			quarter: "rgba(76,147,233, 0.25)",
			zero: "rgba(76,147,233, 0)"
		},
		orange: {//temp
			default: "rgb(187,106,18)",
			quarter: "rgba(187,106,18, 0.25)"
		},
		green: { //humidity
			default: "rgb(17,140,6)",
			quarter: "rgb(17,140,6, 0.25)"
		}
	};



	const [moisture, setMoisture] = useState([]);
	const [humidity, setHumidity] = useState([]);
	const [temp, setTemp] = useState([]);
	const [timeline, setTimeline] = useState([])


	useEffect(() => {
		const ctx = canvasEl.current.getContext("2d");

		const getData = async () => {
			const {data: soil_data, error} = await client.from("soil_data").select().eq("robot_id", 1)
				.order("created_at", {ascending: false})
				.limit(10);

			for (let i = 0; i < soil_data.length; ++i) {
				timeline.push(new Date(soil_data[i].created_at).toString())
				moisture.push(soil_data[i].moisture);
				humidity.push(soil_data[i].humidity);
				temp.push(soil_data[i].temperature);
			}

			setMoisture(moisture)
			setHumidity(humidity)
			setTemp(temp)
			setTimeline(timeline)

			// const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
			// const weight2 = [61.0, 59.2, 59.8, 59.2, 59.1, 61.2, 60.8, 58.9, 60.6, 61.2];

			const labels = [
				"Week 1",
				"Week 2",
				"Week 3",
				"Week 4",
				"Week 5",
				"Week 6",
				"Week 7",
				"Week 8",
				"Week 9",
				"Week 10"
			];
			const data = {
				labels: labels,
				datasets: [
					{
						label: "Moisture",
						data: moisture,
						fill: false,
						borderWidth: 2,
						borderColor: colors.blue.default,
						lineTension: 0.2,
						pointRadius: 3
					},
					{
						label: "Humidity",
						data: humidity,
						fill: false,
						borderWidth: 2,
						borderColor: colors.green.default,
						lineTension: 0.2,
						pointRadius: 3
					},
					{
						label: "Temperature",
						data: temp,
						fill: false,
						borderWidth: 2,
						borderColor: colors.orange.default,
						lineTension: 0.2,
						pointRadius: 3
					}
				]
			};
			const config = {
				type: "line",
				data: data,
				options:{
					scales: {
						y: {
							min: -40,
							max: 120
						}
					}
				}
			};
			const myLineChart = new Chart(ctx, config);

			return function cleanup() {
				myLineChart.destroy();
			};
		}

		return getData()

	});
	return (
		<>
			<div className="p-4 flex-auto shadow-lg rounded bg-blueGray-700">
				{/* Chart */}
				<div className="h-[28rem]">
					<span>Sensor data</span>
					<canvas id="myChart" ref={canvasEl}/>
				</div>
			</div>
		</>
	)
}

export default Graph;
