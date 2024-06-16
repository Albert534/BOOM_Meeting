"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetUpComplete,
}: {
  setIsSetUpComplete: (value: boolean) => void;
}) => {
  const [isMicCam, setIsMicCam] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }
  useEffect(() => {
    if (isMicCam) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.camera.enable();
    }
  }, [isMicCam, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center ustify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium ">
          <input
            type="checkbox"
            checked={isMicCam}
            onChange={(e) => setIsMicCam(e.target.checked)}
          ></input>
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetUpComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
