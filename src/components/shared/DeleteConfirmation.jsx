'use client'
import React, { useState } from 'react'
import { deleteActivity } from '@/lib/actions/activity.actions'
import { Button } from '../ui/button'

export const DeleteConfirmation = ({ activityId }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = async () => {
        setIsLoading(true)
        try {
            await deleteActivity({ activityId })
            setIsOpen(false) 
        } catch (error) {
            console.log('Error deleting activity:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const openDialog = () => setIsOpen(true)
    const closeDialog = () => !isLoading && setIsOpen(false)

    return (
        <div open={isOpen} onOpenChange={setIsOpen}>
            <div asChild>
                <div className='text-[14px]' onClick={openDialog}>
                    Delete
                </div>
            </div>

            <div className="bg-white">
                <div>
                    <div>Are you sure you want to delete?</div>
                    <div className="p-regular-16 text-grey-600">
                        This will permanently delete this event
                    </div>
                </div>

                <div>
                    <div onClick={closeDialog} disabled={isLoading}>Cancel</div>
                    <div>
                        <Button type="button" onClick={handleDelete} disabled={isLoading}>
                            {isLoading ? 'Deleting...' : 'Delete'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
