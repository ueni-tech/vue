<template>
  <div class="wrapper">
    <div class="container">
      <Title />
      <Form @submit-form="getWeather" />
      <Result :results="results" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import Title from './components/Title.vue';
import Form from './components/Form.vue';
import Result from './components/Result.vue';
import './assets/base.css';

const results = reactive({
  country: "",
  cityName: "",
  temperature: "",
  conditionText: "",
  icon: ""
});

const getWeather = (city) => {
  axios.get(`https://api.weatherapi.com/v1/current.json?key=e9cffe310c644afb86902352232808&q=${city}&aqi=no`)
  .then(res => {
    results.country = res.data.location.country;
    results.cityName = res.data.location.name;
    results.temperature = res.data.current.temp_c;
    results.conditionText = res.data.current.condition.text;
    results.icon = res.data.current.condition.icon;
  });
}
</script>