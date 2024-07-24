import React from 'react';
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

const DashboardCard = ({ path, progressBar, icon: Icon, title, value, progress }) => {
    return (
        <Link  href={`/dashboard/${path}`}>
            <Card className="transition-transform group cursor-pointer duration-300 hover:scale-105 hover:bg-primary hover:text-white">
                <CardHeader className="pb-2">
                    <div className={`flex gap-3 items-center ${progressBar ? "" : "justify-center flex-col"}`}>
                        <Icon className="text-primary group-hover:text-white" />
                        <h1 className="font-bold text-[18px]">{title}</h1>
                    </div>
                    <CardTitle className="text-4xl">{value}</CardTitle>
                </CardHeader>
                {progressBar && (
                    <>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +{progress}% from last week
                            </div>
                        </CardContent>
                    </>
                )}
            </Card>
        </Link>
    );
};

export default DashboardCard;
