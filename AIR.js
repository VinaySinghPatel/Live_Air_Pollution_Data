const CityName = document.getElementById("CityName");
const Overall_Quality = document.getElementById("AirQuality");
const Carbon_monoxide = document.getElementById("Carbon_monoxide");
const Nitrogen_monoxide = document.getElementById("Nitrogen_monoxide");
const Nitrogen_dioxide = document.getElementById("Nitrogen_dioxide");
const Ozone = document.getElementById("Ozone");
const Sulphur_dioxide = document.getElementById("Sulphur_dioxide");
const Ammonia = document.getElementById("Ammonia");
const CityNameInput = document.getElementById("InputHere");
const SearchBox = document.getElementById("Search");


SearchBox.addEventListener("click", async () => {
    const cityNameIn = CityNameInput.value.toLowerCase();
    console.log(cityNameIn);
    if (cityNameIn === "jabalpur") {
        CityName.innerText = "Jabalpur";
        ApiFunction(23.1686, 79.9339);
    } else if (cityNameIn === "delhi") {
        CityName.innerText = "Delhi";
        ApiFunction(28.7041, 77.1025);
    } else if (cityNameIn === "mumbai") {
        CityName.innerText = "Mumbai";
        ApiFunction(19.0760, 72.8777);
    } else if (cityNameIn === "noida") {
        CityName.innerText = "Noida";
        ApiFunction(28.5355, 77.3910);
    } else if (cityNameIn === "haryana") {
        CityName.innerText = "Haryana";
        ApiFunction(29.0588, 76.0856);
    } else if (cityNameIn === "kolkata") {
        CityName.innerText = "Kolkata";
        ApiFunction(22.5744, 88.3629);
    } else if (cityNameIn === "pune") {
        CityName.innerText = "Pune";
        ApiFunction(18.5204, 73.8567);
    } else if (cityNameIn === "jaipur") {
        CityName.innerText = "Jaipur";
        ApiFunction(26.9124, 75.7873);
    } else if (cityNameIn === "bhopal") {
        CityName.innerText = "Bhopal";
        ApiFunction(23.2599, 77.4126);
    } else if (cityNameIn === "indore") {
        CityName.innerText = "Indore";
        ApiFunction(22.7196, 75.8577);
    } else if (cityNameIn === "new delhi") {
        CityName.innerText = "New Delhi";
        ApiFunction(28.6139, 77.2090);
    } else if (cityNameIn === "beijing") {
        CityName.innerText = "Beijing";
        ApiFunction(39.9042, 116.4074);
    } else if (cityNameIn === "lahore") {
        CityName.innerText = "Lahore";
        ApiFunction(31.5497, 74.3436);
    } else if (cityNameIn === "dhaka") {
        CityName.innerText = "Dhaka";
        ApiFunction(23.8103, 90.4125);
    } else if (cityNameIn === "jakarta") {
        CityName.innerText = "Jakarta";
        ApiFunction(-6.2088, 106.8456);
    } else if (cityNameIn === "cairo") {
        CityName.innerText = "Cairo";
        ApiFunction(30.0444, 31.2357);
    } else if (cityNameIn === "tehran") {
        CityName.innerText = "Tehran";
        ApiFunction(35.6892, 51.3890);
    } else if (cityNameIn === "istanbul") {
        CityName.innerText = "Istanbul";
        ApiFunction(41.0082, 28.9784);
    } else if (cityNameIn === "mexico city") {
        CityName.innerText = "Mexico City";
        ApiFunction(19.4326, -99.1332);
    } else if (cityNameIn === "los angeles") {
        CityName.innerText = "Los Angeles";
        ApiFunction(34.0522, -118.2437);
    } else if (cityNameIn === "karachi") {
        CityName.innerText = "Karachi";
        ApiFunction(24.8607, 67.0011);
    } else if (cityNameIn === "kolkata") {
        CityName.innerText = "Kolkata";
        ApiFunction(22.5726, 88.3639);
    } else if (cityNameIn === "shanghai") {
        CityName.innerText = "Shanghai";
        ApiFunction(31.2304, 121.4737);
    } else if (cityNameIn === "manila") {
        CityName.innerText = "Manila";
        ApiFunction(14.5995, 120.9842);
    } else if (cityNameIn === "bangkok") {
        CityName.innerText = "Bangkok";
        ApiFunction(13.7563, 100.5018);
    } else if (cityNameIn === "lima") {
        CityName.innerText = "Lima";
        ApiFunction(-12.0464, -77.0428);
    } else if (cityNameIn === "santiago") {
        CityName.innerText = "Santiago";
        ApiFunction(-33.4489, -70.6693);
    } else if (cityNameIn === "moscow") {
        CityName.innerText = "Moscow";
        ApiFunction(55.7558, 37.6173);
    } else if (cityNameIn === "sao paulo") {
        CityName.innerText = "Sao Paulo";
        ApiFunction(-23.5505, -46.6333);
    } else if (cityNameIn === "kanpur") {
        CityName.innerText = "Kanpur";
        ApiFunction(26.4499, 80.3319);
    } else if (cityNameIn === "lucknow") {
        CityName.innerText = "Lucknow";
        ApiFunction(26.8467, 80.9462);
    } else if (cityNameIn === "varanasi") {
        CityName.innerText = "Varanasi";
        ApiFunction(25.3176, 82.9739);
    } else if (cityNameIn === "patna") {
        CityName.innerText = "Patna";
        ApiFunction(25.5941, 85.1376);
    } else if (cityNameIn === "gurugram") {
        CityName.innerText = "Gurugram";
        ApiFunction(28.4595, 77.0266);
    } else if (cityNameIn === "faridabad") {
        CityName.innerText = "Faridabad";
        ApiFunction(28.4089, 77.3178);
    } else if (cityNameIn === "ghaziabad") {
        CityName.innerText = "Ghaziabad";
        ApiFunction(28.6692, 77.4538);
    } else if (cityNameIn === "meerut") {
        CityName.innerText = "Meerut";
        ApiFunction(28.9845, 77.7064);
    } else if (cityNameIn === "agra") {
        CityName.innerText = "Agra";
        ApiFunction(27.1767, 78.0081);
    } else if (cityNameIn === "ahmedabad") {
        CityName.innerText = "Ahmedabad";
        ApiFunction(23.0225, 72.5714);
    } else if (cityNameIn === "amritsar") {
        CityName.innerText = "Amritsar";
        ApiFunction(31.6340, 74.8723);
    } else if (cityNameIn === "ajmer") {
        CityName.innerText = "Ajmer";
        ApiFunction(26.4499, 74.6399);
    } else if (cityNameIn === "aligarh") {
        CityName.innerText = "Aligarh";
        ApiFunction(27.8974, 78.0880);
    } else if (cityNameIn === "allahabad") {
        CityName.innerText = "Allahabad";
        ApiFunction(25.4358, 81.8463);
    } else if (cityNameIn === "aurangabad") {
        CityName.innerText = "Aurangabad";
        ApiFunction(19.8762, 75.3433);
    } else if (cityNameIn === "bareilly") {
        CityName.innerText = "Bareilly";
        ApiFunction(28.3670, 79.4304);
    } else if (cityNameIn === "bhilai") {
        CityName.innerText = "Bhilai";
        ApiFunction(21.1938, 81.3509);
    } else if (cityNameIn === "bhubaneswar") {
        CityName.innerText = "Bhubaneswar";
        ApiFunction(20.2961, 85.8245);
    } else if (cityNameIn === "bikaner") {
        CityName.innerText = "Bikaner";
        ApiFunction(28.0229, 73.3119);
    } else if (cityNameIn === "bokaro") {
        CityName.innerText = "Bokaro";
        ApiFunction(23.6693, 86.1511);
    } else if (cityNameIn === "chandigarh") {
        CityName.innerText = "Chandigarh";
        ApiFunction(30.7333, 76.7794);
    } else if (cityNameIn === "coimbatore") {
        CityName.innerText = "Coimbatore";
        ApiFunction(11.0168, 76.9558);
    } else if (cityNameIn === "cuttack") {
        CityName.innerText = "Cuttack";
        ApiFunction(20.4625, 85.8828);
    } else if (cityNameIn === "dehradun") {
        CityName.innerText = "Dehradun";
        ApiFunction(30.3165, 78.0322);
    } else if (cityNameIn === "dhanbad") {
        CityName.innerText = "Dhanbad";
        ApiFunction(23.7957, 86.4304);
    } else if (cityNameIn === "durgapur") {
        CityName.innerText = "Durgapur";
        ApiFunction(23.5204, 87.3119);
    } else if (cityNameIn === "erode") {
        CityName.innerText = "Erode";
        ApiFunction(11.3410, 77.7172);
    } else if (cityNameIn === "gaya") {
        CityName.innerText = "Gaya";
        ApiFunction(24.7955, 85.0002);
    } else if (cityNameIn === "gorakhpur") {
        CityName.innerText = "Gorakhpur";
        ApiFunction(26.7606, 83.3732);
    } else if (cityNameIn === "guntur") {
        CityName.innerText = "Guntur";
        ApiFunction(16.3067, 80.4365);
    } else if (cityNameIn === "gwalior") {
        CityName.innerText = "Gwalior";
        ApiFunction(26.2183, 78.1828);
    } else if (cityNameIn === "hubli") {
        CityName.innerText = "Hubli";
        ApiFunction(15.3647, 75.1240);
    } else if (cityNameIn === "jalandhar") {
        CityName.innerText = "Jalandhar";
        ApiFunction(31.3260, 75.5762);
    } else if (cityNameIn === "jammu") {
        CityName.innerText = "Jammu";
        ApiFunction(32.7266, 74.8570);
    } else if (cityNameIn === "jamnagar") {
        CityName.innerText = "Jamnagar";
        ApiFunction(22.4707, 70.0577);
    } else if (cityNameIn === "jamshedpur") {
        CityName.innerText = "Jamshedpur";
        ApiFunction(22.8046, 86.2029);
    } else if (cityNameIn === "jhansi") {
        CityName.innerText = "Jhansi";
        ApiFunction(25.4484, 78.5685);
    } else if (cityNameIn === "jodhpur") {
        CityName.innerText = "Jodhpur";
        ApiFunction(26.2389, 73.0243);
    } else if (cityNameIn === "kakinada") {
        CityName.innerText = "Kakinada";
        ApiFunction(16.9891, 82.2475);
    } else if (cityNameIn === "kochi") {
        CityName.innerText = "Kochi";
        ApiFunction(9.9312, 76.2673);
    } else if (cityNameIn === "kolhapur") {
        CityName.innerText = "Kolhapur";
        ApiFunction(16.7050, 74.2433);
    } else if (cityNameIn === "kollam") {
        CityName.innerText = "Kollam";
        ApiFunction(8.8932, 76.6141);
    } else if (cityNameIn === "kozhikode") {
        CityName.innerText = "Kozhikode";
        ApiFunction(11.2588, 75.7804);
    } else if (cityNameIn === "ludhiana") {
        CityName.innerText = "Ludhiana";
        ApiFunction(30.9010, 75.8573);
    } else if (cityNameIn === "madurai") {
        CityName.innerText = "Madurai";
        ApiFunction(9.9252, 78.1198);
    } else if (cityNameIn === "mangalore") {
        CityName.innerText = "Mangalore";
        ApiFunction(12.9141, 74.8560);
    } else if (cityNameIn === "meerut") {
        CityName.innerText = "Meerut";
        ApiFunction(28.9845, 77.7064);
    } else if (cityNameIn === "moradabad") {
        CityName.innerText = "Moradabad";
        ApiFunction(28.8386, 78.7733);
    } else if (cityNameIn === "mysore") {
        CityName.innerText = "Mysore";
        ApiFunction(12.2958, 76.6394);
    } else if (cityNameIn === "nashik") {
        CityName.innerText = "Nashik";
        ApiFunction(19.9975, 73.7898);
    } else if (cityNameIn === "nellore") {
        CityName.innerText = "Nellore";
        ApiFunction(14.4426, 79.9865);
    } else if (cityNameIn === "pondicherry") {
        CityName.innerText = "Pondicherry";
        ApiFunction(11.9416, 79.8083);
    } else if (cityNameIn === "rajkot") {
        CityName.innerText = "Rajkot";
        ApiFunction(22.3039, 70.8022);
    } else if (cityNameIn === "ranchi") {
        CityName.innerText = "Ranchi";
        ApiFunction(23.3441, 85.3096);
    } else if (cityNameIn === "rohtak") {
        CityName.innerText = "Rohtak";
        ApiFunction(28.8955, 76.6066);
    } else if (cityNameIn === "salem") {
        CityName.innerText = "Salem";
        ApiFunction(11.6643, 78.1460);
    } else if (cityNameIn === "siliguri") {
        CityName.innerText = "Siliguri";
        ApiFunction(26.7271, 88.3953);
    } else if (cityNameIn === "solapur") {
        CityName.innerText = "Solapur";
        ApiFunction(17.6599, 75.9064);
    } else if (cityNameIn === "srinagar") {
        CityName.innerText = "Srinagar";
        ApiFunction(34.0837, 74.7973);
    } else if (cityNameIn === "surat") {
        CityName.innerText = "Surat";
        ApiFunction(21.1702, 72.8311);
    } else if (cityNameIn === "thiruvananthapuram") {
        CityName.innerText = "Thiruvananthapuram";
        ApiFunction(8.5241, 76.9366);
    } else if (cityNameIn === "thrissur") {
        CityName.innerText = "Thrissur";
        ApiFunction(10.5276, 76.2144);
    } else if (cityNameIn === "tiruchirappalli") {
        CityName.innerText = "Tiruchirappalli";
        ApiFunction(10.7905, 78.7047);
    } else if (cityNameIn === "tiruppur") {
        CityName.innerText = "Tiruppur";
        ApiFunction(11.1085, 77.3411);
    } else if (cityNameIn === "tirupati") {
        CityName.innerText = "Tirupati";
        ApiFunction(13.6288, 79.4192);
    } else if (cityNameIn === "udaipur") {
        CityName.innerText = "Udaipur";
        ApiFunction(24.5854, 73.7125);
    } else if (cityNameIn === "ujjain") {
        CityName.innerText = "Ujjain";
        ApiFunction(23.1765, 75.7885);
    } else if (cityNameIn === "vadodara") {
        CityName.innerText = "Vadodara";
        ApiFunction(22.3072, 73.1812);
    } else if (cityNameIn === "varanasi") {
        CityName.innerText = "Varanasi";
        ApiFunction(25.3176, 82.9739);
    } else if (cityNameIn === "vellore") {
        CityName.innerText = "Vellore";
        ApiFunction(12.9165, 79.1325);
    } else if (cityNameIn === "vijayawada") {
        CityName.innerText = "Vijayawada";
        ApiFunction(16.5062, 80.6480);
    } else if (cityNameIn === "visakhapatnam") {
        CityName.innerText = "Visakhapatnam";
        ApiFunction(17.6868, 83.2185);
    } else if (cityNameIn === "warangal") {
        CityName.innerText = "Warangal";
        ApiFunction(17.9784, 79.5941);
    } else {
        console.log("City not found. Please enter a valid city name.");
    }
})





 function getData(data){

    const Quality = data.list[0].main.aqi;
    const Components = data.list[0].components;

    const CO =  data.list[0].components.co;
    Carbon_monoxide.innerText = CO;
    const NO =  data.list[0].components.no;
    Nitrogen_monoxide.innerText = NO; 
     const NO2 =  data.list[0].components.no2;
     Nitrogen_dioxide.innerText = NO2;
     const OZONE =  data.list[0].components.o3;
     Ozone.innerText = OZONE;
    const SulferDioxide =  data.list[0].components.so2;
    Sulphur_dioxide.innerText = SulferDioxide;
    const AMONIA =  data.list[0].components.nh3;
    Ammonia.innerText = AMONIA;
  
    if(Quality  === 1){
        Overall_Quality.innerText = "Good";
        console.log("Good")
    }else if(Quality === 2){
        Overall_Quality.innerText = "Fair";
        console.log("Fair")
    }else if(Quality === 3){
        Overall_Quality.innerText = "Moderate";
        console.log("Moderate");
    }else if(Quality === 4){
        Overall_Quality.innerText = "Poor";
        console.log("Poor");
    }else if(Quality === 5){
        Overall_Quality.innerText = "Very Poor";
        console.log("Very Poor");
    }
}


async function ApiFunction(lat,lon){
    const API_KEY = "9be52b4933dc6366b30a9994caea68c4";
    var lat ;
    var lon ;
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        getData(data);
    } catch (error) {
        console.error('Error fetching Air Pollution data:', error);
    }
}


