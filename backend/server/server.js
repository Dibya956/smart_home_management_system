import express from "express"
import cors from "cors"
import axios from "axios"
import NodeCache from 'node-cache'

const app = express()
app.use(cors());
app.use(express.json());

const cache = new NodeCache({ stdTTL: 1.5 });

const url = "http://[ESP_IP_ADDRESS]:8888/[endpoint]"

app.get("/", (req, res) => {
  res.json({
    message: "Server is alive"
  })
})

app.get(`/data`, async (req, res) => {
    const key = "myDataKey";
    if (cache.get(key)) {
        const { temperature, humidity, soil_moisture, reed_switch_state, relay1_state, relay2_state } = cache.get(key).data;
         res.json({
            temperature,
            humidity,
            soil_moisture,
            reed_switch_state,
            relay1_state,
            relay2_state
        });
    } else {
        const response = await axios.get('http://[ESP_IP_ADDRESS]:8888/data');
        const data = response.data
        const { temperature, humidity, soil_moisture, reed_switch_state, relay1_state, relay2_state } = data
        const freshData = {
            message: response.data,
            timestamp: new Date().toISOString()
        }
        cache.set(key, freshData)
        res.json({
            temperature,
            humidity,
            soil_moisture,
            reed_switch_state,
            relay1_state,
            relay2_state
        });
    }
});

app.post("/relay1/on", async (req, res) => {
  await axios.post("http://[ESP_IP_ADDRESS]:8888/relay1/on", null)
  res.send("Relay 1 turned on");
});

app.post("/relay1/off", async (req, res) => {
  await axios.post("http://[ESP_IP_ADDRESS]:8888/relay1/off", null)
  res.send("Relay 1 turned off");
});

app.post("/relay2/on", async (req, res) => {
  await axios.post("http://[ESP_IP_ADDRESS]:8888/relay2/on", null)
  res.send("Relay 2 turned on");
});

app.post("/relay2/off", async (req, res) => {
  await axios.post("http://[ESP_IP_ADDRESS]:8888/relay2/off", null)
  res.send("Relay 2 turned off");
});

app.listen(8888, () => {
    console.log(`Server running at http://localhost:8888`);
});