'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Modal from '@/components/shared/Modal';
import { useRouter } from 'next/navigation';
import { deleteActivity } from '@/lib/actions/activity.actions';
import { useToast } from '@/components/ui/use-toast';

const ViewData = ({ listTitles, headerTitle, listData, path, hasImages, dataId }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleToast = () => {
    toast({
      title: "Deleted Successfully",
      className: "bg-green-400 border border-gray-500 text-white rounded-md shadow-lg p-4"
    });
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      await deleteActivity({ activityId: dataId });
      handleToast();
      router.push('/dashboard/activities');
    } catch (error) {
      console.error('Error deleting activity:', error);
    } finally {
      setIsDeleteModalOpen(false);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-8 mt-6 grid flex-1 auto-rows-max gap-6">
        <div className="flex items-center gap-4">
          <h1 className="flex-1 text-xl font-semibold tracking-tight">{headerTitle}</h1>
          <div className="hidden items-center gap-2 md:flex">
            <Link href={`/dashboard/${path}/${dataId}/update`}>
              <Button size="sm" className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                <span>Edit</span>
              </Button>
            </Link>
            <Button
              onClick={handleDeleteClick}
              size="sm"
              className="flex items-center gap-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </Button>
          </div>
        </div>

        <div className={`grid gap-6 ${!hasImages ? 'w-full' : 'md:grid-cols-[1fr_300px] lg:grid-cols-3'}`}>
          <div className="grid auto-rows-max w-full gap-6 lg:col-span-2">
            <Card className="bg-white shadow-lg rounded-lg">
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {listTitles.map((title, index) => (
                    <div className="flex items-start gap-2 py-2" key={index}>
                      <Label htmlFor={title} className="text-lg font-medium capitalize">
                        {title}:
                      </Label>
                      {title === 'availability' ? (
                        <ul className='flex gap-3 items-center justify-center'>
                          {listData[title].map((date, idx) => (
                            <li key={idx} className="text-base capitalize text-gray-700">{date}</li>
                          ))}
                        </ul>
                      ) : title === 'Slots' ? (
                        <span className="text-base capitalize text-gray-700">{listData.availabilityCount}</span>
                      ) : (
                        <h3 className="text-base capitalize text-gray-700">{listData[title]}</h3>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {hasImages && (
            <div className="grid auto-rows-max gap-6">
              <Card className="overflow-hidden bg-white shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {listData?.imageUrls?.map((image, index) => (
                      <Image
                        key={index}
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="100"
                        src={image}
                        width="100"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      {isDeleteModalOpen && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
              <p className="mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleConfirmDelete}
                  className={`px-4 py-2 text-white rounded-md transition duration-200 ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
                  disabled={loading}
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ViewData;
