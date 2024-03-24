export type YoutubeVideo = {
   kind: string;
   etag: string;
   items: [
      {
         kind: string;
         etag: string;
         id: string;
         statistics: {
            viewCount: string;
            favoriteCount: string;
            commentCount: string;
         };
      }
   ];
   pageInfo: {
      totalResults: number;
      resultsPerPage: number;
   };
};
