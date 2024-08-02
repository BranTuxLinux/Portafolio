import { useEffect, useState } from "react";

const time = new Date();
export const Weather = () => {
  const apiKey = "91b39903c75de8ee905b75e6322e8de9";
  const lat = "6.28970";
  const lon = "75.53602";
  const [Weather, setWheather] = useState(null);
  const [time, setTime] = useState(null);
  const ApiWeather = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const response = await data.json();
    setWheather(response);
  };
  useEffect(() => {
    ApiWeather();
    console.log("Api");

    const intervalId = setInterval(() => {
      const ahora = new Date();
      let horas = ahora.getHours();
      const minutos = ahora.getMinutes();

      const formato = horas >= 12 ? "PM" : "AM";
      horas = horas % 12;
      horas = horas ? horas : 12; // El '0' debe ser '12'
      const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;

      const horaFormateada = `${horas}:${minutosFormateados} ${formato}`;
      setTime(horaFormateada);
      console.log("recharge...");
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {Weather == null ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}
            alt="Img"
            width={"40%"}
            className="absolute "
            style={{ padding: 0, bottom: "40px" }}
          />
          <h1 className="">Medellín, Colombia</h1>
        </div>
      )}
      <h5>{time}</h5>
    </>
  );
};
