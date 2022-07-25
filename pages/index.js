import React, { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import FrontPage from "../sections/FrontPage";
import Discography from "../sections/Discography";
import Videos from "../sections/Videos";
import PageLayout from "../components/Page/PageLayout";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import musicData from "../lib/musicData";
import videoData from "../lib/videoData";

export default function Home({ sortedMusicData, sortedVideoData }) {
  return (
    <AppLayout>
      <FrontPage />
      <Discography musicData={sortedMusicData} maxGridCols="3" />
      <Videos videoData={sortedVideoData} maxGridCols="2" />
      <PageLayout id="test">
        <div className="relative w-3/4 m-auto">
          <AudioPlayer />
        </div>
      </PageLayout>
    </AppLayout>
  );
}

export const getStaticProps = async () => {
  const sortedMusicData = musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
  const sortedVideoData = videoData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return {
    props: {
      sortedMusicData,
      sortedVideoData,
    },
  };
};
