import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const TableFilter = ({ TabFilterList, activeTab, setActiveTab, title }) => {
    return (
        <Tabs defaultValue="all">
            {title === 'category' ? "" :
                <TabsList>
                    {TabFilterList?.map((e, index) => (
                        <TabsTrigger key={`${e + index}`} value={e} onClick={() => setActiveTab(e)} isActive={activeTab === e}>
                            <span className="capitalize">{e}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
            }

        </Tabs>
    )
}

export default TableFilter