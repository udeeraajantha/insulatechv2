'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ServiceAreaMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 39.7817, lng: -89.6501 }; // Springfield, IL

  if (!apiKey) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Area</CardTitle>
          <CardDescription>Our service area map is currently unavailable.</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Google Maps API Key Missing</AlertTitle>
            <AlertDescription>
              Please add your Google Maps API key to your environment variables as NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to display the map.
            </AlertDescription>
          </Alert>
          <div className="h-[300px] bg-muted rounded-md flex items-center justify-center mt-4">
            <p className="text-muted-foreground">Map placeholder</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Our Service Area</CardTitle>
        <CardDescription>
          We proudly serve Springfield, IL and surrounding areas. Our main office is marked below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[450px] w-full rounded-md overflow-hidden border">
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={position}
              defaultZoom={9}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="insula-tech-map"
            >
              <AdvancedMarker position={position} title={'InsulaTech Pro HQ'} />
            </Map>
          </APIProvider>
        </div>
      </CardContent>
    </Card>
  );
}
