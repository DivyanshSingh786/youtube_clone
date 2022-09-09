import {Stack, Box} from '@mui/material';
import {VideoCard, PlaylistCard,  ChannelCard} from './';

const Videos = ({videos, direction}) => {

  return (
    // <div>Video</div>
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
       {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video=
          {item} />}
           {item.id.channelId && <ChannelCard channelDetail={item} />}
           {/* {item.id.playlistId && <PlaylistCard playlistDetail={item} />} */}
         </Box>
      ))}
    </Stack>
  );
}

export default Videos;

