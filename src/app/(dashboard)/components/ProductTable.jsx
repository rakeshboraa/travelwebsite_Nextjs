import React from 'react';
import ProductsButtons from "../common/ProductsButtons";
import { Table } from "@/components/ui/table";
import TableHeadDash from "../common/TableHeadDash";
import TableBodyCommon from "../common/TableBodyCommon";
import ConfirmationPopup from "../common/ConfirmationPopup";
import MessageFrom from "../common/MessageFrom";
import TableFilter from '../common/TableFilter';
import Loader from '../common/Loader';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import CommonFromHeader from '../common/CommonFromHeader';

const ProductTable = ({
  loading,
  successMessage,
  closeMessage,
  messageType,
  TabFilterList,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  filteredProducts,
  handleDeleteClick,
  isPopupOpen,
  handleClosePopup,
  handleConfirmDelete,
  isLoading
}) => (
  <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    {loading && <Loader />}
    {successMessage && <MessageFrom message={successMessage} onClose={closeMessage} type={messageType} />}

    <div className="flex items-center">
      <TableFilter TabFilterList={TabFilterList} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductsButtons title="Add Product" path='/addProducts' />
    </div>
    <Input
      type="text"
      placeholder="Search products"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded"
    />
    <Card>
      <CommonFromHeader title='Products' description='Manage Your Products' />
      <CardContent>
        {filteredProducts.length === 0 && !loading ? (
          <div className="text-center p-4">No products are available.</div>
        ) : (
          <Table>
            <TableHeadDash TabHeaderList={['Name', 'Status', 'Price', 'Total Sales', 'Created at']} />
            <TableBodyCommon title='products' filteredProducts={filteredProducts} handleDeleteClick={handleDeleteClick} />
          </Table>
        )}
      </CardContent>
    </Card>
    <ConfirmationPopup
      isOpen={isPopupOpen}
      onClose={handleClosePopup}
      onConfirm={handleConfirmDelete}
      isLoading={isLoading}
    />
  </main>
);

export default ProductTable;
