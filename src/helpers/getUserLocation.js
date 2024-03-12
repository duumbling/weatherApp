export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = {
            lat: latitude,
            lon: longitude,
          };
          resolve(location);
        },
        function (error) {
          reject(error);
        }
      );
    } else {
      reject(new Error("Геолокация недоступна"));
    }
  });
}