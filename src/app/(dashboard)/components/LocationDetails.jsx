import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const LocationDetails = ({ line1, line2, landmark, setLine1, setLine2, setLandmark }) => {
    return (
        <CardContent>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="line1">Line 1</Label>
                    <Input
                        id="line1"
                        type="text"
                        className="w-full"
                        value={line1}
                        onChange={(e) => setLine1(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="line2">Line 2</Label>
                    <Textarea
                        id="line2"
                        value={line2}
                        onChange={(e) => setLine2(e.target.value)}
                        className="min-h-32"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="landmark">Landmark</Label>
                    <Textarea
                        id="landmark"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        className="min-h-32"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden mt-4">
                <Button variant="outline" size="sm" type="button">
                    Discard
                </Button>
                <Button size="sm" type="submit">Save Product</Button>
            </div>
        </CardContent>
    );
};

export default LocationDetails;
