"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import TableHeadDash from "../common/TableHeadDash";
import TableBodyCommon from "../common/TableBodyCommon";
import { Table } from "@/components/ui/table";
import DateRangePickerFilter from "../common/DateRangePickerFilter";
import PaginationCommon from "../common/PaginationCommon";
import SearchFilter from "../common/SearchFilter";
import ProductsButtons from "../common/ProductsButtons";
import Modal from '@/components/shared/Modal';
import { deleteActivity } from '@/lib/actions/activity.actions';
import { deleteCategory } from '@/lib/actions/category.action'; // Import the deleteCategory function
import { useToast } from '@/components/ui/use-toast';
import CategoryFilter from '@/components/shared/CategoryFilter';
import PriceFilter from '@/components/shared/PriceFilter';

const ListLayout = ({ maximumPrice, TabHeaderList, headerTitle, headerbuttontitle, path, TableBodyData, tableTitle, limit, totalPages, currentPage }) => {

  const minPrice = 0;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()
  const handleToast = () => {
    toast({
      title: "Deleted Successfully",
      className: "bg-green-400 border border-gray-500 text-white rounded-md shadow-lg p-4"
    })
  }

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      if (tableTitle === 'category') {
        await deleteCategory({ categoryId: itemToDelete });
      } else {
        await deleteActivity({ activityId: itemToDelete });
      }
      handleToast();
    } catch (error) {
      console.log(`Error deleting ${tableTitle}:`, error);
    } finally {
      setIsDeleteModalOpen(false);
      setLoading(false);
    }
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <ProductsButtons title={headerTitle} ButtonTitle={headerbuttontitle} path={path} />
      </div>
      <Card>
        <CardContent>
          <div className="flex relative justify-center items-center my-6 gap-3">
            <CategoryFilter />
            <SearchFilter />
            <PriceFilter max={maximumPrice} min={minPrice} />
            <DateRangePickerFilter />
          </div>
          {(!TableBodyData?.length) ? <span className=' w-full flex h-[40vh]  text-[20px] justify-center items-center'>No data found!</span> :
            <Table>
              <TableHeadDash title={tableTitle} TabHeaderList={TabHeaderList} />
              <TableBodyCommon
                tableTitle={tableTitle}
                title={tableTitle}
                TabHeaderList={TabHeaderList}
                filteredProducts={TableBodyData}
                onDeleteClick={handleDeleteClick}
              />
            </Table>
          }
          <PaginationCommon limit={limit} totalPages={totalPages} currentPage={currentPage} />
        </CardContent>
      </Card>
      {isDeleteModalOpen && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
              <p className="mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleConfirmDelete}
                  className={`px-4 py-2 text-white rounded-md transition duration-200 ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                    }`}
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
    </main>
  );
};

export default ListLayout;
