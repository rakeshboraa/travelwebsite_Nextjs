'use client'
import { useCallback } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'
import { Input } from '../ui/input'
import { generateClientDropzoneAccept } from 'uploadthing/client'
const FileUploader = ({ imageUrls, onFieldChange, setFiles }) => {

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
    const fileUrls = acceptedFiles.map(file => convertFileToUrl(file))
    onFieldChange(fileUrls)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*'] ? generateClientDropzoneAccept(['image/*']) : undefined,
    multiple: true
  })

  return (
    <div
      {...getRootProps()}
      className="justify-center items-center w-full bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">
      <Input multiple {...getInputProps()} className="cursor-pointer" />
      {imageUrls?.length > 0 ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          {imageUrls?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`image-${index}`}
              width={250}
              height={250}
              className="w-full object-cover object-center"
            />
          ))}
        </div>
      ) : (
        <div className="flex-col flex items-center py-5 text-grey-500">
          <img src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Drag photos here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>

  )
}

export default FileUploader
