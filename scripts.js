/*
3 DP
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/

const input = document.getElementById("input-val")
const convertBtn = document.getElementById("convert-btn")

const lenDet = document.getElementById("len-det")
const massDet = document.getElementById("mass-det")
const volDet = document.getElementById("vol-det")

convertBtn.addEventListener("click", convert)

function convert(){

    const value = Number(input.value)

    // Meters -> feet | feet -> meters
    const meter1 = value
    const feet1 = (value*3.281).toFixed(3)
    // 
    const feet2 = value
    const meter2 = (value/3.281).toFixed(3)
    // 
    lenDet.textContent = `${meter1} meters = ${feet1} feet | ${feet2} feet = ${meter2} meters` 

    // Liter -> Gallon | Gallon -> Liter
    const liter1 = value
    const gallon1 = (value*0.264).toFixed(3)
    // 
    const gallon2 = value
    const liter2 = (value/0.264).toFixed(3)
    // 
    volDet.textContent = `${liter1} liters = ${gallon1} gallon | ${gallon2} gallon = ${liter2} liters`

    // Kilo -> Pound | Pound -> Kilo
    const kilo1 = value
    const pound1 = (value*2.204).toFixed(3)
    // 
    const pound2 = value
    const kilo2 = (value/2.204).toFixed(3)
    // 
    massDet.textContent = `${kilo1} kilo = ${pound1} pounds | ${pound2} pounds = ${kilo2} kilo`



}

// convert(input)