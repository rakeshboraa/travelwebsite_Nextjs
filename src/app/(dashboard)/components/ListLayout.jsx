"use client"
import { Card, CardContent } from "@/components/ui/card"
import ConfirmationPopup from "../common/ConfirmationPopup"
import TableHeadDash from "../common/TableHeadDash"
import TableBodyCommon from "../common/TableBodyCommon"
import { Table } from "@/components/ui/table"
import DateRangePickerFilter from "../common/DateRangePickerFilter"
import PriceRangeSlider from "../common/PriceRangeSlider"
import PaginationCommon from "../common/PaginationCommon"
import CommonFilter from "../common/CommonFilter"
import SearchFilter from "../common/SearchFilter"
import ProductsButtons from "../common/ProductsButtons"
import { useState } from "react"

const ListLayout = ({ TabHeaderList, headerTitle, headerbuttontitle, path, TableBodyData, tableTitle }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteClick = () => {
    setIsPopupOpen(true)
  }
  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleConfirmDelete = async () => {
    setIsPopupOpen(false)
  }
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <ProductsButtons title={headerTitle} ButtonTitle={headerbuttontitle} path={path} />
      </div>
      <Card>
        <CardContent >
          <div className="flex relative   justify-center items-center my-6 gap-3">
            <CommonFilter />
            <SearchFilter />
            <PriceRangeSlider min={0} max={500} step={10} />
            <DateRangePickerFilter />
          </div>
          <Table >
            <TableHeadDash title='category' TabHeaderList={TabHeaderList} />
            <TableBodyCommon handleDeleteClick={handleDeleteClick} tableTitle={tableTitle} title={tableTitle} TabHeaderList={TabHeaderList} filteredProducts={TableBodyData} />
          </Table>
          <PaginationCommon />
        </CardContent>
      </Card>
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmDelete}
        isLoading={isLoading}
      />
    </main>
  )
}

export default ListLayout









