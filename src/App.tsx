import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import YoutubeVideoCard, { Video } from "./components/YoutubeVideoCard";
import axios from "axios";

export default function App(): React.JSX.Element {
   const [videos, setVideos] = useState<Video[]>([]);

   useEffect(() => {
      (async function () {
         try {
            const response = await axios({ method: "GET", url: "http://localhost:3001/youtube-search" });
            setVideos(response.data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   return (
      <div className="">
         <Header />
         <div className="flex">
            <Navbar />
            <div className="flex-1">
               <div className="grid grid-cols-3 gap-x-4 gap-y-8 px-6 py-6">
                  {videos.map((item, id) => (
                     <YoutubeVideoCard
                        videoURL={item.videoURL}
                        channelName={item.channelName}
                        description={item.description}
                        thumbnail={item.thumbnail}
                        videoId={item.videoId}
                        videoTitle={item.videoTitle}
                        channelID={item.channelID}
                        key={id}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
