import { Link } from 'react-router-dom';
const DetailsHeader = ({ artistId, artistData, songData}) => (
  <div className="relative w-full flex flex-col">
     <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-48" />

      <div className="absolute inset-0 flex items-center">
          <img alt="art"
               src={artistId?
               artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}','500').replace('{h}','500')}
          />
      </div>
  </div>
);

export default DetailsHeader;
