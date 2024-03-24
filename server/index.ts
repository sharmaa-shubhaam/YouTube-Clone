import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { YouTubeSearch } from "./search-snipper";
import { YoutubeChannel } from "./channel-snippet";
import { YoutubeVideo } from "./video-snippet";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

type SendResponse = {
   videoId: string;
   videoURL: string;
   thumbnail: string;
   channelName: string;
   videoTitle: string;
   description: string;
   channelID: string;
};

app.get("/youtube-search", async (req: Request, res: Response) => {
   try {
      const videos = await fetch(
         process.env.YOUTUBE_SEARCH + `/?key=${process.env.YOUTUBE_API_KEY}&maxResults=50&part=snippet&type=video&q=10`
      );
      const YoutubeSearch: YouTubeSearch = await videos.json();

      const sendresponse: SendResponse[] = YoutubeSearch.items.map((items) => {
         return {
            videoId: items.id.videoId,
            videoURL: `https://www.youtube.com/watch?v=${items.id.videoId}`,
            thumbnail: items.snippet.thumbnails.high.url,
            channelName: items.snippet.channelTitle,
            videoTitle: items.snippet.title,
            description: items.snippet.description,
            channelID: items.snippet.channelId,
         };
      });

      console.log("Request successfull.");
      return res.status(200).send(sendresponse);
   } catch (error) {
      return res.status(500).send(error);
   }
});

app.get("/youtube-channel", async (req: Request, res: Response) => {
   try {
      const channelDetails = await fetch(
         process.env.YOUTUBE_CHANNEL + `/?key=${process.env.YOUTUBE_API_KEY}&id=${req.query.id}&part=snippet`
      );
      const YoutubeChannel: YoutubeChannel = await channelDetails.json();

      console.log("Request successfull.");
      return res.status(200).send({ channelProfile: YoutubeChannel.items[0].snippet.thumbnails.high.url });
   } catch (error) {
      return res.status(500).send(error);
   }
});

app.get("/youtube-video", async (req: Request, res: Response) => {
   try {
      const videoStatistics = await fetch(
         process.env.YOUTUBE_VIDEO + `/?key=${process.env.YOUTUBE_API_KEY}&id=${req.query.id}&part=statistics`
      );

      const YoutubeVideo: YoutubeVideo = await videoStatistics.json();
      let countView = "";
      if (YoutubeVideo.items[0].statistics.viewCount.length > 3)
         countView = String(YoutubeVideo.items[0].statistics.viewCount.slice(0, 2) + "K");
      else countView = YoutubeVideo.items[0].statistics.viewCount;

      return res.status(200).send(countView);
   } catch (error) {
      return res.status(500).send(error);
   }
});

app.listen(port, () => console.log("running express server."));
