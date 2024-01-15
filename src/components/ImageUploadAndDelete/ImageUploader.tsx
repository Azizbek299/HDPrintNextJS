"use client";

//  Ручной  ясалган куриниши

import { useEdgeStore } from "../../lib/edgestore";
import Link from "next/link";
import * as React from "react";
import { SingleImageDropzone } from "./single-image-dropzone";

export default function ImageUploader() {
  const [file, setFile] = React.useState<File>();
  const [urls, setUrls] = React.useState<{url: string; thumbnailUrl: string | null; }>();
  const [progress, setProgress] = React.useState(0);

  const { edgestore } = useEdgeStore();

  return (
    <div className="">
      
      <SingleImageDropzone
        width={400}
        height={300}
        value={file}
        className="mx-auto bg-slate-600"
        onChange={(file) => {setFile(file)}}
      />

      <div className="mx-auto my-25 h-20 w-[44rem] rounded overflow-hidden">
        <div
          className="h-full border bg-green-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center mb-50">

        <button
          className="px-30 py-3 mt-10 rounded bg-green-700 font-medium text-white"
          onClick={async () => {
            if (file) {
              const res = await edgestore.myPublicImages.upload({
                file,
                onProgressChange: (progress) => {
                  // you can use this to show a progress bar
                  setProgress(progress);
                },
              });
              //  save your data here for use
              setUrls({
                url: res.url,
                thumbnailUrl: res.thumbnailUrl,
              });
              // you can run some server action or api here
              // to add the necessary data to your database
              // console.log('++++++++++++++++++++++++++++++++++++', res);
            }
          }}
        >
          Rasmni Yuklash
        </button>

      </div>

      {urls?.url && (
        <Link href={urls.url} target="_blank">
          URL
        </Link>
      )}
      {urls?.thumbnailUrl && (
        <Link href={urls.thumbnailUrl} target="_blank">
          Thumbnail
        </Link>
      )}

    </div>
  );
}
