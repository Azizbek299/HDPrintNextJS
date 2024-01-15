"use client";

import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import * as React from "react";
import { SingleImageDropzone } from "./single-image-dropzone";

//  Расмларни url адресларни mongoose  дан оламиз
//  ва  Edge Store дан барча расмларни тортиб списка килиб  админ панелда курсатамиз
//  ва ушанда расмларни url  ларини  Delete функцияни ичига куямиз
//  админга кайси расм керак булмаса шу расмлар учиб кетади

//  onClick  ни ичига куямиз худди   await edgestore.myPublicImages.upload   шунга ухшаб
// await edgestore.publicFiles.delete({
//     url: urlToDelete,
//   });

export default function ImageDeleter() {
  const [file, setFile] = React.useState<File>();
  const [urls, setUrls] = React.useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const [progress, setProgress] = React.useState(0);

  const { edgestore } = useEdgeStore();

  return (
    <div className="ml-50 mt-50">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />

      <div className="mt-10 h-20 w-[44rem] border rounded overflow-hidden">
        <div
          className="h-full border bg-slate-900 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        className="border border-blue-400 px-10 py-5 mt-10"
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
        Upload
      </button>
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
