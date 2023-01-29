import { useEffect, useState } from "react";

export const Home = () => {
    const [adress, setAdress] = useState(null);

    const API_KAY = "d4683b09d0c94ec0aebf0b2e043decbf"
    useEffect(() => {

        function success(pos) {
            const crd = pos.coords;

            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);

            const URL = `https://api.opencagedata.com/geocode/v1/json?q=${crd.latitude}+${crd.longitude}&key=${API_KAY}`
            fetch(URL).then(data => data.json()).then(data => setAdress(data.results[0].formatted))
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error);

    }, []);
    return (
        <div> <p>Adress: {adress}</p>
         </div>
    )
}
