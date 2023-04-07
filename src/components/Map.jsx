import React, { useState } from "react";
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api';

const markers = [
    {
        id: 1,
        name: "Chicago, Illinois",
        position: { lat: 41.881832, lng: -87.623177 }
    },
    {
        id: 2,
        name: "Denver, Colorado",
        position: { lat: 39.739235, lng: -104.99025 }
    },
    {
        id: 3,
        name: "Los Angeles, California",
        position: { lat: 34.052235, lng: -118.243683 }
    },
    {
        id: 4,
        name: "New York, New York",
        position: { lat: 40.712776, lng: -74.005974 }
    }
];

const Map = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const ApiKeys = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    // Show marker info
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };


    // Load each marker (location)
    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <LoadScript googleMapsApiKey={ApiKeys}>
            <GoogleMap
                mapContainerClassName="h-full w-full"
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                zoom={10}

            >
                { markers.map(({ id, name, position }) => (
                    <MarkerF
                        key={id}
                        position={position}
                        onClick={() => handleActiveMarker(id)}
                    >
                        {activeMarker === id ? (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <div>{name}</div>
                            </InfoWindowF>
                        ) : null}
                    </MarkerF>
                ))}
            </GoogleMap>
        </LoadScript>

    );
};

export default React.memo(Map);
