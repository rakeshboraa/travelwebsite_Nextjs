import { generateReactHelpers } from "@uploadthing/react/hooks";

// Configure uploadthing to handle multiple files
export const { useUploadThing, uploadFiles } = generateReactHelpers({
  upload: {
    multiple: true, // Allow multiple file uploads
  },
});
