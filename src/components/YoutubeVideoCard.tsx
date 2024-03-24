import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type Video = {
   videoId: string;
   videoURL: string;
   thumbnail: string;
   channelName: string;
   videoTitle: string;
   description: string;
   channelID: string;
};

export default function YoutubeVideoCard(props: Video): React.JSX.Element {
   const [channelProfile, setChannelProfile] = useState<string>("");
   const [videoViews, setVideoViews] = useState<string>("");

   useEffect(() => {
      (async function () {
         try {
            const response = await axios({
               method: "GET",
               url: `http://localhost:3001/youtube-channel?id=${props.channelID}`,
            });
            setChannelProfile(response.data?.channelProfile);
         } catch (error) {
            console.log(error);
         }
      })();

      (async function () {
         try {
            const response = await axios({
               method: "GET",
               url: `http://localhost:3001/youtube-video?id=${props.videoId}`,
            });
            setVideoViews(response.data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   return (
      <div className="bg-white cursor-pointer" onClick={() => (window.location.href = props.videoURL)}>
         <Link to={props.videoURL}>
            <figure className="w-full h-48 bg-red-200 rounded-md overflow-hidden">
               <img src={props.thumbnail} alt="video thumbnail" className="w-full h-full object-cover" />
            </figure>
         </Link>
         <div className="pt-3">
            <div className="flex space-x-3">
               <Link to={props.videoURL}>
                  <figure className="w-9 h-9 rounded-full overflow-hidden">
                     <img src={channelProfile} alt="" className="w-full h-full object-cover" />
                  </figure>
               </Link>
               <div className="">
                  <h3
                     className="roboto-regular font-bold text-base w-full text-ellipsis line-clamp-2"
                     title={props.videoTitle}
                  >
                     {props.videoTitle}
                  </h3>
                  <p className="text-[13px] mt-1 roboto-regular text-gray-600">{props.channelName}</p>
                  <div className="flex items-center">
                     <p className="text-[13px] text-gray-600 roboto-regular">{videoViews} views</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
