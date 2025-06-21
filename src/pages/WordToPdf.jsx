// // import React from "react";
// // import { jsPDF } from "jspdf";
// // import { useRef, useState } from "react";
// // import { saveAs } from "file-saver";
// // import * as docx from "docx-preview"; // Ensure this import is active

// // const WordToPdf = () => {
// //   const fileInputRef = useRef(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [pdfUrl, setPdfUrl] = useState("");

// //   const handleFileChange = async (e) => {
// //     setError("");
// //     setPdfUrl("");
// //     const file = e.target.files[0];
// //     if (!file || !file.name.endsWith(".docx")) {
// //       setError("Please select a .docx file.");
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       // Render docx to HTML
// //       const container = document.createElement("div");
// //       await docx.renderAsync(await file.arrayBuffer(), container);

// //       // Convert HTML to PDF using jsPDF
// //       const doc = new jsPDF("p", "pt", "a4");
// //       doc.html(container, {
// //         callback: function (pdf) {
// //           const pdfBlob = pdf.output("blob");
// //           const url = URL.createObjectURL(pdfBlob);
// //           setPdfUrl(url);
// //           setLoading(false);
// //         },
// //         margin: [20, 20, 20, 20],
// //         autoPaging: "text",
// //         x: 10,
// //         y: 10,
// //         width: 575,
// //         windowWidth: 800,
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to convert file. Try another .docx file.");
// //       setLoading(false);
// //     }
// //   };

// //   const handleDownload = () => {
// //     if (pdfUrl) {
// //       saveAs(pdfUrl, "converted.pdf");
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">
// //       <h1 className="text-3xl font-bold mb-4">Word to PDF Converter</h1>
// //       <p className="mb-6">Convert your .docx Word files to PDF easily.</p>
// //       <input
// //         type="file"
// //         accept=".docx"
// //         ref={fileInputRef}
// //         onChange={handleFileChange}
// //         className="mb-4"
// //       />
// //       {loading && <p>Converting...</p>}
// //       {error && <p className="text-red-500">{error}</p>}
// //       {pdfUrl && (
// //         <div className="flex flex-col items-center">
// //           <iframe
// //             src={pdfUrl}
// //             title="PDF Preview"
// //             width="400"
// //             height="500"
// //             className="border mb-4"
// //           />
// //           <button
// //             onClick={handleDownload}
// //             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //           >
// //             Download PDF
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default WordToPdf;





// import React, { useRef, useState } from "react";
// import { jsPDF } from "jspdf";
// import { saveAs } from "file-saver";
// import 'docx-preview'; // Import the aliased module to ensure it's loaded and executed

// // Declare docx as a global variable for TypeScript, as it's typically exposed by the UMD bundle
// // declare const docx: any

// const WordToPdf = () => {
//   const fileInputRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [pdfUrl, setPdfUrl] = useState("");

//   const handleFileChange = async (e) => {
//     setError("");
//     setPdfUrl("");
//     const file = e.target.files;
//     if (!file ||!file.name.endsWith(".docx")) {
//       setError("Please select a.docx file.");
//       return;
//     }
//     setLoading(true);
//     try {
//       // Ensure docx is available globally after the import
//       if (typeof docx === 'undefined' ||!docx.renderAsync) {
//         throw new Error("docx-preview library not loaded correctly or 'docx' global is missing.");
//       }
//       const container = document.createElement("div");
//       await docx.renderAsync(await file.arrayBuffer(), container);

//       // Convert HTML to PDF using jsPDF
//       const doc = new jsPDF("p", "pt", "a4");
//       doc.html(container, {
//         callback: function (pdf) {
//           const pdfBlob = pdf.output("blob");
//           const url = URL.createObjectURL(pdfBlob);
//           setPdfUrl(url);
//           setLoading(false);
//         },
//         margin: [20, 20, 20, 20],
//         autoPaging: "text",
//         x: 10,
//         y: 10,
//         width: 575,
//         windowWidth: 800,
//       });
//     } catch (err) {
//       console.error(err);
//       setError("Failed to convert file. Try another.docx file.");
//       setLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     if (pdfUrl) {
//       saveAs(pdfUrl, "converted.pdf");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg- text-[#111827] font-sans">
//       <h1 className="text-3xl font-bold mb-4">Word to PDF Converter</h1>
//       <p className="mb-6">Convert your.docx Word files to PDF easily.</p>
//       <input
//         type="file"
//         accept=".docx"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="mb-4"
//       />
//       {loading && <p>Converting...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       {pdfUrl && (
//         <div className="flex flex-col items-center">
//           <iframe
//             src={pdfUrl}
//             title="PDF Preview"
//             width="400"
//             height="500"
//             className="border mb-4"
//           />
//           <button
//             onClick={handleDownload}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Download PDF
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WordToPdf;