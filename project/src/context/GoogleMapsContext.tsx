import React, { createContext, useContext, ReactNode } from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsContext = createContext<boolean>(false);

export const useGoogleMaps = () => useContext(GoogleMapsContext);

interface GoogleMapsProviderProps {
  children: ReactNode;
}

export const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMapsContext.Provider value={true}>
        {children}
      </GoogleMapsContext.Provider>
    </LoadScript>
  );
};