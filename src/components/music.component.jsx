import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "./components-music/heartIcon";
import { RepeatOneIcon } from "./components-music/RepeatIcon";
import { PreviousIcon } from "./components-music/PreviusIcon";
import { PauseCircleIcon } from "./components-music/PauseCircleIcon";
import { NextIcon } from "./components-music/NextIcon";
import { ShuffleIcon } from "./components-music/ShuffleIcon";
import { useEffect, useRef, useState } from "react";
import currentSong from "../assets/music/music.mp3";
import img from "../assets/img/lofi.jpg";
import { BsSkipStartCircle } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

export const SongControl = ({ audio = null }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time) => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  let duration = audio?.current?.duration;
  return (
    <div className="flex flex-col mt-3 gap-1">
      <Slider
        aria-label="Music progress"
        classNames={{
          track: "bg-default-500/30",
          thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
        }}
        color="foreground"
        defaultValue={0}
        value={currentTime}
        onChange={(value) => {
          audio.current.currentTime = value;
        }}
        minValue={0}
        maxValue={audio?.current?.duration ?? 0}
        size="sm"
      />
      <div className="flex justify-between">
        <p className="text-small">{formatTime(currentTime)}</p>
        <p className="text-small text-foreground/50">
          {duration ? formatTime(duration) : "0:00"}
        </p>
      </div>
    </div>
  );
};

export default function CardMusic() {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = currentSong;
  }, []);
  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
      setIsPlaying(true);
    }
  };
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      style={{ width: "100%", height: "100%" }}
      shadow="sm"
    >
      <CardBody style={{ width: "100%", height: "100%" }}>
        <div
          className="flex flex-wrap flex-row items-center justify-around "
          style={{ width: "100%", height: "100%" }}
        >
          <div className="relative col-span-4 md:col-span-4">
            <Image
              alt="Album cover"
              style={{ maxWidth: "200px" }}
              className="object-cover"
              shadow="md"
              src={img}
            />
          </div>
          <audio ref={audioRef} />

          <div
            className="flex flex-col col-span-6 md:col-span-8"
            style={{ width: "60%", paddingLeft: "20px" }}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90"> Lofi </h3>
                <p className="text-small text-foreground/80">1 Tracks</p>
                <h1 className="text-large font-medium mt-2">Developer Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <SongControl audio={audioRef} />

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={handleClick}
              >
                {isPlaying ? (
                  <PauseCircleIcon size={54} />
                ) : (
                  <FaCirclePlay size={54} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
