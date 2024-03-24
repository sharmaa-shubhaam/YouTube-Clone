import React from "react";
import NavbarButton from "./NavbarButton";
import { RiHome5Fill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import SonnySangha from "../assets/Sonny-Sangha.jpg";
import MrBeast from "../assets/Mr-Beast.png";
import { PiFireThin } from "react-icons/pi";
import { IoIosMusicalNote } from "react-icons/io";
import { PiFilmSlateThin } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import { BsLightbulb } from "react-icons/bs";
import { PiCoatHangerThin } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";
import { CiFlag1 } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar(): React.JSX.Element {
   return (
      <nav className="sticky top-14 w-[250px] h-[calc(100vh-56px)] overflow-y-auto pb-2 overflow-x-hidden" id="navbar">
         <div className="p-3 border-b roboto-regular">
            <NavbarButton Icon={RiHome5Fill} to="/" title="home" />
            <NavbarButton Icon={SiYoutubeshorts} to="/shorts" title="Shorts" />
            <NavbarButton Icon={MdOutlineSubscriptions} to="/subscriptions" title="Subscriptions" />
         </div>
         <div className="p-3 border-b roboto-regular">
            <NavbarButton Icon={TbUserSquare} to="/channel" title="your channel" />
            <NavbarButton Icon={GoHistory} to="/feed/history" title="history" />
            <NavbarButton Icon={GoVideo} to="/channel/qwee" title="your videos" />
            <NavbarButton Icon={MdOutlineWatchLater} to="/playlist?list=wl" title="watch later" />
            <NavbarButton Icon={AiOutlineLike} to="/playlist0?list=ll" title="liked videos" />
         </div>
         <div className="p-3 border-b roboto-regular">
            <div className="px-3 pb-1.5">
               <h1 className="font-semibold capitalize">subscriptions</h1>
            </div>
            <NavbarButton profile={SonnySangha} to="/sonny" title="sonny sangha" />
            <NavbarButton profile={MrBeast} to="/mrbeast" title="mr beast" />
         </div>
         <div className="p-3 border-b roboto-regular">
            <div className="px-3 pb-1.5">
               <h1 className="font-semibold capitalize">explore</h1>
            </div>
            <NavbarButton Icon={PiFireThin} to="/feed/trending" title="trending" />
            <NavbarButton Icon={IoIosMusicalNote} to="/channel/uc-key" title="music" />
            <NavbarButton Icon={PiFilmSlateThin} to="" title="movie & TV" />

            <NavbarButton Icon={HiOutlineSignal} to="/channel/urhneudj" title="live" />
            <NavbarButton Icon={IoGameControllerOutline} to="/gaming" title="gaming" />
            <NavbarButton Icon={ImNewspaper} to="/channel/dkgfwkgf" title="news" />

            <NavbarButton Icon={TfiCup} to="/channel/wyush" title="sports" />
            <NavbarButton Icon={BsLightbulb} to="/channel/suwou" title="learning" />
            <NavbarButton Icon={PiCoatHangerThin} to="/channel/syqopldy" title="fashion & beauty" />
            <NavbarButton Icon={MdPodcasts} to="/podcasts" title="podcasts" />
         </div>
         <div className="p-3 border-b roboto-regular">
            <div className="px-3 pb-1.5">
               <h1 className="font-semibold capitalize">more from youtube</h1>
            </div>
            <NavbarButton Icon={FaYoutube} to="/premium" title="youTube permium" />
            <NavbarButton Icon={SiYoutubestudio} to="/studio" title="youTube studio" />
            <NavbarButton Icon={SiYoutubemusic} to="/music" title="youTube music" />
            <NavbarButton Icon={TbBrandYoutubeKids} to="/kids" title="youTube kids" />
         </div>
         <div className="p-3 border-b roboto-regular">
            <NavbarButton Icon={RiSettings3Line} to="/setting" title="setting" />
            <NavbarButton Icon={CiFlag1} to="/reporthistory" title="report history" />
            <NavbarButton Icon={MdHelpOutline} to="/help" title="help" />
            <NavbarButton Icon={MdOutlineFeedback} to="/feedback" title="send feedback" />
         </div>
         <div className="px-6 py-3 space-y-2">
            <div className="space-x-2">
               {["about", "press", "copyright", "contact us", "creators", "advertise", "developers"].map((link, id) => (
                  <Link to={link} key={id} className="text-[13px] font-semibold text-gray-600 capitalize">
                     {link}
                  </Link>
               ))}
            </div>
            <div className="space-x-2">
               {["terms", "privacy", "policy & safety", "how YouTube works", "test new features"].map((link, id) => (
                  <Link to={link} key={id} className="text-[13px] font-semibold text-gray-600 capitalize">
                     {link}
                  </Link>
               ))}
            </div>
            <div className="text-gray-500 text-xs pt-4">
               <span>&#169;</span>
               <span className="ml-0.5">2024 Google LLC</span>
            </div>
         </div>
      </nav>
   );
}
