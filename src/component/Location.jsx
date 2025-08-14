import React, { useEffect, useRef } from "react";

const Location = () => {
  const mapRef = useRef(null);
  const apiKey = "AIzaSyAPFSLqV5bk9dJ3etShxeSSiQ_Rc2zk8OI"; // Replace with your actual key

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (window.google) {
          resolve(window.google);
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;

        script.onload = () => resolve(window.google);
        script.onerror = () => reject("Google Maps failed to load");

        document.head.appendChild(script);
      });
    };

    loadGoogleMapsScript()
      .then((google) => {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 23.8103, lng: 90.4125 }, // Default center: Dhaka
          zoom: 12,
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              const marker = new google.maps.Marker({
                position: userLocation,
                map,
                title: "Your Location",
              });

              map.setCenter(userLocation);
            },
            () => {
              console.warn("Geolocation permission denied.");
            }
          );
        } else {
          console.warn("Geolocation not supported.");
        }
      })
      .catch((err) => {
        console.error("Map load error:", err);
      });
  }, []);

  return (
    <div className="container px-0 shadow-lg">
      <div
        ref={mapRef}
        style={{ height: "600px", width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Location;
