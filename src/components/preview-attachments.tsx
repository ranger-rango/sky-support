
// // export interface FileWithId
// // {
// //     id: string | number;
// //     name: string;
// //     url: string;
// // }

// // export function PreviewAttachments({ files }: { files: FileWithId[] })
// // {
// //     if (!files.length) return <p>No attachments</p>;

// //     return (
// //         <div className="">
// //             <h4 className="">Attachments</h4>
// //             <ul>
// //             {files.map((file) => (
// //                 <li key={file.id}>
// //                 <a href={file.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
// //                     {file.name}
// //                 </a>
// //                 </li>
// //             ))}
// //             </ul>
// //         </div>
// //     );
// // }

// export interface StoredAttachment {
//   name: string;
//   size: number;
//   type: string;
//   lastModified: number;
//   data: string; // base64 data URL
// }

// export function PreviewAttachments({ files }: { files: StoredAttachment[] }) {
//   if (!files.length) return <p>No attachments</p>;

//   return (
//     <div>
//       <h4 className="font-semibold mb-2">Attachments</h4>
//       <div className="space-y-3">
//         {files.map((file, idx) => {
//           const fileName = file.name || `attachment-${idx + 1}`;

//           if (file.data.startsWith("data:image/")) {
//             return (
//               <div key={idx} className="flex flex-col">
//                 <img
//                   src={file.data}
//                   alt={fileName}
//                   className="w-32 h-32 object-cover rounded border mb-1"
//                 />
//                 <a
//                   href={file.data}
//                   download={fileName}
//                   className="text-blue-600 underline text-sm"
//                 >
//                   {fileName}
//                 </a>
//               </div>
//             );
//           } else if (file.data.startsWith("data:application/pdf")) {
//             return (
//               <div key={idx} className="flex flex-col">
//                 <iframe
//                   src={file.data}
//                   title={fileName}
//                   className="w-64 h-64 border rounded mb-1"
//                 />
//                 <a
//                   href={file.data}
//                   download={fileName}
//                   className="text-blue-600 underline text-sm"
//                 >
//                   {fileName}
//                 </a>
//               </div>
//             );
//           } else {
//             return (
//               <div key={idx} className="flex flex-col">
//                 <span className="text-gray-700">{fileName}</span>
//                 <a
//                   href={file.data}
//                   download={fileName}
//                   className="text-blue-600 underline text-sm"
//                 >
//                   Download file
//                 </a>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }


interface PreviewAttachmentsProps {
  files: {
    name: string;
    size: number;
    type: string;
    lastModified: number;
    data: string;
  }[];
}

export default function PreviewAttachments({ files }: PreviewAttachmentsProps)
{
    return (
    <div className="">
        <h3 className="">Attachments</h3>
        <ul className="">
        {files.map((file, index) => {
            const isImage = file.data.startsWith("data:image/");
            const isPdf = file.data.startsWith("data:application/pdf");

            return (
            <li key={index} className="">
                <span className="">
                {file.name || `attachment-${index + 1}`}
                </span>
                {isImage ? (
                    <img
                        src={file.data}
                        alt={file.name || `attachment-${index + 1}`}
                    />
                    ) : isPdf ? (
                    <iframe
                        src={file.data}
                        title={file.name || `attachment-${index + 1}`}
                        width="400"
                        height="300"
                    />
                    ) : (
                    <a
                        href={file.data}
                        download={file.name || `attachment-${index + 1}`}
                    >
                        Download file
                    </a>
                )}
            </li>
            );
        })}
        </ul>
    </div>
    );
}
