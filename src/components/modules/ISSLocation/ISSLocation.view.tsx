import React, { useMemo } from 'react';
import { AspectRatio, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ISSLocationGeneratedProps } from './ISSLocation.props';
import { getStyles } from './ISSLocation.style';
import { issIcon } from './ISSIcon';

const View: React.FC<ISSLocationGeneratedProps> = ({ data, isLoading }) => {
  const styles = getStyles();

  const lat = Number(data?.iss_position.latitude || 0);
  const lng = Number(data?.iss_position.longitude || 0);
  const position: LatLngExpression = [lat, lng];

  const renderMap = useMemo(
    () => (
      <AspectRatio {...styles.map}>
        <MapContainer
          center={position}
          worldCopyJump
          zoom={5}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={issIcon}>
            <Popup>
              Current ISS Location {'\n'} {lat} , {lng}
            </Popup>
          </Marker>
        </MapContainer>
      </AspectRatio>
    ),
    [position],
  );

  return (
    <Flex {...styles.container}>
      <Text {...styles.title}>Current ISS Location</Text>
      <Text>
        The{' '}
        <Link
          color="accent.600"
          target="_blank"
          href="https://en.wikipedia.org/wiki/International_Space_Station">
          International Space Station
        </Link>{' '}
        is moving at close to 28,000 km/h so its location changes really fast!
      </Text>
      <Stack {...styles.mapContainer}>
        {isLoading ? <Spinner /> : renderMap}
      </Stack>
    </Flex>
  );
};

export default View;
